'use client'
import Icons from "./Icons";
import {motion} from "framer-motion"

export default function Inscricao(){
    return (
        <>

        <div className="bg-blue-8 flex flex-col items-center py-20 text-white-2 gap-10">

            <motion.h1 className="text-5xl uppercase text-yellow-primary max-w-[960px] text-center" initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.3,duration: 0.7}}><span className="font-bold text-white-2">Inscrições limitadas</span>, garanta seu acesso!</motion.h1>
            <motion.a href="#hero" initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.8,duration: 0.7}}>
            <button className="py-5 px-10 sm:py-7 sm:px-32 bg-[#589B56] rounded-[10px] uppercase text-lg mx-8">Reserve seu ACESSO, <span className="font-bold">clique aqui!</span></button>
            </motion.a>
            
            <div className="w-full">
               <motion.div initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.8,duration: 0.7}} className="flex flex-col items-center gap-6 sm:flex-row justify-evenly uppercase"><Icons />
               </motion.div>
            </div>

        </div>

        </>
    )
}