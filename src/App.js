import './App.css';
import FetchData from './header/FetchData/FetchData';
import Header from './header/Header/Header';
import Intro from './header/Intro/Intro';

function App() {
  return (
    <div className="App bg-dark">
      <Header></Header>
      <Intro></Intro>
     <FetchData></FetchData>
    
    </div>
  );
}

export default App;
