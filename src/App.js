import "../src/coustomCss.css"
import img0 from "../src/images/cripto1.jpg"
import img1 from "../src/images/cripto2.jpg"
import { useRef } from "react"

function App() {

  const cambio = 1;
  const ref_caja = useRef();
  
  function incrementar(e) {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
  }

  const convertir = () => {    
    if (Number(ref_caja.current.innerHTML) < 9) {
      ref_caja.current.innerHTML = Number(ref_caja.current.innerHTML) + cambio; // ref_caja.current.innerHTML para acceder al HTML
      if (Number(ref_caja.current.innerHTML) > 8) {
        ref_caja.target.style.backgroundColor="red";
      }
    } else {
      ref_caja.current.innerHTML = 0; // ref_caja.current.innerHTML para acceder al HTML
    }
  }

  const cambiar = (j) => {
    if (j.target.src.includes("4AAQSkZJRgABAQEAYABgAAD")) {
      j.target.src = img1;

    } else {
      j.target.src = img0;

    } 
  }

  const lectura = (e) => {
    ref_caja.current.innerHTML = e.target.value;
  }

  return (
    <>
      <div ref={ref_caja} className="caja" onClick={incrementar}>1</div>
        <button onClick={convertir}>Aceptar</button>
          <div>
            <img onClick={cambiar} src={ img0 }></img>
          </div>
        <input onChange={lectura} className="campo"></input>      
    </>

  );
}


export default App;
