'use client'
import Cerebro from 'next/image'
import cerebroSvg from '../../public/cerebro.svg'
import { motion } from 'framer-motion'


export default function Aprender() {
  return (
    <div className="relative font-sans py-24 px-4 md:px-10 lg:px-20 flex flex-col items-center">
      <Cerebro src={cerebroSvg} alt='cerebro digital' className='absolute right-0 top-[-300px] lg:top-[-200px] -z-10' />
      <Cerebro src={cerebroSvg} alt='cerebro digital' className='absolute left-0 bottom-[-200px] lg:bottom-[-200px] rotate-180 -z-10' />
    <div className="max-w-[1030px]">
      <motion.div initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.1,duration: 0.7}} className=" md:text-center text-4xl lg:text-5xl uppercase text-[#14213d] font-bold mb-6">
        O que você Aprenderá:
      </motion.div>
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        <motion.div initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.3,duration: 0.7}} className="flex flex-col space-y-4 w-full lg:w-1/3">
          <h3 className="text-lg font-bold uppercase text-[#14213d]">Por que o sucesso é raro</h3>
          <p className="text-sm font-light tracking-wide leading-relaxed text-[#14213d]">
            • Estatísticas mostram que a{' '}
            <span className="font-bold">grande maioria das pessoas enfrenta dificuldades</span>, enquanto uma
            pequena parcela vive uma vida verdadeiramente abundante.
            <br />  <br />
            • Compreender os motivos por trás dessas discrepâncias é fundamental para{' '}
            <span className="font-bold">buscar o sucesso</span>.
          </p>
        </motion.div>
        <motion.div initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.5,duration: 0.7}} className="flex flex-col space-y-4 w-full lg:w-1/3">
          <h3 className="text-lg font-bold uppercase text-[#14213d]">O que te impede de progredir</h3>
          <p className="text-sm font-light tracking-wide leading-relaxed text-[#14213d]">
            • <span className="font-bold">Barreiras mentais e emocionais </span> muitas vezes atuam como obstáculos, limitando o progresso e a
            realização pessoal.
            <br />  <br />
            • <span className="font-bold">Identificar e superar esses bloqueios</span> é essencial para alcançar o potencial máximo.
          </p>
        </motion.div>
        <motion.div initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.7,duration: 0.7}} className="flex flex-col space-y-4 w-full lg:w-1/3">
          <h3 className="text-lg font-bold uppercase text-[#14213d]">O segredo para o sucesso</h3>
          <p className="text-sm font-light tracking-wide leading-relaxed text-[#14213d]">
            • <span className="font-bold">Um método comprovado</span>, que já beneficiou milhares de pessoas, será revelado durante a sessão especial.
            <br />  <br />
            • Descobrir como <span className="font-bold">romper essas barreiras emocionais</span> é o primeiro passo em direção ao sucesso duradouro.
          </p>
        </motion.div>
      </div>
    </div>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
    </div>
    </div>
    )
}