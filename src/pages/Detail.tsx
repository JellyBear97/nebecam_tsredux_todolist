import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../redux/config/configStore';
import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';
import { startEdit } from '../redux/modules/editModalController';

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams() as { id: string };
  const todo = useSelector((state: RootState) => {
    const todos = state.todolist;
    console.log('todos', todos);
    return todos.find(todo => {
      return todo.id === id;
    });
  });
  const onClickEditModalHandler = () => {
    dispatch(startEdit());
  };
  return (
    <StWrapper>
      <StTitle>
        <h3>TITLE : </h3>
        <span>{todo?.title}</span>
      </StTitle>
      <StTodoId>나는 아이디임 : {todo?.id}</StTodoId>
      <StMemo>
        <p>{todo?.memo ? todo?.memo : '나의 TODO에 대한 메모를 남겨주세요!'}</p>
      </StMemo>
      <p>완료여부 : {todo?.isDone ? '완료!' : '미완!'}</p>
      <StButtons>
        <Button name="green" onClick={onClickEditModalHandler}>
          수정
        </Button>
        <Button onClick={() => navigate(-1)}>뒤로가기</Button>
      </StButtons>
    </StWrapper>
  );
};

export default Detail;

const StWrapper = styled.div`
  margin: auto;
  padding: 20px;
  background-color: #f6f4f0;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const StTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    margin-left: 20px;
    border-bottom: 1px solid #000;
    padding: 10px 10px;
  }
`;
const StMemo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  & p {
    background-color: #fff;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 20px;
    line-height: 35px;
  }
`;

const StTodoId = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 10px;
`;

const StButtons = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 10px; */
  /* height: 110px;
  width: 150px;
  position: absolute;
  flex-wrap: wrap;
  background-color: #fff;
  top: 0;
  bottom: 0;
  right: -140px;
  z-index: 3;
  border-radius: 10px;
  border: 1px solid #96947c; */
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #fff;
  width: ${({ name }) => {
    if (name === 'delete' || name === 'green') {
      return 'calc(50% - 5px);';
    } else if (name === 'more') {
      return '100%';
    } else {
      return '115px';
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
