export type Plan = {
  title: string;
  pricing?: { monthly: number; yearly: number };
  description?: string;
  buttonLabel: string;
  buttonDisabled?: boolean;
};

export const PLANS: Plan[] = [
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
