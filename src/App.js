import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';


function App() {
  
  const manejarClic= ()=>{
    console.log('Clickeado');
  }

  const reiniciarContador = ()=>{
    console.log('Lo otro que no es clickear');
  }
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
