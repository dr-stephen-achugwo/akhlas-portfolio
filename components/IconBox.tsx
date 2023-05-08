import { FunctionComponent } from 'react'
import { WorkedWith } from '../type'


const IconBox: FunctionComponent<{ service: WorkedWith }> = ({
   service: { Icon, name },
}) => {
   function createMarkup() {
      return {
         __html: name,
      }
   }

   return (
         <>
         <Icon className='w-12 h-12 text-mauve-b' />
         </>
   )
}

export default IconBox