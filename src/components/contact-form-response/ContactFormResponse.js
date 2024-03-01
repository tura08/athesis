import React from "react";
import "./ContactFormResponse.css"; // Ensure to create this CSS file for styling

// Import icons or images if necessary
import successIcon from "../../assets/success-icon.png"; // Placeholder path, replace with actual path

const ContactFormResponse = () => {
  return (
    <div className="contact-form-response">
      <div className="response-icon">
        <img src={successIcon} alt="Success" />
      </div>
      <h2>Grazie per averci contattato!</h2>
      <p>
        Il tuo messaggio è stato inviato con successo. Ti risponderemo il prima
        possibile.
      </p>
      <button onClick={() => window.location.reload()}>
        Invia un altro messaggio
      </button>
    </div>
  );
};

export default ContactFormResponse;
