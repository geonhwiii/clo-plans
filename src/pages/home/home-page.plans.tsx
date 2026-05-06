import { DollarIcon } from '@/shared/icon/dollar';
import { Button } from '@/shared/ui/button';
import { Spacing } from '@/shared/ui/spacing';

export function HomePagePlans() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-(--global-layout-width) px-5">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-5xl font-bold">플랜</h1>
          <p className="text-sm text-gray-500">당신에게 알맞은 플랜을 선택하세요.</p>
        </div>
        <Spacing size={40} />
        <div className="flex items-center justify-center gap-4">
          <div>매월</div>
          <div>스위치</div>
          <div>매년 (25% 할인)</div>
        </div>
        <Spacing size={32} />
        {/* 플랜 카드 */}
        <div className="grid w-full grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex-1 rounded-md border-t-12 border-t-[#404aff] bg-white pt-16 pb-10 shadow-sm"
            >
              <div className="flex flex-col items-center justify-center">
                <h3>개인용 플랜</h3>
                <Spacing size={16} />
                <div className="flex items-center justify-center gap-2">
                  <DollarIcon />
                  <p className="text-6xl font-bold">450</p>
                </div>
                <Spacing size={16} />
                <p className="text-lg">
                  <b>USD /</b> 년
                </p>
                <Spacing size={16} />
                <Button>구매하기</Button>
                <Spacing size={16} />
                <a className="flex h-10 w-40 cursor-pointer items-center justify-center rounded-md text-center text-lg text-(--color-primary) hover:bg-blue-50">
                  더 알아보기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
