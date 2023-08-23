import React from 'react';
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Card from "./components/card";
import Footer from "./components/footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
