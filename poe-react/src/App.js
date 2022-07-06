import './style/App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Presentation from './pages/Presentation';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Routage from './pages/Routage';
import Static from './pages/Static';
import State from './pages/State';
import Props from './pages/Props';

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
            <Route path="/hooks" element={<State/>} />
            <Route path="/props" element={<Props/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
