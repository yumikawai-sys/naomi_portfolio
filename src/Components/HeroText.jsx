/* eslint-disable */
import { m, LazyMotion, domAnimation } from "framer-motion";

const HeroText = () => {

  return (
    <div
      className="noselect w-fit h-fit text-grayscale-50 absolute z-10 flex justify-center items-center rounded-[50%]"
      id="repulse-div"
    >
      <div
        className="m-7"
      >
        <h3 className="text-white font-bold text-[20px]">JavaScript</h3>
        <h3 className="text-white font-bold text-[20px]">TypeScript</h3>
        <h3 className="text-white font-bold text-[20px]">Python</h3>
        <h3 className="text-white font-bold text-[20px]">HTML</h3>
        <h3 className="text-white font-bold text-[20px]">CSS</h3>
      </div>
      <div
        className="m-7"
      >
        <h3 className="text-white font-bold text-[20px]">React.js</h3>
        <h3 className="text-white font-bold text-[20px]">Vue.js</h3>
        <h3 className="text-white font-bold text-[20px]">Node.js</h3>
        <h3 className="text-white font-bold text-[20px]">Next.js</h3>
        <h3 className="text-white font-bold text-[20px]">Express</h3>
      </div>
      <div
        className="m-7"
      >
        <h3 className="text-white font-bold text-[20px]">PostgreSQL</h3>
        <h3 className="text-white font-bold text-[20px]">MySQL</h3>
        <h3 className="text-white font-bold text-[20px]">MongoDB</h3>
        <h3 className="text-white font-bold text-[20px]">GitHub</h3>
        <h3 className="text-white font-bold text-[20px]">CI/CD</h3>
      </div>
      <div
        className="m-7"
      >
        <h3 className="text-white font-bold text-[20px]">AWS</h3>
        <h3 className="text-white font-bold text-[20px]">Firebase</h3>
        <h3 className="text-white font-bold text-[20px]">Electron</h3>
        <h3 className="text-white font-bold text-[20px]">Socket.io</h3>
        <h3 className="text-white font-bold text-[20px]">WordPress</h3>
      </div>
      {/* <LazyMotion features={domAnimation} strict>
        <m.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center flex justify-center items-center flex-col opacity-100 text-7xl sm:text-9xl cursor-default"
          style={{ fontFamily: "SuperMario" }}
        >
          <m.span
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            Who's{" "}
          </m.span>
          <m.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {name.split("").map((char, index) => {
              if (char === " ") {
                return " ";
              }
              return (
                <span
                  key={index}
                  className="text-primary-400 bounce"
                  style={{ fontSize: "1.2em" }}
                >
                  {char}
                </span>
              );
            })}
          </m.div>
        </m.h1>
      </LazyMotion> */}
    </div>
  );
};

export default HeroText;
