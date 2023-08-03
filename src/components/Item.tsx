import { styled } from 'styled-components';
import TodoItem from './interfaces/TodoItem';
import { useDispatch } from 'react-redux';
import { deleteTodo, switchTodo } from '../redux/modules/todolist';
import { IoIosMore } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

type Props = {
  item: TodoItem;
  index: number;
  isOpen: number;
  setIsOpen: any;
};

const Item = ({ item, index, isOpen, setIsOpen }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickSwitchHandler = (itemId: string) => {
    dispatch(switchTodo(itemId));
  };

  const onClickDeleteHandler = (itemId: string): void => {
    dispatch(deleteTodo(itemId));
  };

  const onClickNavigateHandler = (itemId: string) => {
    navigate(`/detail/${itemId}`);
  };

  const onClickToggleHandler = (itemId: string, index: number) => {
    if (index === isOpen) {
      return setIsOpen(-1);
    }
    return setIsOpen(index);
  };
  console.log('index', index);
  console.log('isOpen', isOpen);
  return (
    <StWrapper>
      <p>{item.title}</p>
      <IoIosMore
        style={{ cursor: 'pointer' }}
        onClick={() => {
          onClickToggleHandler(item.id, index);
        }}
      />

      {index === isOpen && (
        <StButtons>
          <Button onClick={() => onClickDeleteHandler(item.id)} name="delete">
            삭제
          </Button>
          <Button onClick={() => onClickSwitchHandler(item.id)} name="switch">
            {item.isDone ? '취소' : '완료'}
          </Button>
          <Button
            name="more"
            onClick={() => {
              onClickNavigateHandler(item.id);
            }}>
            상세보기
          </Button>
        </StButtons>
      )}
    </StWrapper>
  );
};

export default Item;

const StWrapper = styled.div`
  background-color: #ffffff;
  /* border: 1px solid #000; */
  border: 1px solid #819981;

  padding: 20px;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  & > p {
    width: 90%;
    color: #777777;
    font-weight: 500;
    line-height: 35px;
  }
  position: relative;
`;

const StButtons = styled.div`
  background-color: #fff;
  width: 150px;
  height: 110px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -140px;
  z-index: 3;
  border-radius: 10px;
  border: 1px solid #96947c;
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
    } else if (name === 'switch') {
      // return '1.5px solid #9e9d89';
      return '1.5px solid #96947c';
    } else if (name === 'more') {
      return '1.5px solid #6362b6';
    }
  }};
  &:hover {
    background-color: ${({ name }) => {
      if (name === 'delete') {
        return '#E2BCB7';
      } else if (name === 'switch') {
        return '#9e9d8982';
      } else if (name === 'more') {
        return '#6362b669';
      }
    }};
  }
`;
