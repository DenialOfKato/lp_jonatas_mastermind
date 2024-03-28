import Wppsvg from 'next/image'
import wppSvg from '../../public/whatsapp-svg.svg'
import instaSvg from '../../public/instagram.svg'
import Logotipo from 'next/image'
import logotipoPic from '../../public/Logotipo_SVG.svg'

export default function Footer() {
    return (
        <>
        <div className="bg-blue-85 flex flex-col items-center py-20">
            <div className="w-full max-w-[1030px] text-white-2">
                <div className="grid grid-col-1 lg:grid-cols-3 gap-14 lg:gap-3 mx-8">
                    <div className='flex flex-col items-center text-center gap-3'>
                        <h3 className='text-[26px]'>Não conseguiu <span className='font-bold'>fazer sua inscrição</span>?</h3>
                        <a href="https://wa.me/5511989300627" target='_blank'><button className='flex items-center py-6 px-12 gap-2 bg-[#589B56] rounded-[10px]'><Wppsvg src={wppSvg} alt='whatsapp icone'/><h4 className='text-[26px] font-bold'>Fale conosco!</h4></button></a>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h3 className='text-[26px]'>Siga-nos</h3>
                        <a href="https://www.instagram.com/jonatasnascy/" target='_blank'>                            
                        <button aria-label="Instagram" className='h-[30px] w-[30px] rounded-full'><Wppsvg src={instaSvg} alt='logotipo instagram'/></button>
                        </a>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Logotipo src={logotipoPic} alt='logotipo' className="max-w-[300px]"/>
                    </div>
                </div>
                <div className='pt-20 flex flex-col items-center text-center mx-8'>
                    <p>POLÍTICA DE PRIVACIDADE | TERMOS | COPYRIGHT 2024 – Todos os Direitos Reservados</p>
                </div>
            </div>
        </div>
        </>
    )
}