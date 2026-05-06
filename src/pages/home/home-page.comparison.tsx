import { COMPARISON_COLUMNS } from '@/shared/constants/comparisons';
import { CheckCircleIcon } from '@/shared/icon/check-circle';
import { ExternalLink } from '@/shared/ui/external-link';
import { Spacing } from '@/shared/ui/spacing';

export function HomePageComparison() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-(--global-layout-width) px-5">
        <div className="grid grid-cols-2 divide-x-2 divide-gray-100">
          {COMPARISON_COLUMNS.map((column) => (
            <div key={column.title} className="px-8">
              <h3 className="text-xl font-medium">{column.title}</h3>
              <Spacing size={20} />
              <ul className="flex flex-col gap-2">
                {column.items.map((item) => (
                  <li
                    key={item.label}
                    data-eligibility={!!item.eligibility}
                    className="mb-5 not-last:data-[eligibility=true]:mb-9"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="size-7.5 text-[#197ad3]" />
                      {item.href ? (
                        <ExternalLink href={item.href} className="text-lg">
                          {item.label}
                        </ExternalLink>
                      ) : (
                        <span className="text-lg">{item.label}</span>
                      )}
                    </div>
                    <Spacing size={20} />
                    {item.eligibility && (
                      <ul className="flex list-inside list-disc flex-col gap-3 pl-1">
                        {item.eligibility.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
