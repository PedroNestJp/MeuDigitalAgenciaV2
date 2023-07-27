import React from "react";
import "../styles/Header.css";
import "react-icons/fa"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export const Header = () => {
  return (
    <header>
      <div className="HeaderContainer">
        <div className="listas">
          <div className="headerLogo">
            <img className="logoImg" src="./img/logo.png" alt="" />
          </div>
          <div className="lists">
            <div className="list">
              <a href="#aboutUs">
                <span className="listLinks"> Sobre </span>
              </a>
              <a href="#features">
                <span className="listLinks"> Serviços </span>
              </a>
              <a href="#contact">
                <span className="listLinks"> Atendimento </span>
              </a>
            </div>
            <div className="list2">
              <div className="iconsSocial">
                <a
                  href="https://www.instagram.com/meuagencia/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="listLinks2">
                    <FaInstagram/>
                  </span>
                </a>
                <a
                  href="http://wa.me/5583986377109"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="listLinks2">
                    <FaWhatsapp/>
                  </span>
                  <span> (83) 9 86377109 </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar">
          <div className="containerBox">
            <div className="slogan">
              <div className="sloganHeader">
                <span className="text-wrapper">A </span>
                <span className="text-wrapper-2">IMPORTÂNCIA </span>
                <span className="text-wrapper">DO </span>
                <span className="text-wrapper-2">SEU </span>
                <span className="text-wrapper-2">NEGÓCIO DIGITAL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="cards">
            <a href="#FeatureImgSeo">
              <div className="card" id="cardSeo">
                <img className="cardImg" src="./img/seovalue-1.png" alt="seo" />
                <p className="cardTitle"> Oimização de busca </p>
              </div>
            </a>
            <a href="#FeatureImgWebDev">
              <div className="card" id="cardWebDev">
                <img
                  className="cardImg"
                  src="./img/wavy-bus-27-single-01-photoroom-1.png"
                  alt=""
                />
                <p className="cardTitle"> Criação de sites e apps </p>
              </div>
            </a>

            <a href="#emailMkt">
              <div className="card" id="cardEmMkt">
                <img
                  className="cardImg"
                  src="./img/email-1.png"
                  alt=""
                  title=""
                />
                <p className="cardTitle"> Campanha de email marketing</p>
              </div>
            </a>

            <a href="#socialNetwork">
              <div className="card" id="cardSocialNet">
                <img
                  className="cardImg"
                  src="./img/6544292-photoroom-1.png"
                  alt=""
                />
                <p className="cardTitle"> Gerenciamento de redes sociais</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
