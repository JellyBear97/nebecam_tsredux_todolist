import React from 'react';
import { styled } from 'styled-components';

const Buttons = () => {
  return (
    <div>
      <Button></Button>
    </div>
  );
};

export default Buttons;

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
