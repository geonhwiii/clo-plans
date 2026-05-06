import { CheckCircleIcon } from '@/shared/icon/check-circle';
import { ExternalLink } from '@/shared/ui/external-link';
import { Spacing } from '@/shared/ui/spacing';

type ComparisonItem = {
  label: string;
  href?: string;
  eligibility?: string[];
};

type ComparisonColumn = {
  title: string;
  items: ComparisonItem[];
};

const columns: ComparisonColumn[] = [
  {
    title: '학생',
    items: [
      {
        label: '자격',
        href: '/ko/student-eligibility',
        eligibility: ['학생'],
      },
      {
        label: '온라인 튜토리얼',
        href: 'https://www.youtube.com/playlist?list=PLqL8Ymi3Z68Dqra76a_j0Y_WCcD5WSq4J',
      },
      {
        label: 'CLO 매뉴얼',
        href: 'https://support.clo3d.com/hc/ko/categories/115000064648-Manual',
      },
      {
        label: '커뮤니티 포럼',
        href: 'https://connect.clo-set.com/community',
      },
      {
        label: '고객 지원',
        href: '/ko/support/contactus',
      },
      {
        label: 'CLO-SET CONNECT',
        href: '#',
      },
    ],
  },
  {
    title: '개인용 플랜',
    items: [
      {
        label: '자격',
        eligibility: ['취미', '프리랜서', '1인 자영업자', '1인 기업'],
      },
      {
        label: '온라인 튜토리얼',
        href: 'https://www.youtube.com/playlist?list=PLqL8Ymi3Z68Dqra76a_j0Y_WCcD5WSq4J',
      },
      {
        label: 'CLO 매뉴얼',
        href: 'https://support.clo3d.com/hc/ko/categories/115000064648-Manual',
      },
      {
        label: '커뮤니티 포럼',
        href: 'https://connect.clo-set.com/community',
      },
      {
        label: '고객 지원',
        href: '/ko/support/contactus',
      },
      {
        label: 'CLO-SET CONNECT',
        href: '#',
      },
    ],
  },
  {
    title: '기업용 플랜',
    items: [
      { label: '라이브 데모' },
      { label: '맞춤형 실행 패키지' },
      { label: '온보딩 및 맞춤형 교육' },
      { label: '전담 3D 전문가 배정' },
      { label: '기업을 위한 직접적인 지원' },
      { label: '디지털 전환 컨설팅' },
      { label: '패브릭 디지털화 서비스의 가용성' },
      { label: '업계 리더와 함께하는 특별 이벤트에 참여하세요.' },
    ],
  },
  {
    title: '교육기관용 플랜',
    items: [
      {
        label: '온라인 튜토리얼',
        href: 'https://www.youtube.com/playlist?list=PLqL8Ymi3Z68Dqra76a_j0Y_WCcD5WSq4J',
      },
      {
        label: 'CLO 매뉴얼',
        href: 'https://support.clo3d.com/hc/ko/categories/115000064648-Manual',
      },
      {
        label: '커뮤니티 포럼',
        href: 'https://connect.clo-set.com/community',
      },
      {
        label: '고객 지원',
        href: '/ko/support/contactus',
      },
      {
        label: '교육기관 트레이닝',
        href: '/ko/enterprise/academic/#faculty-section',
      },
      {
        label: 'CLO-SET CONNECT',
        href: '#',
      },
    ],
  },
];

export function HomePageComparison() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-(--global-layout-width) px-5">
        <div className="grid grid-cols-2 divide-x-2 divide-gray-100">
          {columns.map((column) => (
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
