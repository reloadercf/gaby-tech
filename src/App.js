import logo from './logo.svg';
//import './App.css';
//import { GraficaTest } from './componets/grafica/GraficaTest';
import { MapaMex } from './componets/mapa/MapaMex';
import Navbar from './componets/common/Navbar';
import FirstView from './componets/firstView/FirstView';
import PurchaseView from './componets/purchase/PurchaseView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstView />
      <MapaMex />    
      <PurchaseView />    
    </div>
  );
}

export default App;
