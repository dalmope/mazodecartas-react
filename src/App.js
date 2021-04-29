import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cartas from './Components/Cartas';
import AgregarCarta from './Components/AgregarCarta';



function App() {
  return (
    <div>
      
      <div className="row">
        
        <div className="col-8"> <Cartas/></div>
        <div className="col-4"> <AgregarCarta/> </div>

      </div>
      




    </div>
  );
}

export default App;
