import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles, { ShapeType } from 'react-particles-js';

import Port from './components/Portfolio'
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/Aboutme';
import Service from './components/Services';
import Exp from './components/Experience';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Particles
      className="partcs"
      params={{
        particles:{
          number:{
            value: 30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"star",
            stroke: {
              width:6,
              color:"#00FFFF"
            }
          }
        }
      }}
      />

      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Exp/>
      <Port/>
      <Contact/>
    </div>
  );
}

export default App;
