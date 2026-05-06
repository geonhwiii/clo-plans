import { useState } from 'react';

import { DollarIcon } from '@/shared/icon/dollar';
import { Button } from '@/shared/ui/button';
import { Spacing } from '@/shared/ui/spacing';
import { ToggleSwitch } from '@/shared/ui/toggle-switch';
import { cn } from '@/shared/utils/cn/cn';

type PlanCard = {
  title: string;
  pricing?: { monthly: number; yearly: number };
  description?: string;
  buttonLabel: string;
  buttonDisabled?: boolean;
};

const PLANS: PlanCard[] = [
  {
    title: '학생',
    pricing: { monthly: 25, yearly: 225 },
    buttonLabel: '시작하기',
    buttonDisabled: true,
  },
  {
    title: '개인용 플랜',
    pricing: { monthly: 50, yearly: 450 },
    buttonLabel: '시작하기',
  },
  {
    title: '기업용 플랜',
    description: '제품 개발 혁신 및 최적화를 위해 모든 기업을 지원하는 통합 솔루션.',
    buttonLabel: '문의하기',
  },
  {
    title: '교육기관용 플랜',
    description: 'CLO를 당신의 교육 커리큘럼에 통합할 수 있는 교육기관 솔루션',
    buttonLabel: '문의하기',
  },
];

export function HomePagePlans() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-(--global-layout-width) px-5">
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-5xl font-bold">플랜</h1>
          <p className="text-sm text-gray-500">당신에게 알맞은 플랜을 선택하세요.</p>
        </div>
        <Spacing size={40} />
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <span
            className={cn(
              'justify-self-end font-medium',
              isYearly ? 'text-gray-500' : 'text-black',
            )}
          >
            매월
          </span>
          <ToggleSwitch checked={isYearly} onChange={setIsYearly} />
          <span
            className={cn(
              'justify-self-start font-medium',
              isYearly ? 'text-black' : 'text-gray-500',
            )}
          >
            매년 <span className="text-gray-400">(25% 할인)</span>
          </span>
        </div>
        <Spacing size={32} />
        {/* 플랜 카드 */}
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className="flex-1 rounded-md border-t-12 border-t-[#404aff] bg-white pt-16 pb-10 shadow-sm"
            >
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <Spacing size={16} />
                <div className="flex h-30 flex-col items-center justify-center">
                  {plan.pricing ? (
                    <>
                      <div className="flex items-center justify-center gap-2">
                        <DollarIcon />
                        <p className="text-6xl font-bold">
                          {isYearly ? plan.pricing.yearly : plan.pricing.monthly}
                        </p>
                      </div>
                      <Spacing size={16} />
                      <p className="text-lg">
                        <b>USD /</b> {isYearly ? '년' : '월'}
                      </p>
                    </>
                  ) : (
                    <p className="px-6 text-center text-lg whitespace-pre-line">
                      {plan.description}
                    </p>
                  )}
                </div>
                <Spacing size={16} />
                <Button disabled={plan.buttonDisabled}>{plan.buttonLabel}</Button>
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
