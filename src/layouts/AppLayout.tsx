import { Outlet } from 'react-router-dom';
import Header from '@layouts/Header';
import { LayoutWrapper } from './AppLayout.styles';

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
