import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todolist from '../modules/todolist';
import editModalController from '../modules/editModalController';

const rootReducer = combineReducers({
  // modules에 넣어둔 state의 묶음을 key-value 객체 형태로 담아
  todolist,
  editModalController,
});

const store = createStore(rootReducer);

// store 내보내기
export default store;

export type RootState = ReturnType<typeof rootReducer>;
