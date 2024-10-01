//import logo from './logo.svg';
import './App.css';
import { CFooter } from './components/CFooter';
import CHeader from './components/CHeader';

function App() {
  return (
    <div className="App">
      <CHeader aName="Dominika" aFamily="Spolnik" />
      <CFooter weather="sloneczna" temp="25">
        <p>Niebo jest bezchmurne, wiatr słaby</p>
      </CFooter>
      <CFooter weather="deszczowa" temp="13" />
      <CFooter weather="sniezna" temp="-6" />
    </div>
  );
}

export default App;
