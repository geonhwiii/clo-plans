import { HomePageComparison } from './home-page.comparison';
import { HomePageFAQ } from './home-page.faq';
import { HomePagePlans } from './home-page.plans';

export function HomePage() {
  return (
    <div className="flex flex-1 flex-col pb-10">
      <HomePagePlans />
      <HomePageComparison />
      <HomePageFAQ />
    </div>
  );
}
