import './LadoDireito.css';
import Usuario from './imagens/Muniz.jpeg';


export default function LadoDireito(props){
    return(

        <div className='LadoDireito'>
            <div className='Perfil'>
            <img src={Usuario} alt="" texto ="Exemplo" />
            <div className="NomePerfil">
                <p>Muniz_S2_<br></br>Munizin</p> 
                  </div>
            
             </div>
            </div>
            
          
                    
    )
}