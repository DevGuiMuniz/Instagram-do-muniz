import './feed.css';
import Post from './componentes/post/post';

import imgPerfilExemplo01 from './Imagens/sza.jpg';
import imgPerfilExemplo02 from './Imagens/lacy2.jpg';
import imgPerfilExemplo03 from './Imagens/gorrilaz.jpg';
import imgPerfilExemplo04 from './Imagens/marvel.jpg';
import imgPerfilExemplo05 from './Imagens/aleatorio.jpg';

import imgExemplo01 from './Imagens/feelgood.jpg';
import imgExemplo02 from './Imagens/ctrl.jpg';
import imgExemplo03 from './Imagens/SaoPaulo.jpg';
import imgExemplo04 from './Imagens/stranger.jpg';
import imgExemplo05 from './Imagens/lacy.jpg';
export default function feed() {
return(
   <div className="Feed">
    <Post
    nomePerfil ="sza"
    imagemPost ={imgExemplo02} 
    imagemPerfil ={imgPerfilExemplo01}
    />

    <Post nomePerfil ='São Paulo' imagemPost={imgExemplo03}
    imagemPerfil={imgPerfilExemplo05} />

    <Post nomePerfil='Steve.lacy' imagemPost={imgExemplo05}
    imagemPerfil={imgPerfilExemplo02}/>

  <Post nomePerfil='Marvel' imagemPost={imgExemplo04}
  imagemPerfil={imgPerfilExemplo04}/>

  <Post nomePerfil='Gorillaz' imagemPost={imgExemplo01}
  imagemPerfil={imgPerfilExemplo03}/>
    </div>
    

)
}