import React from 'react';

import { styled } from 'styled-components';
import FormNewTodo from '../components/FormNewTodo';
import ItemList from '../components/ItemList';

const Home = () => {
  return (
    <>
      <FormNewTodo />
      <StMain>
        <ItemList isDone={false} />
        <ItemList isDone={true} />
      </StMain>
    </>
  );
};

export default Home;

const StMain = styled.main`
  box-sizing: border-box;
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 45px;
`;
