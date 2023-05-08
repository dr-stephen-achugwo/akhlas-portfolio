import { services } from "../data";
import ServiceCard from "../components/ServiceCard"; 
import { pageAnimation, stagger, fadeInUp } from '../animations'
import { motion } from 'framer-motion'
 
 const index = () => {
   console.log(services)
  return (
    <motion.div className="flex flex-col flex-grow px-6 pt-1 variants={pageAnimation}
    initial='hidden'
    animate='visible'
    exit='exit'>">
      <h6 className="my-3 text-base font-medium">
      I recently graduated with a B.Tech in Computer Science from Amity University Kolkata. I am passionate about building projects with the latest technology, and I am currently exploring cutting-edge AI tech such as Stable Diffusion and CHATGPT."
      </h6>
      <div
        className="flex-grow p-4 mt-5 dark:bg-dark-100 bg-gray-400  "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 pb-3 text-xl font-bold tracking-wide">
          What I am doing
        </h4>

        <motion.div className="grid gap-6 my-3 md:grid-cols-2 "
              variants={stagger}
               animate='animate'
               initial='initial'>
          {}
          {services.map((service) => (
            <motion.div
              className="col-span-2 p-2 dark:bg-dark-200 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
       </motion.div>
      </div>
      </motion.div>
  )
}

export default index

