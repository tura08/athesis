import React from "react";

import "./Contact.css";

import telIcon from "../../assets/img-contact/telefono.svg";
import emailIcon from "../../assets/img-contact/mail.svg";
// const googleAPI = process.env.REACT_APP_GOOGLE_API;

const Contact = () => {
  function Submit(e) {
    e.preventDefault();
    const googleAPI =
      "https://script.google.com/macros/s/AKfycbyXaRdX7bz-SH4lxpwhq5KqJnFymEvM5fr5XcEM9DZFKGJ-3WioQ2yjdR7-ysi3fLy2UQ/exec";
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
        window.alert("Thank you! Message sent.");
        window.location.reload();
      }) // Assuming the response is text
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
            <input type="text" placeholder="Nome" name="name" required />
            <input type="text" placeholder="Cognome" name="surname" required />
          </div>
          <input type="text" placeholder="Email" name="email" required />
          <textarea rows="10" placeholder="Messaggio" name="message" required />
          <button>Invia</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
