import './LadoDireito.css';
import Perfil from './componentes/perfil/perfil'
import Sugestoes from './componentes/Sugestoes/sugestoes'
import SobreMais from './componentes/SobreMais/SobreMais'
import imgPerfil from './imagens/Muniz.jpeg'
import ProfGabs from './imagens/professor_maravilhoso.jpg'
import sza from './imagens/sza.jpg';
import coraline from './imagens/Coraline.jpg';
import lacy from './imagens/lacy.jpg';
function LadoDireito(){
    return(

        <div className='LadoDireito'>
            <div className ='parte1'>
              < Perfil NomeUsuario="Guilherme" NomePerfil= "Munizin" ImgPerfil = {imgPerfil} />
                 </div>
            <div className="sugestoes">
              <div className='TT'>
                <span className='PT1'>Sugestões para você</span>
                <span className='PT2'>Ver todas</span>
              </div>
              <Sugestoes ImgPerfil={ProfGabs} nomePerfil ="gab.augustoz" SeguidoPor="Seguido por Instituto Proa"/>
              <Sugestoes ImgPerfil={sza} nomePerfil = "sza" SeguidoPor="Seguido por Steve.lacy"/> 
              <Sugestoes ImgPerfil= {coraline} nomePerfil = "Coraline" SeguidoPor=" Seguido por Wybie, Outra mãe"/>
               <Sugestoes ImgPerfil = {lacy} nomePerfil = "Steve.lacy" SeguidoPor = "Seguido por sza, badgalrlriri"/>
               </div>
              <div className='link'>
                <SobreMais />
            </div>
            </div>
      
          
                    
    )
}

export default LadoDireito