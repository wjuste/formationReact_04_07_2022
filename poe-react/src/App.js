import logo from './logo.svg';
import './style/App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Presentation from './pages/Presentation';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Routage from './pages/Routage';
import Static from './pages/Static';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Logo />
      <Navigation />
        <div className='main'>
          <Routes>     {/*C'est  à l'interieur de cette balise que React va charger les routes*/}
            <Route path="/" element={<Presentation/>} />
            <Route path="/routing" element={<Routage/>} />
            <Route path="/static" element={<Static/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
