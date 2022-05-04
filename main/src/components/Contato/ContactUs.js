import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

// Importando Fade Reveal
import Fade from "react-reveal/Fade";

export const ContactUs = () => {
  const form = useRef();

  const user = {
    name: "",
    email: "",
    message: "",
  };

  function limparInput() {
    const name = document.getElementsByName("name");
    const email = document.getElementsByName("email");
    const message = document.getElementsByName("message");

    name[0].value = user.name;
    email[0].value = user.email;
    message[0].value = user.message;
  }

  const sendEmail = async (e) => {
    await e.preventDefault();

     emailjs
      .sendForm(
        "gmailMessage",
        "template_n47138c",
        form.current,
        "VemyZsOKi3sIef0NR"
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso!");
          limparInput();
        },
        (error) => {
          alert(error.message);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Fade bottom>
        <input
          className="input"
          required
          type="text"
          placeholder="Nome"
          name="name"
          autoComplete="off"
        />
      </Fade>
      <Fade bottom>
        <input
          className="input"
          required
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
      </Fade>
      <Fade bottom>
        <textarea
          className="input msg"
          required
          placeholder="Mensagem"
          name="message"
          autoComplete="off"
        />
      </Fade>
      <Fade bottom><input className="submit" type="submit" value="Fale comigo!" /></Fade>
    </form>
  );
};
