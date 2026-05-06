import { Outlet } from 'react-router';

import { AppFooter } from '@/shared/ui/app-footer';
import { AppHeader } from '@/shared/ui/app-header';

export function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <AppHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
}
