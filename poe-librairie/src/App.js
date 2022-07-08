import './App.css';
import {useState} from "react";
import Header from './components/Header';
import Connexion from './components/Connexion';

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
    </div>
  );
}

export default App;
