import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import { collection, addDoc } from "firebase/firestore";
import { getMessaging, getToken } from "firebase/messaging";
import { db } from "../firebase";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalAlert from "./ModalAlert";
import { FaCircleNotch } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // Salvar os dados no Firestore
      const messagesCollection = collection(db, "mensagens");
      await addDoc(messagesCollection, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
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
              body: `Você recebeu uma nova mensagem de ${formData.name}`,
            },
            token: token,
          },
        }),
      });
      setIsLoading(false);
      setIsAlertOpen(true);
      console.log("Mensagem push enviada com sucesso");

      // Limpar os campos após o envio
      setFormData(initialState);
    } catch (error) {
      // Erro ao enviar mensagem push
      console.error("Erro ao enviar mensagem push:", error);
    }
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  return (
    <section data-aos="fade-up" id="contact" className="contact">
      <div className="contactContainer">
        <h2 className="sectionTitle">Entre em Contato</h2>
        <p className="sectionDescription">
          Entre em contato conosco para obter mais informações ou solicitar um
          orçamento.
        </p>
        <form className="contactForm" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            className="inputField"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            className="inputField"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem. Ex: quero saber mais sobre seus serviços"
            className="inputField"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submitButton">
            {isLoading ? (
              <FaCircleNotch className="icon-spin" />
            ) : (
              <span>
                Enviar <IoPaperPlaneOutline className="icon" />
              </span>
            )}
          </button>
        </form>
      </div>
      {isAlertOpen && (
        <ModalAlert
          message="Recebemos seu email! Entraremos em contato para passar mais informações em breve."
          onClose={handleAlertClose}
        />
      )}
    </section>
  );
};

export default Contact;
