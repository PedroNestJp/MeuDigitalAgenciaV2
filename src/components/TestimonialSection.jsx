import React from "react";
import  "../styles/TestimonialsSection.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const TestimonialsSection = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <section data-aos='fade-up' id="testimonials" className='testimonials'>
      <div className='container'>
        <h2 className='sectionTitle'>Depoimentos</h2>
        <div className='testimonialsList'>
          <div className='testimonial'>
            <p className='testimonialText'>
              A Agência Digital fez um trabalho incrível para impulsionar a
              nossa presença online. Nossas vendas aumentaram significativamente
              desde então.
            </p>
            <p className='testimonialAuthor'>
              - LuArtes
            </p>
          </div>
          <div className='testimonial'>
            <p className='testimonialText'>
              Estou muito satisfeito com os serviços da Agência Digital. Eles
              criaram um site incrível para o meu negócio e me ajudaram a
              alcançar mais 'clientes'.
            </p>
            <p className='testimonialAuthor'>
              - Pedro Nest, CEO Nest informática
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;