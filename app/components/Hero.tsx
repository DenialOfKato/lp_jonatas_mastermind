'use client'
import Logotipo from 'next/image'
import logotipoPic from '../../public/Logotipo_SVG.svg'
import Formulario from './Formulario'
import { motion } from 'framer-motion'

export default function Hero() {
    return(
        <>
            <div  className="flex flex-col items-center bg-blue-8 bg-patternimg bg-cover">
                <motion.div className="m-20" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <Logotipo src={logotipoPic} alt='logotipo' className="max-h-28"/>
                </motion.div>
                <div className="m-12 gap-5 flex flex-col items-center">
                    <div className="text-white text-center" id="hero">
                        <motion.h2 className="sans uppercase font-white px-12 py-2 bg-yellow-primary text-xl"
                        initial={{opacity: 0, y:10}}
                        whileInView={{opacity:1, y:0}} transition={{delay: 0.3,duration: 0.5}}>Desvende os <strong>Segredos do Triunfo</strong> através da</motion.h2>
                    </div>
                    <div className="text-white text-center">     
                        <motion.h1 className="sans uppercase font-white text-5xl max-w-3xl" initial={{opacity: 0, y:10}}
                        whileInView={{opacity:1, y:0}} transition={{delay: 0.5,duration: 0.5}}>Conexão entre <strong>Inteligência Emocional</strong> e <strong>Artificial</strong>!</motion.h1>
                    </div>
                </div>
            <Formulario />      
            </div>
        </>
    )
}