import Card from "./Components/Card";
import CardChildren from "./Components/Children/CardChildren";
import CardContent from "./Components/Children/CardContent";
import "./App.css";

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
    </div>  
  );
}
