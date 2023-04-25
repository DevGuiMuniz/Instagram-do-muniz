
import './App.css';
import Feed from './componentes/Feed/feed';
import Stories from './componentes/Stories/stories';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo';
import LadoDireito from './componentes/LadoDireito/LadoDireito';

function App() {
  return (
    <div className="App">
      <LadoEsquerdo />
    

      <div className="centro">
        <Stories />
        <Feed/>
      </div>

     
        <LadoDireito />
      </div>
          
   
  );
}

export default App;
