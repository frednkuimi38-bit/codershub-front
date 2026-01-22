import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from '../components/shared/ErrorBoundary.jsx';

// Imports directs pour éviter les erreurs de lazy loading
import PremiumHomePage from '../pages/PremiumHomePage.jsx';
import AuthPage from '../pages/AuthPage.jsx';
import PolePage from '../pages/PolePage.jsx';
import NotFound from '../pages/NotFound.jsx';

// Layouts
import MainLayout from '../layouts/MainLayout.jsx';
import PoleLayout from '../layouts/PoleLayout.jsx';

// Composants d'auth
import ProtectedRoute from '../components/auth/ProtectedRoute.jsx';
import LoadingSpinner from '../components/auth/LoadingSpinner.jsx';

export const router = createBrowserRouter([
  {
    path: '/auth',
    element: (
      <ErrorBoundary>
        <AuthPage />
      </ErrorBoundary>
    )
  },
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <PremiumHomePage />
          </ErrorBoundary>
        )
      }
    ]
  },
  {
    path: '/:poleId',
    element: (
      <ErrorBoundary>
        <ProtectedRoute>
          <PoleLayout />
        </ProtectedRoute>
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <PolePage />
          </ErrorBoundary>
        )
      }
    ]
  },
  {
    path: '*',
    element: (
      <ErrorBoundary>
        <NotFound />
      </ErrorBoundary>
    )
  }
]);
