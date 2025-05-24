import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from '@styles/GlobalStyles';
import SearchPage from '@pages/SearchPage';
import WishListPage from '@pages/WishListPage';
import AppLayout from '@layouts/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />, // 공통 레이아웃 컴포넌트
    children: [
      {
        path: '/',
        element: <SearchPage />,
      },
      {
        path: '/wishlist',
        element: <WishListPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
