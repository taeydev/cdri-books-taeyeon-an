import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyles } from '@styles/GlobalStyles';
import SearchPage from '@pages/SearchPage';
import WishListPage from '@pages/WishListPage';
import AppLayout from '@layouts/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
