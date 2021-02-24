import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Particles, { ShapeType } from 'react-particles-js';
import Navbar from './components/Navbar';
import About from './components/Aboutme';
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
    </div>
  );
}

export default App;
