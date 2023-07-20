import './stories.css'

import Story from './componentes/Story';


import imgPerfil01 from './imagens/sza.jpg';
import imgPerfil02 from './imagens/theweeknd.jpg';
import imgPerfil03 from './imagens/billie.jpg';
import imgPerfil04 from './imagens/riri.jpg';
import imgPerfil05 from './imagens/lacy.jpg';
import imgPerfil06 from './imagens/proa.jpg';
import imgPerfil07 from './imagens/viuva_negra.jpg';
import imgPerfil08 from './imagens/professor_maravilhoso.jpg';
function Stories () {
    return (
        <div className="Stories">

            <Story
            imgPerfil={imgPerfil08}
            nomeDaConta="Gabriel"/>
            <Story 
            imgPerfil={imgPerfil01} 
            nomeDaConta="sza"/>
            <Story imgPerfil = {imgPerfil02}
            nomeDaConta="theweeknd"/>
            <Story imgPerfil = {imgPerfil03}
            nomeDaConta="billie"/>
            <div className='Stories1'>
            <Story imgPerfil = {imgPerfil04}
            nomeDaConta="badgalriri"/>
            <Story imgPerfil = {imgPerfil05}
            nomeDaConta = "steve.lacy"/>
            
            <Story imgPerfil ={imgPerfil06}
                nomeDaConta ="InstitutoProa"/>
                <Story imgPerfil ={imgPerfil07}
                nomeDaConta ="Viúva"/>
            </div>
               
        </div>
    )
}

export default Stories;