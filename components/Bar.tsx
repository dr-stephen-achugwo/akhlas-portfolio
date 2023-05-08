import { FunctionComponent } from "react";
import { motion } from 'framer-motion'

import { Skill } from "../type";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-2 text-white dark:bg-dark-300 bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-mauve-a to-mauve-b"
        style={{
          width: bar_width,
        }}
        variants={{
          initial: {
             width: 0,
          },
          animate: {
             width: bar_width,
             transition: {
                duration: 0.4,
                type: 'spring',
                damping: 10,
                stiffness: 100,
             },
          },
       }}
       animate='animate'
       initial='initial'>
        <Icon className="mr-3" /> {name}
        </motion.div>
      </div>
  );
};
export default Bar;