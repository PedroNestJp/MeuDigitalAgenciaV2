import React, { useEffect } from "react";
import "../styles/AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <section id="aboutUs" data-aos="fade-up">
      <div className="main">
        <h2 className="title">Sobre nós</h2>
        <h1 className="subTitle"> Conheça o Meu Digital </h1>
        <p className="text">
          Somos a solução para o seu sucesso digital. Na Meu Digital, somos
          apaixonados por ajudar microempreendedores , pequenas empresas e
          empreendedores iniciantes a alcançarem o sucesso online.
          <div>.</div>
          Combinamos design de qualidade e estratégias personalizadas para
          fornecer soluções digitais eficazes e resultados excepcionais.
          <div>.</div>
          Nossa abordagem é baseada em parceria e comprometimento com nossos
          clientes. Trabalhamos lado a lado com você para entender suas
          necessidades e objetivos, criando estratégias personalizadas que
          impulsionam o crescimento do seu negócio e o destacam da concorrência.
          <div>.</div>
          Não importa se você está apenas começando ou precisa expandir sua
          presença online, estamos aqui para ajudar a transformar suas ideias em
          realidade digital.
          <div>.</div>
          Deixe-nos ajudá-lo a construir uma marca forte, alcançar seu
          público-alvo e aumentar suas vendas online. Entre em contato conosco
          hoje mesmo para descobrir como podemos impulsionar o seu sucesso
          digital!
        </p>
        <h1 className="cta"> Impulsione seu negócio digital </h1>
        <h2 className="ctaTextSub">
          {" "}
          Tenha uma presença online sólida e conquiste mais clientes{" "}
        </h2>
        <a href="#contact">
          <button className="submitButton"> Entre em contato </button>
        </a>
      </div>
    </section>
  );
};
export default AboutUs;
