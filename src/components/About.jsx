import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import { styles } from "../styles.js";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={`Icon representing ${title}`}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Me | Daria's Portfolio</title>
        <meta
          name="description"
          content="Learn more about Daria, a full-stack web developer experienced in React, Node.js, databases, and 3D web technologies."
        />
        <meta
          name="keywords"
          content="Daria, full-stack developer, React, Three.js, portfolio, web development, About"
        />
        <meta name="author" content="Daria Savchenko" />
        <meta property="og:title" content="About Me | Daria's Portfolio" />
        <meta
          property="og:description"
          content="Explore Daria's background, skills, and experience in modern web development."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>About Me</h1>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a full-stack web developer equipped with a comprehensive set of
        skills that includes markup, styles, layouts, JavaScript, TypeScript,
        React.js, Gatsby, Node.js, Express, and databases including MongoDB and
        MySQL. I also have skills in Linux and Networking administration.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My prior commercial experience as a Front-end developer and Support
        Engineer has honed my problem-solving and team collaboration skills. I
        am eager to apply my abilities to new technologies and to further
        develop my hard and soft skills.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am now seeking an exciting opportunity to contribute my expertise to
        innovative projects. Let's work together to build something amazing.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
