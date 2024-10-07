import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Importance from './components/Importance/Importance';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About />
      <Importance/>
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;