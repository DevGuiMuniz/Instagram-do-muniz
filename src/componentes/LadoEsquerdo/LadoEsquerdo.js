import './LadoEsquerdo.css';
import Logotipo from './imagens/insta.png';
import PerfilMenu from './componentes/ImgPerfilMenu/imgPerfilMenu';
//importar icons
import {MdHomeFilled} from "react-icons/md";
import {HiSearch} from "react-icons/hi";
import {TiCompass} from "react-icons/ti";
import { AiFillMessage } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import {CgClapperBoard} from "react-icons/cg";
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
               <ItemMenu icone={<CgClapperBoard />} texto="Reels"  />
              <ItemMenu icone={<AiFillMessage/>} texto="Mensagens"/>
               <ItemMenu icone={<AiOutlineHeart/>} texto="Notificações" />
               <ItemMenu icone={<AiOutlinePlusCircle/>} texto="Criar"/>
               <PerfilMenu/>
             </div>
             <div className="config">
                <span className="menuIcone"><AiOutlineMenu/></span>
                <span className="menuTexto">Mais</span>
            </div>
          </div>

    )
}