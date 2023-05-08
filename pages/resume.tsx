import Bar from "../components/Bar";
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations'
import { languages, tools, techWorkedWith } from "../data";
import { IconType } from "react-icons";
import IconBox  from "../components/IconBox"

const Resume = () => {

  const variants = {
    hidden: {
       opacity: 0,
    },
    visible: {
       opacity: 1,
       transition: {
          delay: 0.1,
          duration: 0.1,
       },
    },
    exit: {
       opacity: 0,
       transition: {
          delay: 0.1,
          ease: 'easeInOut',
       },
    },
 }

  return (
    <motion.div className="px-6 py-2" 
    variants={variants}
    initial='initial'
    animate='animate'
    exit='exit'>
     
      <motion.div className="grid gap-6 md:grid-cols-2">
      <motion.div variants={fadeInUp} animate='animate' initial='initial'>
          <h5 className="my-3 text-2xl border-b-2 w-3/4 border-white font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Amity University Kolkata (2018-2022)</p>
            <p className="my-3">
              Completed B.tech in Computer Science Engineering
              from Amity University Kolkata in 2022.
            </p>
          </div>
          </motion.div>
          <motion.div variants={fadeInUp} animate='animate' initial='initial'>
          <h5 className="my-3 text-2xl border-b-2 w-3/4 border-white font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">⭐ Full Stack Dev @ AgileAlgo</h5>
            <p className="my-3 text-m">Working on AgileAlgo's AI Product.</p>
            <div>
              Tech Stack : Angular, TypeScript, NodeJS, MongoDB, Python, AWS
            </div>
          </div>
          {/* <div className="">
            <h5 className="my-2 text-l font-bold">Software Engineer Intern @ Jerno</h5>
            <p className="my-3 text-m">Worked on Jerno's enterprise products.</p>
          </div>
          <div className="">
            <h5 className="my-2 text-l font-bold">Developer Intern @ Agitechavids</h5>
            <p className="my-3 text-m ">Made websites for the company and it's clients.</p>
          </div> */}
          </motion.div>
         </motion.div>

      
      {/* <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl pb-3 font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl pb-3 font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div> */}

      <div className="grid gap-5 md:grid-cols-1">
        <div>
          <h5 className="my-3 text-2xl pb-3 font-bold">I have worked with</h5>
          <div className="my-2 grid grid-cols-4">
            {techWorkedWith.map((i) => (
              <div className="flex items-center flex-col mb-3">
              <IconBox service={i} />
              <span className="text-xs">{i.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </motion.div>
  );
};

export default Resume;