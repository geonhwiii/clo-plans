import { type ReactNode, useState } from 'react';

import { type Plan, PLANS } from '@/shared/constants/plans';
import { DollarIcon } from '@/shared/icon/dollar';
import { Button } from '@/shared/ui/button';
import { Spacing } from '@/shared/ui/spacing';
import { ToggleSwitch } from '@/shared/ui/toggle-switch';
import { cn } from '@/shared/utils/cn/cn';

export function HomePagePlans() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto w-full max-w-(--global-layout-width) px-5">
        <PlanTitle title="플랜" subtitle="당신에게 알맞은 플랜을 선택하세요." />
        <Spacing size={40} />
        <BillingSwitch
          left="매월"
          right={
            <>
              매년 <span className="text-gray-400">(25% 할인)</span>
            </>
          }
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <Spacing size={32} />
        <PlanCardList plans={PLANS} isYearly={isYearly} />
      </div>
    </section>
  );
}

interface PlanTitleProps {
  title: string;
  subtitle: string;
}
function PlanTitle({ title, subtitle }: PlanTitleProps) {
  return (
    <>
      <h1 className="text-center text-5xl font-bold">{title}</h1>
      <Spacing size={24} />
      <p className="text-center text-sm text-gray-500">{subtitle}</p>
    </>
  );
}

interface BillingSwitchProps {
  left: ReactNode;
  right: ReactNode;
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
}

function BillingSwitch({ left, right, checked, onCheckedChange }: BillingSwitchProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <span
        className={cn('justify-self-end font-medium', checked ? 'text-gray-500' : 'text-black')}
      >
        {left}
      </span>
      <ToggleSwitch checked={checked} onChange={onCheckedChange} />
      <span
        className={cn('justify-self-start font-medium', checked ? 'text-black' : 'text-gray-500')}
      >
        {right}
      </span>
    </div>
  );
}

interface PlanCardListProps {
  plans: Plan[];
  isYearly: boolean;
}

function PlanCardList({ plans, isYearly }: PlanCardListProps) {
  return (
    <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
      {plans.map((plan) => (
        <PlanCard key={plan.title} plan={plan} isYearly={isYearly} />
      ))}
    </div>
  );
}

function PlanCard({ plan, isYearly }: { plan: Plan; isYearly: boolean }) {
  return (
    <div className="flex-1 rounded-md border-t-12 border-t-[#404aff] bg-white pt-16 pb-10 shadow-sm">
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
            <p className="px-6 text-center text-lg whitespace-pre-line">{plan.description}</p>
          )}
        </div>
        <Spacing size={16} />
        <Button disabled={plan.buttonDisabled}>{plan.buttonLabel}</Button>
        <Spacing size={16} />
        <a className="flex h-10 w-40 cursor-pointer items-center justify-center rounded-md text-center text-lg text-(--color-primary) hover:bg-blue-50">
          {'더 알아보기'}
        </a>
      </div>
    </div>
  );
}
