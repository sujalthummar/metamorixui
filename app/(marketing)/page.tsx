import SiteCTA from "@/components/lp/site-cta";
import SiteFaq from "@/components/lp/site-faq";
import SiteFeatures from "@/components/lp/site-features";
import SiteHero from "@/components/lp/site-hero";
import SitePricing from "@/components/lp/site-pricing";
import SiteTestimonial from "@/components/lp/site-testimonials";

export default function Home() {
  return (
    <div className="container max-w-7xl space-y-28">
      <SiteHero />
      <SiteFeatures />
      <SiteTestimonial />
      <SiteFaq />
      <SitePricing />
      <SiteCTA />
    </div>
  );
}
