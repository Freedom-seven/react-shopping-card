import Navbar from './Component/Navbar/Navbar';
import Cards from './Component/Cards/Cards';
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Cards free={"free shipping"}/>
    </>
  );
}

export default App;
