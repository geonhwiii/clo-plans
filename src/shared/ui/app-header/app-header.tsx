import { MenuIcon } from 'lucide-react';

import { LogoIcon } from '@/shared/icon/logo';

export function AppHeader() {
  return (
    <header className="h-(--global-header-height) shrink-0 border-b border-gray-200 bg-white shadow-md shadow-gray-200">
      <div className="mx-auto flex h-full max-w-(--global-layout-width) items-center justify-between px-5">
        <div className="flex items-center gap-5">
          <MenuIcon className="size-5" />
          <LogoIcon />
        </div>
        <a href="/" className="text-lg font-medium">
          {'로그인'}
        </a>
      </div>
    </header>
  );
}
