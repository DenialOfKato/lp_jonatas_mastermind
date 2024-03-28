import Logotipo from 'next/image'
import logotipoPic from '../../public/Logotipo_SVG.svg'
import wppSvg from '../../public/whatsapp-svg.svg'
import imageCell from '../../public/vista-frontal-das-maos-usando-smartphone-removebg.webp'
import Icons from './Icons'
import Footer from './Footer'


export default function HeroObg() {
    return(
        <>
            <div  className="flex flex-col items-center bg-blue-8 bg-patternimg bg-cover">
                <div className="m-20 ">
                    <Logotipo src={logotipoPic} alt='logotipo' className="max-h-28"/>
                </div>
                <div className='flex flex-col items-center'>
                <div className='max-w-[1030px]'>
                <div className="m-12 gap-5 grid grid-cols-1 lg:grid-cols-2 items-center">
                    
                <Logotipo src={imageCell} className='absolute bottom-0 right-0 hidden lg:max-w-[60%] xl:max-w-[45%] lg:block' />
                    <div className="text-white flex flex-col items-center text-center lg:items-start lg:text-left gap-8">     
                        <h1 className="sans uppercase font-white text-5xl max-w-[420px]">Falta <strong>apenas um passo</strong>!</h1>
                        <p className='text-[20px]'>Clique no botão abaixo e entre no <strong>grupo exclusivo da palestra</strong> MasterMind Centro Empresarial Pereira Barreto!</p>
                        <a href="https://wa.me/5511989300627" target='_blank'>
                            <button className='flex items-center py-6 px-12 gap-2 bg-[#589B56] rounded-[10px] uppercase'><Logotipo src={wppSvg} alt='whatsapp icone'/>
                            <h4 className='text-[16px] sm:text-[26px]'><strong>Entrar</strong> no Grupo</h4>
                            </button>
                        </a>
                        <div className="my-20 text-white flex flex-col items-center gap-8 lg:flex-row justify-evenly uppercase w-[700px]"><Icons /></div>
                    </div>
                </div>
                
                </div>
                </div>
            </div>
            <Footer />
        </>
    )
}