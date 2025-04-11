import Tilt from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles.js";
import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
      <Tilt className="xs:w-[250px] v-full">
        <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div options={{max: 45, scale: 1, speed: 450}}
               className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center
                flex-col">
            <img src={icon}
                 alt={title}
                 className="w-16 h-16 object-contain"/>
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
  )
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          As a full-stack web developer, I am equipped with a comprehensive set of skills that includes markup,
          styles, layouts, JavaScript, TypeScript, React.js, Gatsby, Node.js, Express, and databases including
          Mongo.db and MySQL. Also, I have skills in Linux and Networking administration. With a collaborative mindset and a drive to continuously learn and grow, I am committed
          to pushing boundaries and developing impactful solutions.<br/>
          My prior commercial experience as a Front-end developer and Support Engineer
          has honed my problem-solving and team collaboration skills. However, I am eager to apply my
          abilities to new technologies and to further develop my hard and soft skills.<br/>
          I am now seeking an exciting opportunity to contribute my expertise to innovative projects and to expand
          my skill set even further. Let's work together to build something amazing.<br/>
      </motion.p>

      <div className=" mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');
