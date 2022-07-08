import './App.css';
import {useState} from "react";
import Header from './components/Header';
import Connexion from './components/Connexion';
import Librairie from './components/Librairie';

function App() {

  const [isConnected, setConnected] = useState(false);
  const[name, setName] = useState("");


  return (
    <div className="App">
      <Header name = {name}/>
      <Connexion 
          isConnected={isConnected}
          setConnected = {setConnected}
          setName = {setName}
      />
      { (isConnected) ? <Librairie /> : <p>Veuillez vous connecter</p>}
    </div>
  );
}

export default App;
