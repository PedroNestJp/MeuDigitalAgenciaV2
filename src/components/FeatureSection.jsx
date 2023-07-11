import React, { useEffect } from "react";
import styles from "../styles/FeaturesSection.css";
// import headerSectionaIdea from "../images/feaureSecion-idea.png";
import headerSectionSeo from "../images/feaureSecion-seo.png";
import headerSectionMail from "../images/feaureSecion-mail.png";
import headerSectionDevices from "../images/feaureSecion-devices (1).png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = () => {

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <section id="features" className='features' >
      <h2 className='sectionTitle' > Serviços oferecidos </h2>
      <div className='container'>
        <div className='feature'>
          <img
            src='headerSectionaIdea'
            alt="Recursos"
            className='featureImage'/>

          <div className='featureContent'>
            <h3  className='featureTitle'>
              Criação, Integração e Gestão de Redes Socia'is
            </h3>
            <p>
              Aproveite o poder das redes sociais para impulsionar o s'eu
              negócio. Nossos especialistas em marketing digital irão criar
              estratégias eficazes para a sua presença nas redes sociais,
              envolvendo seu público-alvo, aumentando o reconhecimento da marca
              e impulsionando as vendas.
            </p>
            <span className='line2'></span>
            <p className='contactUsUp'>
              <a href="#contact" className='contactUs'>
                Fale conosc'o
              </a>
              <a
                href="_"
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

        <div className='feature'>
          <img
            src={headerSectionDevices}
            alt=""
            className={'featureImage'}
            width={200}
            height={200}
          />
          <div className='featureContent'>
            <h3 className='featureTitle'>
              Criação de Sites Personalizados
            </h3>
            <p data-aos='fade-up' className='featureDescription'>
              Desenvolvemos sites modernos, responsivos e personalizados para
              atender às necessidades do seu negócio. Atraia e envolva seu
              público-alvo por meio de conteúdo relevante e valioso. Nossa
              equipe de redatores especializados criará conteúdo persuasivo que
              fortalecerá sua marca, estabelecerá sua autoridade no setor e
              aumentará sua base de clientes.
            </p>
            <span className='line'></span>
            <p className='contactUsUp'>
              <a href="#contact" className='contactUs'>
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

        <div className='feature'>
          
          
          <img

            src={headerSectionSeo}
            alt="Recursos"
            className='featureImage'
            width={200}
            height={200}
          />
          <div className='featureContent'>
            <h3 className='featureTitle'>
              Otimização para Mecanismos de Busca
            </h3>
            <p data-aos='fade-up' className='featureDescription'>
              Aumente a visibilidade do seu site nos motores de busca.
              Utilizamos técnicas avançadas de SEO para melhorar o seu ranking
              nos resultados de pesquisa e direcionar mais tráfego qualificado
              para o seu negócio.
            </p>
            <span className='line'></span>
            <p className='contactUsUp'>
              <a href="#contact" className='contactUs'>
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

        <div className='feature'>
          <img
            src={headerSectionMail}
            alt="Recursos"
            className='featureImage'
            width={200}
            height={200}
          />
          <div className='featureContent'>
            <h3 className='featureTitle'>
              Campanhas de Email Marketing
            </h3>
            <p data-aos='fade-up' className='featureDescription'>
              Aproveite o poder do email marketing para se conectar com seus
              clientes e impulsionar suas vendas. Desenvolvemos campanhas
              personalizadas, segmentadas e impactantes que envolvem seus
              clientes, promovem suas ofertas e aumentam a fidelidade à marca.
            </p>
            <span className='line'></span>
            <p className='contactUsUp'>
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
      </div>
    </section>
  );
};

export default FeaturesSection;