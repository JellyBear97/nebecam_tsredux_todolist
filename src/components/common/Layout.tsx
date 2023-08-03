import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import ItemEditModal from '../ItemEditModal';
import { RootState } from '../../redux/config/configStore';
import { useSelector } from 'react-redux';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isOpenEditModalController = useSelector((state: RootState) => state.editModalController);
  const navigate = useNavigate();
  return (
    <StWrapper>
      {isOpenEditModalController && <ItemEditModal />}
      <StHeader>
        <h1 onClick={() => navigate('/')}>MY TODOLIST</h1>
      </StHeader>
      <StForChildren>{children}</StForChildren>
      <StFooter>
        <p>ⓒ 2023. JellyBear97. All rights reserved.</p>
      </StFooter>
    </StWrapper>
  );
};

export default Layout;

const StWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const StHeader = styled.header`
  background-color: #fff;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 80px;

  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  & > h1 {
    cursor: pointer;
    color: #819981;
    font-size: 30px;
    font-weight: 700;
  }
  z-index: 20;
`;

const StFooter = styled.footer`
  bottom: 0;

  box-sizing: border-box;
  width: 100%;
  height: 80px;

  padding: 20px;

  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    color: #819981;
  }
`;

const StForChildren = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  width: 1200px;
  min-height: calc(100vh - 160px);
`;
