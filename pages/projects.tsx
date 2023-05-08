import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import { motion } from 'framer-motion'
import { pageAnimation, fadeInUp, stagger } from '../animations'

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
         className='px-5 py-2 overflow-y-scroll '
         style={{ height: '65vh' }}
         variants={pageAnimation}
         animate='visible'
         initial='hidden'
         exit='exit'>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div className="relative grid grid-cols-12 gap-4 my-3"
       variants={stagger}
       initial='initial'
       animate='animate'>
        {projects.map((project) => (
          <motion.div
          variants={fadeInUp}
          key={project.id} className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} key={project.name} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;