import Icons from './Icons'
import Formtrue from './Formtrue'
import {motion} from "framer-motion"



export default function Formulario() {
  

    return(
    <>
        <motion.div className='flex flex-col my-20 px-2 md:flex-row gap-20'
        initial={{opacity: 0, y:10}}
        whileInView={{opacity:1, y:0}} transition={{delay: 0.7,duration: 0.5}}>
            <motion.div className='text-white flex flex-row md:flex-col gap-8'
            initial={{opacity: 0, y:10}}
            whileInView={{opacity:1, y:0}} transition={{delay: 1,duration: 0.5}}>
                <Icons />
            </motion.div>
            <motion.div className='bg-white flex flex-col gap-8 rounded-[10px] mx-4 px-12 pb-8 items-center'            
            initial={{opacity: 0, y:10}}
            whileInView={{opacity:1, y:0}} transition={{delay: 1.2,duration: 0.5}}>
                <Formtrue />
            </motion.div>
        </motion.div>
    </>
    );
}