import { BaseColaboradores } from './BaseColaboradores';
import {useState} from 'react'

import Inputs from './components/Inputs';
import Colaboradores from './components/Colaboradores';
import Cabecera from './components/Cabecera';
import Buscar from "./components/Buscar";

import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [colaboradoresList, setColaboradoresList]=useState(BaseColaboradores)
  const [buscar, setBuscar] = useState("");

  return (
    <div className="App">
      <div className="App-header">
        <Card style={{ width: "80rem" }} className="card">
          <Card.Header className="text-center header"><h2>Registro de Colaboradores</h2></Card.Header>
          <Card.Body>
            <div className="inputsArea">
              <Buscar setBuscar={setBuscar}/>
              <Inputs setColaboradores={setColaboradoresList} colaboradores={colaboradoresList}/>
            </div>
          </Card.Body>
        </Card> 
        <Card style={{ width: "80rem" }} className="card">
            <Card.Body>
              <Cabecera />
              { colaboradoresList.filter((colaborador)=>{
                return (
                  colaborador.nombre.toLowerCase().includes(buscar.toLowerCase())
                )
              }).map(colaborador=>{
                  return (
                    <Colaboradores key={colaborador.id} name={colaborador.nombre} email={colaborador.correo} /> )                  
                })
              }
              
            </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
