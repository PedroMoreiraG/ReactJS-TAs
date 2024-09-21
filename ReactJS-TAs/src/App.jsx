import Card from "./Components/TA1Card";
import CardChildren from "./Components/TA2Children/CardChildren";
import CardContent from "./Components/TA2Children/CardContent";
import "./App.css";
import InputComponent from './Components/TA3Input';
import Counter from './Components/TA4Counter';
import ToggleText from './Components/TA5TextBoton';
import TaskListWithEdit from './Components/TA7DeleteTask';  // Tareas con edición y eliminación
import CounterWithTitle from './Components/TA9useEffectTitle';  // Contador con título dinámico
import FetchUsers from './Components/TA10API';  // Llamada a API
import Timer from './Components/TA11Temporizador';  // Temporizador

export default function App() {
  return (
    <div className="App">
      
      <Card
        title="Jugador 1"
        description="Jugador de futbol del Arsenal"
        person="Bukayo Saka"
        dateStarted="07.2022"
        dateFinished="Not yet"
      />
      <Card
        title="Jugador 2"
        description="Jugador de futbol que debuto en Nacional"
        person="Bruno Fornaroli"
        dateStarted="02.2007"
        dateFinished="Not yet"
      />
      <Card
        title="Jugador 3"
        description="Futura promesa del futbol uruguayo"
        person="Gonzalo Petit"
        dateStarted="01.2024"
        dateFinished="Not yet"
      />
      <CardChildren>
        <CardContent title="Jugador 1 Children" description="Goleador Seleccion Uruguaya" person="Luis Suarez" dateStarted="03/2005" dateFinished="09/2024"/>
      </CardChildren>
      <CardChildren>
        <CardContent title="Jugador 2 Children" description="Goleador Nacional 2022" person="Gonzalo Bergessio" dateStarted="03/2019" dateFinished="09/2022"/>
      </CardChildren>
      <CardChildren>
        <CardContent title="Jugador 3 Children" description="Ganador del Balon de Oro" person="Vinicius Junior" dateStarted="03/2023" dateFinished="09/2024"/>
      </CardChildren>
    
    <h1>React Tareas</h1>

    <h2>Tarea 3: Input</h2>
    <InputComponent />

    <h2>Tarea 4: Contador</h2>
    <Counter />

    <h2>Tarea 5: Toggle Text</h2>
    <ToggleText />

    <h2>Tareas 6-8: Lista de Tareas con edición y eliminación</h2>
    <TaskListWithEdit />

    <h2>Tarea 9: Contador con título dinámico</h2>
    <CounterWithTitle />

    <h2>Tarea 10: Fetch Usuarios</h2>
    <FetchUsers />

    <h2>Tarea 11: Temporizador</h2>
    <Timer />
</div>  
  );
}
