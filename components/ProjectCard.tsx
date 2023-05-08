import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import { AnimatePresence, motion } from 'framer-motion'
import { stagger, fadeInUp } from '../animations'
import Image from "next/image";

const animation = {
  hidden: {
     opacity: 0,
  },
  visible: {
     opacity: 1,
     transition: {
        duration: 0.3,
     },
  },
}

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <motion.div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      
      <p className="my-2 text-center">{name}</p>
      <AnimatePresence>
      {showDetail && (
        <motion.div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
        variants={animation}
        animate='visible'
        initial='hidden'
        exit={{
           opacity: 0,
           transition: {
              duration: 0.3,
           },
        }}>
          <motion.div
             variants={stagger}
             initial='initial'
             animate='animate'>
             <motion.div
                className='border-4 border-gray-100 '
                variants={fadeInUp}>
            <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            </motion.div>
            <motion.div className="flex justify-center my-4 space-x-3"  variants={fadeInUp}>
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
              </motion.div>
                  </motion.div>
                  <motion.div variants={stagger}
                     initial='initial'
                     animate='animate'>
            <motion.h2 className="mb-3 text-xl font-medium md:text-2xl" variants={fadeInUp}>{name}</motion.h2>
            <motion.h3 className="mb-3 font-medium"  variants={fadeInUp}>{description}</motion.h3>

            <motion.div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider" variants={fadeInUp}>
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
             </motion.div>
             </motion.div>
          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
          </motion.div>
      )}
      </AnimatePresence>
     </motion.div> 
  );
};

export default ProjectCard;