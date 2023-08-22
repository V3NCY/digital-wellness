import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Carousel from './components/carousel';
import Card from './components/card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
