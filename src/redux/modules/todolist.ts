// 액션타입 선언
// 뒤에 as const를 붙여줌으로서 나중에 액션 객체를 만들게 anction.type의 값을 추론하는 과정에서

import TodoItem from '../../components/interfaces/TodoItem';

// action.type이 string으로 추론되지 않고, 'counter/INCREASE'와 같이 실제 문자열 값으로 추론되도록 해줌
const ADD_TODO = 'todolist/ADD_TODO' as const;
const SWITCH_TODO = 'todolist/SWICH_TODO' as const;
const DELETE_TODO = 'todolist/DELETE_TODO' as const;
const EDIT_TODO = 'todolist/EDIT_TODO' as const;

// 액션 생성함수를 선언
export const addTodo = (payload: TodoItem) => ({ type: ADD_TODO, payload });
export const switchTodo = (payload: string) => ({ type: SWITCH_TODO, payload });
export const deleteTodo = (payload: string) => ({ type: DELETE_TODO, payload });
export const editTodo = (payload: TodoItem) => ({ type: EDIT_TODO, payload });

// 모든 액션 객체들에 대한 타입을 준비
// ReturnType<typeof ____>는 특정 함수의 반환값을 추론해줌
// 상단부에서 액션타입을 선언할 때 as const를 하지 않으면 이 부분이 제대로 작동하지 않음
type TodolistAction = ReturnType<typeof addTodo> | ReturnType<typeof switchTodo> | ReturnType<typeof deleteTodo> | ReturnType<typeof editTodo>;

// 초기상태를 선언
export const initialState: TodoItem[] = [];

// 리듀서를 작성.
// 📌 리듀서에는 state와 함수의 반환값이 일치하도록 작성 (함수의 return값이 곧 newState이니까)
// 액션에서는 우리가 방금만든 TodolistAction을 타입으로 설정

const todolist = (state: TodoItem[] = initialState, action: TodolistAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case SWITCH_TODO:
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.payload;
      });
    case EDIT_TODO:
      return state.map(todo => {
        const { id, title, memo } = action.payload;
        if (todo.id === id) {
          return { ...todo, title, memo };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todolist;
