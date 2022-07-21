import './App.css';
import Brands from './components/Brands/Brands';
import Carousel from './components/Carousel/Carousel';
import LabTests from './components/LabTests/LabTests';
import Navbar from './components/Navbar/Navbar';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Offers/>
      <Carousel/>
      <LabTests/>
      <Brands/>
    </div>
  );
}

export default App;
