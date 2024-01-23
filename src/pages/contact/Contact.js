import React from "react";

import "./Contact.css";

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
      <h1>Per qualsiasi richiesta non esitare a contattarci!</h1>
      <div className="c-wrapper">
        <form onSubmit={(e) => Submit(e)}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="Email" name="email" required />
          <textarea rows="10" placeholder="Message" name="message" required />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
