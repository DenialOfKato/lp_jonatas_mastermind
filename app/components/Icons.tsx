import Icones from 'next/image'
import iconData from '../../public/Agenda.svg'
import iconDinheiro from '../../public/DINDIN.svg'
import iconEmpresa from '../../public/Empresa.svg'

const divIcons = 'flex flex-col items-center max-w-40 text-center uppercase'
const americaSamtimeswar = 'mt-[10px]'

export default function Icons() {
    return (
        <>
        <div className={divIcons}>
            <Icones src={ iconData } alt='icone data'/>
            <h4 className={americaSamtimeswar}><strong>18 de Abril</strong> | 19h30</h4>
        </div>
        <div className={divIcons}>
            <Icones src={ iconDinheiro } alt='icone dinheiro'/>
            <h4 className={americaSamtimeswar}>De: R$ 97,90</h4>
            <h4><strong>Por: R$ 0*</strong></h4>
            <p className='text-xs mt-[10px]'>*1kg de alimento ou 1l de leite</p>
        </div>
        <div className={divIcons}>
            <Icones src={ iconEmpresa } alt='icone empresa'/>
            <h4 className={americaSamtimeswar}><strong>Centro Empresarial</strong> Pereira Barreto</h4>
        </div>
        </>
                
    )
}