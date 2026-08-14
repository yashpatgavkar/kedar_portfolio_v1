import DesignKeyboard from "../design-keyboard";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const SkillsSection = () => (
  <SectionWrapper
    id="skills"
    className="flex min-h-screen w-full flex-col justify-center overflow-hidden py-20 sm:py-24"
  >
    <SectionHeader
      id="skills"
      title="Creative Toolkit"
      desc="Graphic design, motion and 3D tools"
      className="static mb-10 sm:mb-14"
    />
    <DesignKeyboard />
  </SectionWrapper>
);

export default SkillsSection;
