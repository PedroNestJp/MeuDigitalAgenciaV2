import React, { useEffect } from "react";
import styles from "../styles/FeaturesSection.css";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <section id="features" className="features">
      <div className="featureContainer" id="webDevContainer">
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

      <div className="feature">
        <img
          src="headerSectionDevices"
          alt=""
          className={"featureImage"}
          width={200}
          height={200}
        />
        <div className="featureContent">
          <h3 className="featureTitle">Criação de Sites Personalizados</h3>
          <p data-aos="fade-up" className="featureDescription">
            Desenvolvemos sites modernos, responsivos e personalizados para
            atender às necessidades do seu negócio. Atraia e envolva seu
            público-alvo por meio de conteúdo relevante e valioso. Nossa equipe
            de redatores especializados criará conteúdo persuasivo que
            fortalecerá sua marca, estabelecerá sua autoridade no setor e
            aumentará sua base de clientes.
          </p>
          <span className="line"></span>
          <p className="contactUsUp">
            <a href="#contact" className="contactUs">
              Fale conosco
            </a>
            <a
              href="#contact"
              style={{
                width: "46px",
                color: "#A39C9C",
              }}
            >
              <HiOutlineArrowLongRight />
            </a>
          </p>
        </div>
      </div>

      <div className="feature">
        <img
          // src={headerSectionSeo}
          alt="Recursos"
          className="featureImage"
          width={200}
          height={200}
        />
        <div className="featureContent">
          <h3 className="featureTitle">Otimização para Mecanismos de Busca</h3>
          <p data-aos="fade-up" className="featureDescription">
            Aumente a visibilidade do seu site nos motores de busca. Utilizamos
            técnicas avançadas de SEO para melhorar o seu ranking nos resultados
            de pesquisa e direcionar mais tráfego qualificado para o seu
            negócio.
          </p>
          <span className="line"></span>
          <p className="contactUsUp">
            <a href="#contact" className="contactUs">
              Fale conosco
            </a>
            <a
              href="#contact"
              style={{
                width: "46px",
                color: "#A39C9C",
              }}
            >
              <HiOutlineArrowLongRight />
            </a>
          </p>
        </div>
      </div>

      <div className="feature">
        <img
          // src={headerSectionMail}
          alt="Recursos"
          className="featureImage"
          width={200}
          height={200}
        />
        <div className="featureContent">
          <h3 className="featureTitle">Campanhas de Email Marketing</h3>
          <p data-aos="fade-up" className="featureDescription">
            Aproveite o poder do email marketing para se conectar com seus
            clientes e impulsionar suas vendas. Desenvolvemos campanhas
            personalizadas, segmentadas e impactantes que envolvem seus
            clientes, promovem suas ofertas e aumentam a fidelidade à marca.
          </p>
          <span className="line"></span>
          <p className="contactUsUp">
            <a href="#contact" className={styles.contactUs}>
              Fale conosco
            </a>
            <a
              href="#contact"
              style={{
                width: "46px",
                color: "#A39C9C",
              }}
            >
              <HiOutlineArrowLongRight />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
