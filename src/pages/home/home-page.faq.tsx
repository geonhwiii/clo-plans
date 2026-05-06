import { useState } from 'react';

import { FAQ_INITIAL_COUNT, FAQS } from '@/shared/constants/faqs';
import { Accordion } from '@/shared/ui/accordion';
import { ExternalLink } from '@/shared/ui/external-link';

export function HomePageFAQ() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleFaqs = isExpanded ? FAQS : FAQS.slice(0, FAQ_INITIAL_COUNT);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-(--global-layout-width) px-5">
        <div className="col-span-1 flex flex-col items-start gap-4">
          <h3 className="text-2xl font-medium">자주 묻는 질문</h3>
          <ExternalLink
            href="https://support.clo3d.com/hc"
            className="rounded-md px-2 py-1 text-center font-medium text-(--color-primary) hover:bg-blue-50 hover:no-underline"
          >
            CLO 헬프센터
          </ExternalLink>
        </div>
        <div className="col-span-3 flex flex-col">
          <Accordion items={visibleFaqs} />
          {!isExpanded && (
            <div className="mt-4">
              <button
                type="button"
                className="cursor-pointer rounded-md px-2 py-1 text-center font-medium text-(--color-primary) hover:bg-blue-50"
                onClick={() => setIsExpanded(true)}
              >
                더 알아보기
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
