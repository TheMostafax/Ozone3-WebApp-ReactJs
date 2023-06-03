import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import Work from "./components/pages/Work";
import PreLoader from './components/PreLoader';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';

function App() {
    return (
      <div>
      <PreLoader/>
        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact/>
        <Footer/>
  
      </div>
    );
  }
  
  export default App;