import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Projects from './components/Projects';

function App() {
  return (
    <div className='app'>
        <Intro />
        <Projects />
    </div>
  );
}

export default App;
