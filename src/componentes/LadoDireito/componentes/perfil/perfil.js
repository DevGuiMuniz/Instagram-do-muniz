import './perfil.css'

function perfil(props){
    return(
    <div className='Tudo'>
      <div className='Perfil'>
            <img src={props.ImgPerfil}alt=''></img>
      </div>
    <div className='Textinho'>
        <span className='NomeUsuario'>{props.NomeUsuario}</span>
        <span className='NomePerfil'>{props.NomePerfil}</span>
        
         </div>
         <div>
            <span className='Mudar'>Mudar</span>
         </div>
         </div>
   )

}
export default perfil