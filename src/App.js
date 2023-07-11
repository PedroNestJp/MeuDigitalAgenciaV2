
import './App.css';
import {Header} from "../src/components/Header"
import AboutUs from './components/AboutUs';
import FeaturesSection from './components/FeatureSection';
import TestimonialsSection from './components/TestimonialSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <FeaturesSection/>
      <TestimonialsSection/>
      {/* <TestimonialsClienes/> */}
      <Footer/>

    </div>
  );
}

export default App;
