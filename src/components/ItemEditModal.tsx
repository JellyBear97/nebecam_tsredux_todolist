import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { RootState } from '../redux/config/configStore';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { endEdit } from '../redux/modules/editModalController';
import { editTodo } from '../redux/modules/todolist';
import TodoItem from './interfaces/TodoItem';

const ItemEditModal = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const dispatch = useDispatch();

  const todos = useSelector((state: RootState) => state.todolist);
  const todo = todos.find(todo => todo.id === id);
  console.log('📌', todo);
  const [title, setTitle] = useState<string>('');
  const [memo, setMemo] = useState<string>('');
  useEffect(() => {
    console.log('✅', todo);
    if (todo) {
      setTitle(todo.title);
      if (todo.memo) {
        setMemo(todo.memo);
      }
    }
  }, []);

  const onChagneInputHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setMemo(e.target.value);
    }
  };
  const onClickCloseHandler = () => dispatch(endEdit());
  const onClickEditHandler = () => {
    const editedTodo: TodoItem = {
      id,
      title,
      memo,
    };
    dispatch(editTodo(editedTodo));
  };
  return (
    <>
      <StOuter>
        <StInner>
          <StForm>
            <h3>TODO 수정</h3>
            <input type="text" value={title} name="title" onChange={e => onChagneInputHandler(e)} />
            <textarea value={memo} name="memo" onChange={e => onChagneInputHandler(e)}></textarea>
            <StButtons>
              <Button name="green" type="submit" onClick={onClickEditHandler}>
                수정완료
              </Button>
              <Button type="button" onClick={onClickCloseHandler}>
                닫기
              </Button>
            </StButtons>
          </StForm>
        </StInner>
      </StOuter>
    </>
  );
};

export default ItemEditModal;

const StOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 30;
`;

const StInner = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
`;

const StButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const StForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  gap: 30px;
  & input {
    width: 400px;
    padding: 10px 20px;
    border-radius: 10px;
  }
  & textarea {
    width: 400px;
    height: 100%;
    padding: 10px 20px;
    border-radius: 10px;
    resize: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #fff;
  width: ${({ name }) => {
    if (name === 'delete' || name === 'switch') {
      return 'calc(50% - 5px);';
    } else if (name === 'more') {
      return '100%';
    }
  }};
  height: 35px;
  border-radius: 10px;
  color: #666666;
  border: ${({ name }) => {
    if (name === 'delete') {
      return '1.5px solid #b67162;';
    } else if (name === 'green') {
      // return '1.5px solid #9e9d89';
      return '1.5px solid #96947c';
    } else {
      return '1.5px solid #6362b6';
    }
  }};
  &:hover {
    background-color: ${({ name }) => {
      if (name === 'delete') {
        return '#E2BCB7';
      } else if (name === 'green') {
        return '#9e9d8982';
      } else {
        return '#6362b669';
      }
    }};
  }
`;
