import React, { useEffect } from "react";
import "../styles/FeaturesSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Btn from "./Btn";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <section id="features" className="features">
      <div className="featureContainer" id="webDevContainer" data-aos="fade-up">
        <div className="webDevContent">
          <div className="imgFeature">
            <img
              className="featuresImg"
              id="FeatureImgWebDev"
              alt="Social networks img"
              src="./img/webDevImg.png"
            />
          </div>
          <div className="featureDesc">
            <h1 className="h-1">Sites e Apps Personalizados</h1>
            <p className="h-2">
              Desenvolvemos sites e aplicaivos modernos, responsivos e
              personalizados para atender às necessidades do seu negócio. Atraia
              e envolva seu público-alvo por meio de conteúdo relevante e
              valioso. Nossa equipe de redatores especializados criará conteúdo
              persuasivo que fortalecerá sua marca, estabelecerá sua autoridade
              no setor e aumentará sua base de clientes.
            </p>
            <Btn />
          </div>
        </div>
      </div>

      <div className="featureContainer" id="webDevContainer" data-aos="fade-up">
        <div className="webDevContent" id="socialNetwork">
          <div className="imgFeature">
            <img
              className="featuresImg"
              id="FeatureImgWebDev"
              alt="Social networks img"
              src="./img/SocialNetworksImg.png"
            />
          </div>
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
            <Btn />
          </div>
        </div>
      </div>

      <div className="featureContainer" id="seoContainer" data-aos="fade-up">
        <div className="seoContent" id="">
          <div className="imgFeature">
            <img
              className="featuresImg"
              id="FeatureImgSeo"
              alt="SEO img"
              src="./img/seoImg.png"
            />
          </div>
          <div className="featureDesc">
            <h1 className="h-1">Otimização de Busca</h1>
            <p className="h-2">
              Aumente a visibilidade do seu site nos motores de busca.
              Utilizamos técnicas avançadas de SEO para melhorar o seu ranking
              nos resultados de pesquisa na internete e direcionar mais tráfego
              qualificado para o seu negócio.
            </p>
            <Btn />
          </div>
        </div>
      </div>

      <div className="featureContainer" id="seoContainer" data-aos="fade-up">
        <div className="seoContent" id="emailMkt">
          <div className="imgFeature">
            <img
              className="featuresImg"
              id="FeatureImgSeo"
              alt="SEO img"
              src="./img/emMktImg.png"
            />
          </div>
          <div className="featureDesc">
            <h1 className="h-1">Campanhas de Email Marketing</h1>
            <p className="h-2">
              Aproveite o poder do email marketing para se conectar com seus
              clientes e impulsionar suas vendas. Desenvolvemos campanhas
              personalizadas, segmentadas e impactantes que envolvem seus
              clientes, promovem suas ofertas e aumentam a fidelidade à marca.
            </p>
            <Btn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
