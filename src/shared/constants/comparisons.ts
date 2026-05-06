export type ComparisonItem = {
  label: string;
  href?: string;
  eligibility?: string[];
};

export type ComparisonColumn = {
  title: string;
  items: ComparisonItem[];
};

export const COMPARISON_COLUMNS: ComparisonColumn[] = [
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
