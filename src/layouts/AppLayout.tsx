import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header';
import styled from '@emotion/styled';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

/**
 * 공통 레이아웃 컴포넌트
 */
const AppLayout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};

export default AppLayout;
