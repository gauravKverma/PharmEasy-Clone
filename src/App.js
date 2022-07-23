import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Beauty from './components/Products/Beauty';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category/beauty" element={<Beauty/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
