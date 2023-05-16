
import './App.css';

import Clock from 'react-live-clock';
import ListaHoras from './Components/ListaHoras';
import Cabecalho from './Components/Cabecalho';
import Rodape from './Components/Rodape';

function App() {
  return (
    <div className="App" >
         <Cabecalho/>
         <ListaHoras/>
         <Rodape/>
    </div>
  );
}

export default App;
