// export default Footer;
import React from "react";
import "./Footer.css";

// Images for icons
import logoImage from "../../assets/logo.svg";
import facebookIcon from "../../assets/file-svg/facebook.svg";
import instagramIcon from "../../assets/file-svg/instagram.svg";
import linkedinIcon from "../../assets/file-svg/linkedin.svg";
import foot1 from "../../assets/file-svg/iconafooter1.svg";
import foot2 from "../../assets/file-svg/iconafooter2.svg";
import foot3 from "../../assets/file-svg/iconafooter3.svg";
import foot4 from "../../assets/file-svg/iconafooter4.svg";

const Footer = () => {
  return (
    <footer className="f">
      <div className="f-online">
        <b>Online dal 1998</b>
      </div>
      <div className="f-main">
        <img src={logoImage} alt="Logo" className="f-logo" />
        <div className="f-info">
          <div className="f-info-item">
            <img src={foot1} alt="" className="f-icon" />
            Address: Via San Marco 80 - 37138 Verona (Vr)
          </div>
          <div className="f-info-item">
            <img className="f-icon" src={foot2} alt="" />
            info@athesis-herbs.com
          </div>
          <div className="f-info-item">
            <img className="f-icon" src={foot3} alt="" />
            marco.turazza@pec.ordinevetverona.it
          </div>
          <div className="f-info-item">
            <img className="f-icon" src={foot4} alt="" />
            +39 3483286636
          </div>
        </div>
        <div className="f-social">
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
      <div className="f-bottom">
        <p>
          P.I.: IT03877740237 | C.F.: TRZMRC58L19D957N - R.E.A.: VR373142 | Cod.
          destinatario: 3ZJY534
        </p>
      </div>
    </footer>
  );
};

export default Footer;
