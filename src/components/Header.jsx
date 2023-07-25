import React from "react";
import "../styles/Header.css";

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
                <span className="listLinks"> Sobre </span>
                <span className="listLinks"> Serviços </span>
                <span className="listLinks"> Atendimento </span>
              </div>
              <div className="list2">
                <span className="listLinks2">
                  {" "}
                  <img src="./img/instagram.svg" alt="linkIstagram" />{" "}
                </span>
                <span className="listLinks2">
                  {" "}
                  <img src="./img/whatsapp.svg" alt="LinkWhatsapp" />{" "}
                </span>
                <span> (83) 9 86377109 </span>
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
            <div className="card" id="cardSeo">
              <img className="cardImg" src="./img/seovalue-1.png" alt="seo" />
              <p className="cardTitle"> Oimização de busca </p>
            </div>
            <div className="card" id="cardWebDev">
              <img
                className="cardImg"
                src="./img/wavy-bus-27-single-01-photoroom-1.png"
                alt=""
              />
              <p className="cardTitle"> Criação de sites e apps </p>
            </div>
            <div className="card" id="cardEmMkt">
              <img className="cardImg" src="./img/email-1.png" alt="" />
              <p className="cardTitle"> Campanha de email marketing</p>
            </div>
            <div className="card" id="cardSocialNet">
              <img
                className="cardImg"
                src="./img/6544292-photoroom-1.png"
                alt=""
              />
              <p className="cardTitle"> Gerenciamento de redes sociais</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
