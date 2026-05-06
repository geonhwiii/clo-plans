import { type ReactNode, useState } from 'react';

import { FAQS } from '@/shared/constants/faqs';
import { Accordion } from '@/shared/ui/accordion';
import { ExternalLink } from '@/shared/ui/external-link';

const FAQ_INITIAL_COUNT = 8;

export function HomePageFAQ() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-(--global-layout-width) px-5">
        <FAQHeader
          title="자주 묻는 질문"
          linkHref="https://support.clo3d.com/hc"
          linkLabel="CLO 헬프센터"
        />
        <FAQList>
          <Accordion items={isExpanded ? FAQS : FAQS.slice(0, FAQ_INITIAL_COUNT)} />
          {!isExpanded && (
            <ShowMoreButton onClick={() => setIsExpanded(true)}>더 알아보기</ShowMoreButton>
          )}
        </FAQList>
      </div>
    </section>
  );
}

interface FAQHeaderProps {
  title: string;
  linkHref: string;
  linkLabel: string;
}

function FAQHeader({ title, linkHref, linkLabel }: FAQHeaderProps) {
  return (
    <div className="col-span-1 flex flex-col items-start gap-4">
      <h3 className="text-2xl font-medium">{title}</h3>
      <ExternalLink
        href={linkHref}
        className="rounded-md px-2 py-1 text-center font-medium text-(--color-primary) hover:bg-blue-50 hover:no-underline"
      >
        {linkLabel}
      </ExternalLink>
    </div>
  );
}

function FAQList({ children }: { children: ReactNode }) {
  return <div className="col-span-3 flex flex-col">{children}</div>;
}

interface ShowMoreButtonProps {
  onClick: () => void;
  children: ReactNode;
}

function ShowMoreButton({ onClick, children }: ShowMoreButtonProps) {
  return (
    <div className="mt-4">
      <button
        type="button"
        className="cursor-pointer rounded-md px-2 py-1 text-center font-medium text-(--color-primary) hover:bg-blue-50"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
