
import './App.css';
import Feed from './componentes/Feed/feed';
import Stories from './componentes/Stories/stories';


function App() {
  return (
    <div className="App">
      <div className="LadoEsquerdo">
        Lado Esquerdo
      </div>

      <div className="centro">
        <Stories/>
        <Feed/>
        <div className="Feed">Feed</div>
      </div>

      <div className= "LadoDireito">
        Lado Direito
      </div>
          
    </div>
  );
}

export default App;
