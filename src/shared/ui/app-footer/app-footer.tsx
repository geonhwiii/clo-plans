import { LogoIcon } from '@/shared/icon/logo';

import { Divider } from '../divider';

export function AppFooter() {
  return (
    <footer className="shrink-0 bg-(--color-bg-footer) px-5 py-10">
      <div className="mx-auto max-w-(--global-layout-width)">
        <section>
          <div className="flex flex-col">
            <p className="text-lg font-medium text-gray-100">{'CLO의 최신정보'}</p>
            <p className="text-sm text-gray-500">
              {'뉴스, 프로모션, 리소스 및 다양한 소식을 확인하세요.'}
            </p>
          </div>
        </section>
        <Divider className="my-10" />
        <div className="flex items-center gap-5">
          <LogoIcon />
        </div>
      </div>
    </footer>
  );
}
