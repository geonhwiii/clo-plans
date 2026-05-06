import type { ReactNode } from 'react';

import { COMPARISON_COLUMNS } from '@/shared/constants/comparisons';
import { CheckCircleIcon } from '@/shared/icon/check-circle';
import { ExternalLink } from '@/shared/ui/external-link';
import { Spacing } from '@/shared/ui/spacing';

export function HomePageComparison() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-(--global-layout-width) px-5">
        <div className="grid grid-cols-2 divide-x-2 divide-gray-100 lg:grid-cols-4">
          {COMPARISON_COLUMNS.map(({ title, items }) => (
            <ComparisonGroup key={title} title={title}>
              {items.map((item) => (
                <ComparisonRow
                  key={item.label}
                  icon={<CheckCircleIcon className="size-7.5 shrink-0 text-[#197ad3]" />}
                  href={item.href}
                  label={item.label}
                  eligibility={item.eligibility}
                />
              ))}
            </ComparisonGroup>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ComparisonGroupProps {
  title: string;
  children: ReactNode;
}

function ComparisonGroup({ title, children }: ComparisonGroupProps) {
  return (
    <div className="px-8">
      <h3 className="text-xl font-medium">{title}</h3>
      <Spacing size={20} />
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

interface ComparisonRowProps {
  icon: ReactNode;
  label: string;
  href?: string;
  eligibility?: string[];
}

function ComparisonRow({ icon, label, href, eligibility }: ComparisonRowProps) {
  return (
    <li data-eligibility={!!eligibility} className="mb-5 not-last:data-[eligibility=true]:mb-9">
      <div className="flex gap-2">
        {icon}
        {href ? (
          <ExternalLink href={href} className="text-lg">
            {label}
          </ExternalLink>
        ) : (
          <span className="text-lg">{label}</span>
        )}
      </div>
      <Spacing size={20} />
      {eligibility && (
        <ul className="flex list-inside list-disc flex-col gap-3 pl-1">
          {eligibility.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
