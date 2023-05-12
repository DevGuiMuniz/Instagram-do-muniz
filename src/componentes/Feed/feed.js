import './feed.css';
import Post from './componentes/post/post';
 // Icons

 import { IoHeartOutline } from "react-icons/io5";
 import { IoChatbubbleOutline } from "react-icons/io5";
 import { IoPaperPlaneOutline } from "react-icons/io5";
 import { BiBookmark } from "react-icons/bi";



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
   
    <div className='icons'>

            <button className="button1"><IoHeartOutline /></button>
             <button className="button2"><IoChatbubbleOutline /></button>
             <button className="button3"><IoPaperPlaneOutline /></button>
            <button className="button4"><BiBookmark/></button>
    </div>
    <div className='Curtidas'>

     <p> Curtido por</p>
     <span> Steve.lacy</span>
      <p> e</p>
      <span>Outras pessoas</span>
    </div>
    <div className='Perffil'><p>sza</p>
    <div className='FF'><p>Album ctrl by sza</p></div> 
     </div>
     <div className='Comentario'>
      <p>Ver todos os 500.719 comentários</p>
    </div>
     <div className='ComentarioPT2'>
    <textarea placeholder='Adicionar um comentário'></textarea>
    </div>

    <Post nomePerfil ='São Paulo' imagemPost={imgExemplo03}
    imagemPerfil={imgPerfilExemplo05} />
    <div className='icons'>

<button className="button1"><IoHeartOutline /></button>
 <button className="button2"><IoChatbubbleOutline /></button>
 <button className="button3"><IoPaperPlaneOutline /></button>
<button className="button4"><BiBookmark/></button>
</div>
<div className='Curtidas'>

<p> Curtido por</p>
<span>Marvel</span>
<p> e</p>
<span>Outras pessoas</span>
</div>
<div className='Perffil'><p>SãoPaulo</p>
<div className='FF'><p>Um dia belo pela a grande cidade de São Paulo!</p></div> 
</div>
<div className='Comentario'>
<p>Ver todos os 370 comentários</p>
</div>
<div className='ComentarioPT2'>
<textarea placeholder='Adicionar um comentário'></textarea>
</div>

    <Post nomePerfil='Steve.lacy' imagemPost={imgExemplo05}
    imagemPerfil={imgPerfilExemplo02}/>

<div className='icons'>

<button className="button1"><IoHeartOutline /></button>
 <button className="button2"><IoChatbubbleOutline /></button>
 <button className="button3"><IoPaperPlaneOutline /></button>
<button className="button4"><BiBookmark/></button>
</div>
<div className='Curtidas'>

<p> Curtido por</p>
<span> sza</span>
<p> e</p>
<span>Outras pessoas</span>
</div>
<div className='Perffil'><p>Steve.lacy</p>
<div className='FF'><p>Bad Habit</p></div> 
</div>
<div className='Comentario'>
<p>Ver todos os 2036 comentários</p>
</div>
<div className='ComentarioPT2'>
<textarea placeholder='Adicionar um comentário'></textarea>
</div>

  <Post nomePerfil='Marvel' imagemPost={imgExemplo04}
  imagemPerfil={imgPerfilExemplo04}/>

<div className='icons'>

<button className="button1"><IoHeartOutline /></button>
 <button className="button2"><IoChatbubbleOutline /></button>
 <button className="button3"><IoPaperPlaneOutline /></button>
<button className="button4"><BiBookmark/></button>
</div>
<div className='Curtidas'>

<p> Curtido por</p>
<span> Gabriel</span>
<p> e</p>
<span>Outras pessoas</span>
</div>
<div className='Perffil'><p>Marvel</p>
<div className='FF'><p>Doctor stranger is here!</p></div> 
</div>
<div className='Comentario'>
<p>Ver todos os 76.350 comentários</p>
</div>
<div className='ComentarioPT2'>
<textarea placeholder='Adicionar um comentário'></textarea>
</div>

  <Post nomePerfil='Gorillaz' imagemPost={imgExemplo01}
  imagemPerfil={imgPerfilExemplo03}/>
                           <div className='icons'>

<button className="button1"><IoHeartOutline /></button>
 <button className="button2"><IoChatbubbleOutline /></button>
 <button className="button3"><IoPaperPlaneOutline /></button>
<button className="button4"><BiBookmark/></button>
</div>
<div className='Curtidas'>

<p> Curtido por</p>
<span>badgalriri</span>
<p> e</p>
<span>Outras pessoas</span>
</div>
<div className='Perffil'><p>Gorillaz</p>
<div className='FF'><p>Gorillaz tour on sale!</p></div> 
</div>
<div className='Comentario'>
<p>Ver todos os 765.350 comentários</p>
</div>
<div className='ComentarioPT2'>
<textarea placeholder='Adicionar um comentário'></textarea>
</div>

    </div>
  
    

)
}