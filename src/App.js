import './App.css';
import imagen from "../src/firma oscar .png"

function App() {
  let nombre = "Oscar";
  let caja = <div>Nombre:</div>; // para enviar un html desde js
  let nombres = ["Jab", "Pepito", "Jose"];
  let nombres_json = [{nombre: "Angélica",
                      edad: 16,
                      nombre: "Oscar",
                      edad: 44}]


  return (
    <div className="font">
      <h1>Oscar Riojas</h1>
      <h1>{ nombres[1] }</h1>
      <h2>Edad = { nombres_json.edad }</h2>
      <h3>Edad json = { nombres_json[0].nombre}</h3>
      <input value={ nombre }></input>
      <div>{ caja }</div>
      <div>{ nombre }</div>
      {alert("Hola mundo")}
      <br></br>
      <img src={ imagen }></img>
    </div>
  );
}

export default App;
