import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <h1 className={`${styles.sectionHeadText} mb-6 mt-0`}>My Skills</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => {
          return (
            <>
              <div className="w-28 h-28" key={technology.name}>
                <h3 className="text-center">{technology.name}</h3>
                <BallCanvas icon={technology.icon} />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
