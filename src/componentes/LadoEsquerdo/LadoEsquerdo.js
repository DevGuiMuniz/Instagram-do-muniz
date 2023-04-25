import './LadoEsquerdo.css';
import Logotipo from './imagens/insta.png';
//importar icons
import {MdHomeFilled} from "react-icons/md"
import {HiSearch} from "react-icons/hi"
import {TiCompass} from "react-icons/ti"

import ItemMenu from './componentes/ItemMenu';
export default function LadoEsquerdo(props){
    return(
        <div className="LadoEsquerdo">
            <div className='logo'>
                <img src={Logotipo} alt="" />
               </div>
               <div className="menu-principal">
               <ItemMenu icone= {<MdHomeFilled />} texto="Página inicial" />
               <ItemMenu icone={<HiSearch/>} texto="Pesquisa" />
               <ItemMenu icone={<TiCompass />} texto="Explorar" />
               <ItemMenu icone={<img src="https://img.icons8.com/ios-filled/16/null/instagram-reel.png"/>} texto="Reels" />
               <span> 
                 <span>@</span>
                 <span>Discover</span>
               </span>
               <span>
                 <span>@</span>
                  <span> News</span>
               </span>
             </div>
          </div>



    )
}