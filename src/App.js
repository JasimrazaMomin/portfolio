import './App.css';
import { NavBar } from './components/navbar';
import {Banner} from './components/banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/skills';
// import { Projects } from './components/projects';
import {ParticlesComponent} from './components/particle';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import {Timeline} from './components/timeline';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles"/>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <span className="star_span"></span>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Timeline/>
      {/* <Projects/> */}
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
