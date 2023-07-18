import './index.scss'
import Brand from '../Home/Brand'
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import EachProject from './EachProject';
import ProjectData from '../../assets/data/projectData'
import projectData from '../../assets/data/projectData';
import Loader from 'react-loaders'

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ project }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
          <EachProject project={project}/>
      </div>
      <motion.h2 style={{ y }}>{project.name}</motion.h2>
    </section>
  );
}

export default function Project() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
    
      <Loader type="pacman" />
      <div className="my-app">
        {projectData.map((eachProject) => (
          <Image key={eachProject.id} project={eachProject} />
        ))}
        <motion.div className="progress" style={{ scaleX }} />
      </div>
    </>
  );
}




