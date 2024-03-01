import React, { useEffect, useState } from "react";

import "./Contact.css";

// import emailjs from "@emailjs/browser";

import telIcon from "../../assets/img-contact/telefono.svg";
import emailIcon from "../../assets/img-contact/mail.svg";
import ContactFormResponse from "../../components/contact-form-response/ContactFormResponse";
// const googleAPI = process.env.REACT_APP_GOOGLE_API;

const Contact = () => {
  useEffect(() => {
    // Scrolls to the top of the page
    window.scrollTo(0, 0);
  }, []);
  const [isSubmitted, setIsSubmitted] = useState(false);
  function Submit(e) {
    e.preventDefault();

    const googleAPI =
      "https://script.google.com/macros/s/AKfycbxifqYbR3j-xZPLZyvG1aOyUx_7-mFDOPye5vD6p4YwPqa8TJ_dQlILWEm2EU2oiLmRSA/exec";
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch(googleAPI, {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      mode: "no-cors", // for development only, not a permanent solution
    })
      .then((res) => {
        res.text();
        // Sostituire con componente
        // window.alert("Thank you! Message sent.");
        // window.location.reload();
        setIsSubmitted(true);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    // Sending data to EmailJS
    // const form = e.target;
    // emailjs
    //   .sendForm(
    //     "service_1ooou8g",
    //     "template_0ianvtg",
    //     form,
    //     "Rih8Wv0aVWJCpPMGO"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("EmailJS Success:", result.text);
    //     },
    //     (error) => {
    //       console.error("EmailJS Error:", error.text);
    //     }
    //   );
  }
  if (isSubmitted) {
    return <ContactFormResponse />;
  }

  return (
    <div className="c">
      <div className="c-bg">
        <div className="c-top-left">
          <img src={telIcon} alt=""></img>
          <h2>Telefono</h2>
          <p>+39 3482664035</p>
        </div>
        <div className="c-top-right">
          <img src={emailIcon} alt=""></img>
          <h2>Email</h2>
          <p>info@athesis-herbs.com</p>
        </div>
      </div>
      <div className="c-wrapper">
        <h1 className="c-wrapper-title">Contattaci</h1>
        <form onSubmit={(e) => Submit(e)}>
          <div className="name-fields">
            <input type="text" placeholder="Nome" name="user_name" required />
            <input
              type="text"
              placeholder="Cognome"
              name="user_subject"
              required
            />
          </div>
          <input type="text" placeholder="Email" name="user_email" required />
          <textarea rows="10" placeholder="Messaggio" name="message" required />
          <button>Invia</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
