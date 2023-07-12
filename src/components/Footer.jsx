import React, { useState } from "react";
import  "../styles/Footer.css";
import { IoPaperPlaneOutline } from "react-icons/io5";
// import { collection, addDoc } from "firebase/firestore";
// import { getToken } from "firebase/messaging";
// import { db, messaging } from "../firebase";

const Footer = () => {
  const [email, setEmail] = useState("");

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Salvar os dados no Firestore
  //     await addDoc(collection(db, "messages"), {
  //       email: email,
  //       timestamp: new Date(),
  //     });

  //     // Obter o token de envio de mensagens push
  //     const token = await getToken(messaging);

  //     // Enviar mensagem push usando o serviço de mensagens push
  //     await fetch("https://fcm.googleapis.com/fcm/send", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         message: {
  //           notification: {
  //             title: "Nova mensagem recebida",
  //             body: `Você recebeu uma nova mensagem de ${email}`,
  //           },
  //           token: token,
  //         },
  //       }),
  //     });

  //     // Sucesso ao enviar mensagem push
  //     console.log("Mensagem push enviada com sucesso");
  //     alert('Mesagem enviada com sucesso')
  //   } catch (error) {
  //     // Erro ao enviar mensagem push
  //     console.error("Erro ao enviar mensagem push:", error);
  //   }
  //   // Limpar os campos após o envio
  //   setEmail("");
  // };

  return (
    <footer className='footer'>
      <div className='footerContainer'>
        <div className='contacts'>
          <p className='contatcText'>Contato</p>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <p className='email'>meudigitalagencia'@gmail.com</p>
          </a>
          <p className='phone'>83 9 86377109</p>
        </div>
        <form onSubmit={'dando erro no chrome mobile : handleFormSubmit'}>
          <div
            style={{ textAlign: "center", lineHeight: "85%" }}
            className='newslatter'
          >
            <p className='signUpNewsLatter'>
              Inscreva-se na nossa Newsletter
            </p>
            <input
              type="text"
              className='submitEmail'
              placeholder="Coloque seu e-mail aqui"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className='btnFooter' type="submit"  >
              <IoPaperPlaneOutline  />
            </button>
          </div>
          <div className='contactForm'></div>
        </form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src="./img/logoMeuWhite.png"
            alt="Logo"
            className='logo'
          />
          <p className='textBtnLogo'>Vamos evoluir juntos?</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;