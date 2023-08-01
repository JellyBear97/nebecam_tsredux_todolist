import Layout from './components/common/Layout';
import FormNewTodo from './components/FormNewTodo';
import TodoList from './components/ItemList';
import { styled } from 'styled-components';
import './reset.css';

// export interface Todo {
//   id: string;
//   content: string;
//   isDone: boolean;
// }

// const initialTodos: Todo[] = [
//   {
//     id: 'abc',
//     content: 'TypeScript 복습하기',
//     isDone: false,
//   },
//   {
//     id: 'bcd',
//     content: '물 한잔 마시기',
//     isDone: true,
//   },
// ];

const App = () => {
  return (
    <Layout>
      <FormNewTodo />
      <StMain>
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </StMain>
    </Layout>
  );
};

export default App;

const StMain = styled.main`
  box-sizing: border-box;
  width: 1000px;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 80px;
  margin-bottom: 45px;
`;
