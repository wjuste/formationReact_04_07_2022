import logo from './logo.svg';
import './style/App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Presentation from './pages/Presentation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='main'>
          <Routes>     {/*C'est  à l'interieur de cette balise que React va charger les routes*/}
            <Route path="/" element={<Presentation/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
