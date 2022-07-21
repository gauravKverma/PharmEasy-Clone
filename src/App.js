import './App.css';
import Carousel from './components/Carousel/Carousel';
import Navbar from './components/Navbar/Navbar';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Offers/>
      <Carousel/>
    </div>
  );
}

export default App;
