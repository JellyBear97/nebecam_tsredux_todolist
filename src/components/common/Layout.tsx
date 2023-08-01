import React from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <StWrapper>
      <StHeader>
        <h1>MY TODOLIST</h1>
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
    color: #819981;
    font-size: 30px;
    font-weight: 700;
  }
`;

const StFooter = styled.footer`
  // * footer가  최하단 위치에 있고, header와 footer사이에 나머지 공간을 다 차지하는 contents가 들어오면 footer는 자동으로 최하단에 위치가 되기 때문에 따로 position:absolute를 주지않는다.
  // [ ] header랑 footer외에는 position속성을 쓰고 있는 element가 없고, 그러면 footer에 position:absolute 속성을 주었을 때 body기준 최하단에 붙어있어야하는게 맞을텐데 왜 중간에 걸려있지?
  /* position: absolute; */
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
