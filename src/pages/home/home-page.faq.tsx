import { useState } from 'react';

import { Accordion } from '@/shared/ui/accordion';
import { ExternalLink } from '@/shared/ui/external-link';

const INITIAL_COUNT = 8;

const FAQ_ITEMS = [
  { label: '설치 프로그램은 어떻게 다운로드하나요?', value: '' },
  { label: 'CLO 시스템 요구사항 (2026년 4월)', value: '' },
  { label: 'CLO의 가격은 얼마인가요?', value: '' },
  { label: 'CLO는 어떻게 구매하나요?', value: '' },
  { label: 'CLO는 어떤 라이선스를 제공하나요?', value: '' },
  {
    label: 'CLO 개인용 플랜, CLO 기업용 플랜 그리고 CLO 교육용 플랜의 차이는 무엇인가요?',
    value: '',
  },
  { label: '교육기관을 위한 라이선스도 제공하나요?', value: '' },
  { label: 'CLO에서 패턴을 만들 수 있나요?', value: '' },
  {
    label: '다른 소프트웨어 회사의 2D CAD 프로그램 사용 중이어도 CLO를 사용할 수 있나요?',
    value: '',
  },
  { label: '3D 바디 스캔을 CLO에서 불러올 수 있나요?', value: '' },
  {
    label: '가상 피팅을 제공하는 e-commerce를 만들고 싶습니다. CLO를 사용할 수 있나요?',
    value: '',
  },
  { label: 'CLO와 Marvelous Designer의 차이는 무엇인가요?', value: '' },
  { label: '하나의 3D 의상을 만드는데 얼마의 시간이 소요되나요?', value: '' },
  { label: '계정 활성화에 문제가 있습니다. 어떻게 하죠?', value: '' },
];

export function HomePageFAQ() {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleFaqs = isExpanded ? FAQ_ITEMS : FAQ_ITEMS.slice(0, INITIAL_COUNT);

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
