import { RouterProvider } from 'react-router-dom';
import { router } from './routerConfig.jsx';

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
