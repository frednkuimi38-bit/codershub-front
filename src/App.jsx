import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './hooks/useAuth.jsx';
import { AppRouter } from './router/index.jsx';
import ErrorBoundary from './components/shared/ErrorBoundary.jsx';

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
