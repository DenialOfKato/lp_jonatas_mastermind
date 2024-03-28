'use-client'
import { motion } from "framer-motion";

export default function Visualize(){
    return (
    <>
        <div className="flex flex-col items-center bg-yellow-primary py-20 -z-20">
        <div className="px-10 flex flex-col sm:grid sm:grid-cols-2 z-10 gap-12 max-w-[1030px]">
            <motion.div className="w-full h-[410px] rounded-[17px] bg-patternmen bg-cover" initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.3,duration: 0.7}}>
            </motion.div>
            <motion.div className="place-self-center" initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.5,duration: 0.5}}>
            <h4 className="text-blue-primary text-2xl font-sans uppercase font-normal l">Tire um momento</h4>
            <h2 className="text-blue-primary text-5xl font-sans uppercase font-bold">visualize-se em UMA VIDA PLENA</h2>
                <ul className="text-blue-primary text-lg font-sans list-disc pl-6 mt-8">
                    <li>
                    Imagine uma vida plena, feliz e abundante.
                    </li>
                    <li>
                    Equilíbrio emocional, saúde ideal e prosperidade financeira.
                    </li>
                </ul>
            </motion.div>
        </div>
        <h1 className="absolute right-64 text-white-primary font-sans uppercase font-bold text-[200px] leading-none text-opacity-10 z-0">visua<br/>lize-se</h1>
        </div>
    </>
    )
}