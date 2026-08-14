import SectionWrapper from "../ui/section-wrapper";

/**
 * Blank hero canvas.
 * The site's existing universe background, cursor, navigation and scroll
 * behavior remain outside this component. The Canva layout will be rebuilt
 * here as real HTML/CSS components in the next step.
 */
const HeroSection = () => {
  return <SectionWrapper id="hero" className="relative h-screen w-full" />;
};

export default HeroSection;
