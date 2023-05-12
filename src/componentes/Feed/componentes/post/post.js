import './Post.css';

export default function Post(props) {
    return (

        <div className='FeedCompleto'>
        <div className='Post'>
            <div className="BarraSuperior">

                <div className="ImagemPerfilAutor">
                    <img alt="Foto perfil do autor" src={props.imagemPerfil}></img> 
                </div>

                <div className="NomePerfilAutor"> {props.nomePerfil}
                
                </div>

                <div className="MenuBarraSuperior">...</div>

            </div>

            
            <div className="ConteudoPost">
                <img alt="Imagem do post" src={props.imagemPost}></img>
            </div>
           
        </div>
</div>
     
    )
}