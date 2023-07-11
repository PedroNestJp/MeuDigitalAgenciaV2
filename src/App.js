
import './App.css';
import {Header} from "../src/components/Header"
import AboutUs from './components/AboutUs';
import FeaturesSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialSection';
import TestimonialsClientes from './components/TestimonialsClientes';
import Footer from './components/Footer';
import Contact from './components/Contact';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <FaqSection/>
      <TestimonialsClientes/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
