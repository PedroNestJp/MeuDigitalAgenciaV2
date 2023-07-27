import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import { collection, addDoc } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";
import { db } from "../firebase";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Salvar os dados no Firestore
      const messagesCollection = collection(db, "mensagens");
      await addDoc(messagesCollection, {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString(), // Converter a data para string antes de salvar
      });

      // Obter o token de envio de mensagens push
      const messaging = getMessaging();
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
              title: "Nova mensagem recebida",
              body: `Você recebeu uma nova mensagem de ${name}`,
            },
            token: token,
          },
        }),
      });

      alert(
        "Recebemos seu email! Entraremos em contato para passar mais informações em breve."
      );
      console.log("Mensagem push enviada com sucesso");
    } catch (error) {
      // Erro ao enviar mensagem push
      console.error("Erro ao enviar mensagem push:", error);
    }

    // Limpar os campos após o envio
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section data-aos="fade-up" id="contact" className="contact">
      <div className="contactContainer">
        <h2 className="sectionTitle">Entre em Contato</h2>
        <p className="sectionDescription">
          Entre em contato conosco para obter mais informações ou solicitar um
          orçamento.
        </p>
        <form className="contactForm" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            className="inputField"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="inputField"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Sua mensagem"
            className="inputField"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="submitButton">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
