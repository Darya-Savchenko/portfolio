import React from "react";
import { Helmet } from "react-helmet";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <Helmet>
        <title>Technologies | Daria's Portfolio</title>
        <meta
          name="description"
          content="A showcase of technologies and tools I have experience with, including frontend, backend, and design-related technologies."
        />
      </Helmet>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
