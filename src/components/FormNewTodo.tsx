// [ ] 한글키 -> 영어키 : 영어키만 됨
// ....... 이젠 둘다 안됨....

import React, { useRef, useState } from 'react';
import { styled } from 'styled-components';
import { nanoid } from 'nanoid';
import TodoItem from './interfaces/TodoItem';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todolist';

const FormNewTodo = () => {
  const [title, setTitle] = useState<string>('');
  const [memo, setMemo] = useState<string>('');
  const dispatch = useDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const memoRef = useRef<HTMLInputElement>(null);
  // const [test, setTest] = useState<boolean>(false);

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'enter') {
      e.preventDefault();
      if (!title) {
        alert('할 일을 입력해주세요');
        return false;
      }
      const memoCurrent = memoRef.current;
      if (!memoCurrent) return;
      memoCurrent.focus();
    }
  };

  const onChangeContentHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    }
    if (e.target.name === 'memo') {
      setMemo(e.target.value);
    }
  };

  const onSubmitTodoHandler = (e: React.FormEvent<HTMLFormElement>): void | false => {
    e.preventDefault();
    // console.log(test);
    // if (!test) return;
    if (!title) {
      alert('할 일을 입력해주세요');
      return false;
    }
    const newTodo: TodoItem = {
      id: nanoid(),
      title,
      memo,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle('');
    setMemo('');

    const titleCurrent = titleRef.current;
    if (!titleCurrent) return;
    titleCurrent.focus(); // 해결해주세염 배고파염 ...
  };
  return (
    <StForm onSubmit={e => onSubmitTodoHandler(e)}>
      <input type="text" placeholder="할 일을 작성해주세요" value={title} name="title" onChange={e => onChangeContentHandler(e)} onKeyDown={onKeyPressHandler} ref={titleRef} />
      <input
        type="text"
        placeholder="할 일에 대한 메모를 적어주세요"
        value={memo}
        name="memo"
        onChange={e => onChangeContentHandler(e)}
        ref={memoRef}
        // onFocus={() => setTest(true)}
        // onBlur={() => setTest(false)}
      />
      <button type="submit">ADD</button>
    </StForm>
  );
};

export default FormNewTodo;

const StForm = styled.form`
  display: flex;
  justify-content: center;
  padding: 45px;
  & > input {
    box-sizing: border-box;
    width: 500px;
    height: 45px;
    padding: 20px;
    vertical-align: middle;
    border: 1px solid #bdbdbd;
    border-right: none;
  }
  & > input:nth-child(1) {
    border-radius: 10px 0 0 10px;
  }
  & > input:nth-child(2) {
    border-radius: 0;
  }
  & > input:focus {
    outline: none;
  }

  & > button {
    width: 80px;
    height: 45px;
    border: 1px solid #bdbdbd;
    /* background-color: #eee; */
    /* background-color: #7a9379; */
    background-color: #819981;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
  }
`;
