import './sugestoes.css'

function sugestoes(props){
    return(
        <div className='PerfilS'>
            <div className='SugePerfil'>
                <div className='ImgPerfil'>
                    <img src={props.ImgPerfil} alt='Imagem de perfil'></img>

                </div>
                <div className='SugesTexto'>
                    <span className='SugestaoNome'>{props.nomePerfil}</span>
                    <span className='SugestaoSeguidos'>{props.SeguidoPor}</span>
                </div>
            </div>
            <div>
                <span className='Seguir'>Seguir</span>
            </div>
        </div>
    )
}
export default sugestoes