import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-[#1e293b]  rounded 3xl xs:w-[320px] w-full"
    >
      <p className="text-white m-2 ml-3 -mb-1 font-black text-[40px]">"</p>
      <div>
        <img
          src={testimonial}
          alt="feedback"
          className="w-[400px] object-contain"
        />
        <div className="mt-3 p-3 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-7 bg-black-100 rounded=[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>
            Testimonials.{" "}
            <span className="  font-thin lg:text-[16px] sm:text-[19px] xs:text-[10px] text-[14px]">
              {" "}
              <a
                href="https://www.freelancer.com/u/poudelsanskar8"
                target="_blank"
              >
                ({" "}
                <span className="underline underline-offset-2 ">
                  Profile Link
                </span>{" "}
                )
              </a>
            </span>
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 `}>
        {testimonials.map((testimonial, index) => {
          return (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
