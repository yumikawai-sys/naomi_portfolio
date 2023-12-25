/* eslint-disable */
import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";
// import HeroScroller from "../Components/elements/HeroScroller";

const Hero = () => {
  return (
    <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
          <div className="w-full">
            <SectionTitle title="SKILLS" subtitle="What I do" />
          </div>
        <LazyMotion features={domAnimation} strict>
          <m.div
            id="hero"
            className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
          >
            <HeroText />
            {/* <div className="mt-3 flex">
              <h3 className="text-white font-bold text-[20px]">JavaScript</h3>
              <h3 className="text-white font-bold text-[20px]">TypeScript</h3>
              <h3 className="text-white font-bold text-[20px]">Python</h3>
            </div> */}
            <HeroParticles />
          </m.div>
          {/* <HeroScroller /> */}
        </LazyMotion>
      </div>
    </div>
  );
};

export default Hero;
