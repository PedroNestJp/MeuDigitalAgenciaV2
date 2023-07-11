import React, { useEffect } from "react";
import "../styles/FeaturesSection.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <section id="features" className="features">
      <div className="featureContainer" id="webDevContainer" data-aos="fade-up">
        <div className="webDevContent">
          <img
            className="featuresImg"
            id="FeatureImgWebDev"
            alt="Social networks img"
            src="./img/webDevImg.png"
          />
          <div className="featureDesc">
            <h1 className="h-1">Criação de Sites Personalizados</h1>
            <p className="h-2">
              Desenvolvemos sites modernos, responsivos e personalizados para
              atender às necessidades do seu negócio. Atraia e envolva seu
              público-alvo por meio de conteúdo relevante e valioso. Nossa
              equipe de redatores especializados criará conteúdo persuasivo que
              fortalecerá sua marca, estabelecerá sua autoridade no setor e
              aumentará sua base de clientes.
            </p>
            <button className="featureBtn">
              <a href="#contact">
                <p className="featureBtnText"> Fale Conosco </p>
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="featureContainer" id="seoContainer" data-aos="fade-up">
        <div className="seoContent">
          <img
            className="featuresImg"
            id="FeatureImgSeo"
            alt="SEO img"
            src="./img/seoImg.png"
          />
          <div className="featureDesc">
            <h1 className="h-1">Otimização de Busca</h1>
            <p className="h-2">
              Aumente a visibilidade do seu site nos motores de busca.
              Utilizamos técnicas avançadas de SEO para melhorar o seu ranking
              nos resultados de pesquisa e direcionar mais tráfego qualificado
              para o seu negócio.
            </p>
            <button className="featureBtn">
              <p className="featureBtnText"> Fale Conosco </p>
            </button>
          </div>
        </div>
      </div>

      <div className="featureContainer" id="webDevContainer" data-aos="fade-up">
        <div className="webDevContent">
          <img
            className="featuresImg"
            id="FeatureImgWebDev"
            alt="Social networks img"
            src="./img/SocialNetworksImg.png"
          />
          <div className="featureDesc">
            <h1 className="h-1">Gerenciamento de Redes Sociais</h1>
            <p className="h-2">
              Criação, Integração e Gestão de Redes Sociais Aproveite o poder
              das redes sociais para impulsionar o seu negócio. Nossos
              especialistas em marketing digital irão criar estratégias eficazes
              para a sua presença nas redes sociais, envolvendo seu
              público-alvo, aumentando o reconhecimento da marca e
              impulsionando.
            </p>
            <button className="featureBtn">
              <p className="featureBtnText"> Fale Conosco </p>
            </button>
          </div>
        </div>
      </div>

      <div className="featureContainer" id="seoContainer" data-aos="fade-up">
        <div className="seoContent">
          <img
            className="featuresImg"
            id="FeatureImgSeo"
            alt="SEO img"
            src="./img/emMktImg.png"
          />
          <div className="featureDesc">
            <h1 className="h-1">Campanhas de Email Marketing</h1>
            <p className="h-2">
              Aproveite o poder do email marketing para se conectar com seus
              clientes e impulsionar suas vendas. Desenvolvemos campanhas
              personalizadas, segmentadas e impactantes que envolvem seus
              clientes, promovem suas ofertas e aumentam a fidelidade à marca.
            </p>
            <button className="featureBtn">
              <p className="featureBtnText"> Fale Conosco </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
