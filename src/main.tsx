import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/shared/styles/globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { App } from './app';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
