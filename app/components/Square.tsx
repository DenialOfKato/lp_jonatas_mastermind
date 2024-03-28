import SVG from 'next/image'
import starsSvg from '../../public/stars.svg'
import ImagemUm from 'next/image'
import pessoa1 from '../../public/pessoa-01_sofia.webp'
import pessoa2 from '../../public/pessoa-02_homem.webp'
import pessoa3 from '../../public/pessoa-03_luiza.webp'
import {motion} from "framer-motion"

export default function Square() {

    const styleGeral = 'px-[45px] py-[27px] bg-slate-800 rounded-[27px] shadow flex-col items-center gap-[22px] inline-flex'

    const roundedDiv = "w-32 h-32 bg-zinc-100 rounded-full"



    return (
       <> 
    <div className="bg-blue-8 flex flex-col items-center py-20">
    <motion.h2 className='text-white-3 text-5xl uppercase max-w-[624px] text-center' initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.1,duration: 0.7}}>O Que Dizem Nossos Participantes!</motion.h2>
    
    <div className='flex flex-col lg:flex-row max-w-[1030px] gap-6 mt-12 mx-8'>
    {/* item 1 */}
    <motion.div className={styleGeral} initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.3,duration: 0.7}}>
        
        {/* Imagem */}
        <ImagemUm className={roundedDiv} src={pessoa1} alt='pessoa avaliação palestra mastermind'/>

        {/* Estrelinhas */}
        <div className="flex flex-row gap-2">
            <p className="text-neutral-200 mb-[-3px]">Avaliação</p>
            <div className='flex flex-row gap-1'>            
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            </div>
        </div>
        
        {/* Texto */}
        <div className="flex-col items-center gap-2.5 flex">
        
            <div className="text-center text-neutral-200 text-base ">"Inspirador! A palestra ofereceu insights poderosos para melhorar minha vida. Saí de lá motivada e com estratégias claras para o sucesso."</div>
            
            <div className="text-center text-neutral-200 font-bold">– Sofia Lima</div>
        
        </div>
    
    </motion.div>
    
    {/* item 2 */}
    <motion.div className={styleGeral} initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.5,duration: 0.7}}>
        
        {/* Imagem */}
        <ImagemUm className={roundedDiv} src={pessoa2} alt='pessoa avaliação palestra mastermind'/>

        {/* Estrelinhas */}
        <div className="flex flex-row gap-2">
            <p className="text-neutral-200 mb-[-3px]">Avaliação</p>
            <div className='flex flex-row gap-1'>            
            <SVG src={starsSvg}  alt='icone estrela'/>
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            </div>
        </div>
        
        {/* Texto */}
        <div className="flex-col items-center gap-2.5 flex">
        
            <div className="text-center text-neutral-200 text-base ">"Palestra envolvente e esclarecedora. Recebi ferramentas práticas para impulsionar meu crescimento pessoal. Recomendo!"</div>
            
            <div className="text-center text-neutral-200 font-bold">– Rafael Santos</div>
        
        </div>
    
    </motion.div>
    {/* item 3 */}
    <motion.div className={styleGeral} initial={{opacity: 0, y:10}} whileInView={{opacity:1, y:0}} transition={{delay: 0.7,duration: 0.7}}>
        
        {/* Imagem */}
        <ImagemUm className={roundedDiv} src={pessoa3} alt='pessoa avaliação palestra mastermind'/>

        {/* Estrelinhas */}
        <div className="flex flex-row gap-2">
            <p className="text-neutral-200 mb-[-3px]">Avaliação</p>
            <div className='flex flex-row gap-1'>            
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            <SVG src={starsSvg} alt='icone estrela' />
            </div>
        </div>
        
        {/* Texto */}
        <div className="flex-col items-center gap-2.5 flex">
        
            <div className="text-center text-neutral-200 text-base ">"Incrível! A palestra superou minhas expectativas. Sai cheia de energia e determinação para alcançar meus objetivos. Imperdível!"</div>
            
            <div className="text-center text-neutral-200 font-bold">– Luiz Oliveira</div>
        
        </div>
    
    </motion.div>
    </div>
    </div>
        

    </>
    )
}