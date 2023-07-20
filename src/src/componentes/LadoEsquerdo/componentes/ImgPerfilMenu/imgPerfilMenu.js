import './imgPerfilMenu.css'
import Imagem from './../../../LadoDireito/imagens/Muniz.jpeg';

function ImgPerfilMenu(){
    return(
        <div className='=ImagemPerfil'>
            <div className='Todos'>
            <img src={Imagem} alt='Imagem de perfil'></img>
            </div>
            <div className='estilo'>Perfil</div>
            
        </div>
    )
}
export default ImgPerfilMenu