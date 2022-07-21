import './App.css';
import Brands from './components/Brands/Brands';
import Carousel from './components/Carousel/Carousel';
import DayDeals from './components/DayDeals/DayDeals';
import HealthArticles from './components/HealthArticles/HealthArticles';
import LabTests from './components/LabTests/LabTests';
import Navbar from './components/Navbar/Navbar';
import Offers from './components/Offers/Offers';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Offers/>
      <Carousel/>
      <LabTests/>
      <Brands/>
      <DayDeals/>
      <HealthArticles/>
      <Reviews/>
    </div>
  );
}

export default App;
