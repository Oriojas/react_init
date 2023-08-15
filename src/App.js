import './App.css';
import img0 from "../src/images/cripto1.jpg";
import img1 from "../src/images/cripto2.jpg";
import img2 from "../src/images/cripto3.jpg";
import "../src/coustomCss.css"

function App() {

  let names = ["Cripto 1", "Cripto 2", "Cripto 3"];

  return (
    <div className='contenedor'>
      <div className='caja'>
        <img src={ img0 }></img>
        <div className='name0'>
          <p>{names[0]}</p>
        </div>
      </div>

      <div className='caja'>
        <img src={ img1 }></img>
        <div className='name1'>
          <p>{names[1]}</p>
        </div>
      </div>

      <div className='caja'>
        <img src={ img2 }></img>
        <div className='name2'>
          <p>{names[2]}</p>
        </div>
      </div>

    </div>
  );
}

export default App;
