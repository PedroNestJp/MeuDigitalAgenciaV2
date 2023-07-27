import React, { useState } from "react";
import "../styles/Footer.css";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaInstagram, FaWhatsapp, FaCircleNotch } from "react-icons/fa";
import { collection, addDoc } from "firebase/firestore";
import { getToken } from "firebase/messaging";
import { db, messaging } from "../firebase";
import ModalAlert from "./ModalAlert";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // Salvar os dados no Firestore
      await addDoc(collection(db, "newslatter"), {
        email: email,
        timestamp: new Date(),
      });

      // Obter o token de envio de mensagens push
      const token = await getToken(messaging);

      // Enviar mensagem push usando o serviço de mensagens push
      await fetch("https://fcm.googleapis.com/fcm/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            notification: {
              title: "Nova assinatura na Newsletter",
              body: `Novo e-mail cadastrado: ${email}`,
            },
            token: token,
          },
        }),
      });
      setIsLoading(false);
      setIsAlertOpen(true);
      console.log("Mensagem push enviada com sucesso");
    } catch (error) {
      console.error("Erro ao enviar mensagem push:", error);
    }

    setEmail(""); // Limpar o campo de e-mail após o envio
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="contacts">
          <p className="contactText">Contato</p>
          <a
            href="mailto:meudigitalagencia@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <p className="email">meudigitalagencia@gmail.com</p>
          </a>
          <div className="iconsSocial">
            <a
              href="https://www.instagram.com/meuagencia/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="listLinks2">
                <FaInstagram />
              </span>
            </a>
            <a
              href="http://wa.me/5583986377109"
              target="_blank"
              rel="noreferrer"
            >
              <span className="listLinks2">
                <FaWhatsapp />
              </span>
              <span> (83) 9 86377109 </span>
            </a>
          </div>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div
            style={{ textAlign: "center", lineHeight: "85%" }}
            className="newslatter"
          >
            <p className="signUpNewsLatter">Inscreva-se na nossa Newsletter</p>
            <input
              type="email"
              className="submitEmail"
              placeholder="Coloque seu e-mail aqui"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btnFooter" type="submit">
              {isLoading ? (
                <FaCircleNotch className="icon-spin" />
              ) : (
                <IoPaperPlaneOutline />
              )}
            </button>
          </div>
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src="./img/logoMeuWhite.png" alt="Logo" className="logo" />
          <p className="textBtnLogo">Vamos evoluir juntos?</p>
        </div>
      </div>
      {isAlertOpen && (
        <ModalAlert
          message="Seja bem vindo a nossa Newsletter!"
          onClose={handleAlertClose}
        />
      )}
    </footer>
  );
};

export default Footer;
