import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react'


function App() {
  
  const [nClicks, setNClicks]= useState(0);
  const manejarClic= ()=> setNClicks(nClicks+1);
  

  const reiniciarContador = ()=> setNClicks(0);
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
        nClicks={nClicks}
        />
        <Boton
          texto='Clic'
          esBotonClic={true}
          manejarClic={manejarClic}
        />

        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
