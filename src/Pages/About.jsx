import React from 'react';
import { m, LazyMotion, domAnimation } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle';
import { introduction } from '../Constants/constants';
// import ImageSlider from '../Components/elements/ImageSlider';

function About() {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Who am I?" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[100%] md:h-full flex items-center mt-10">
            <LazyMotion features={domAnimation} strict>
              <m.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                  damping: 20,
                }}
                style={{ fontFamily: 'Poppins, sans-serif' }}
                className="text-grayscale-50 p-6 flex flex-col gap-6"
              >
                <span className="text-primary-600">{introduction.text[0]}</span>
                <span>{introduction.text[1]}</span>
                <span>{introduction.text[2]}</span>
                <span>{introduction.text[3]}</span>
                <span>{introduction.text[4]}</span>
              </m.p>
            </LazyMotion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
