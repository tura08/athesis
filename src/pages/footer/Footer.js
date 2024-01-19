// import React from "react";

// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="f">
//       <p>
//         <b>Online dal 1998</b>
//       </p>
//       <p>Athesis di Turazza Marco</p>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";

// Assuming you have imported the images for the logo and social media icons
import logoImage from "../../assets/logo.png";
import facebookIcon from "../../assets/logo.png";
import instagramIcon from "../../assets/logo.png";
import linkedinIcon from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-online">
        <p>
          <b>Online dal 1998</b>
        </p>
      </div>

      <div className="footer-main">
        <div className="footer-logo">
          <img src={logoImage} alt="Logo" />
        </div>
        <div className="footer-contact">
          <p>Athesis di Turazza Marco</p>
          <p>Address: Via San Marco 80 - 37138 Verona (Vr)</p>
          <p>Email: info@athesis-herbs.com</p>
          <p>PEC: marco.turazza@pec.ordinevetverona.it</p>
          <p>Phone: 3483286636</p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          P.I.: IT03877740237 | C.F.: TRZMRC58L19D957N - R.E.A.: VR373142 | Cod.
          destinatario: 3ZJY534
        </p>
      </div>
    </footer>
  );
};

export default Footer;
