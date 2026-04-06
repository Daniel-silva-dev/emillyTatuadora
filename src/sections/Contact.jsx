import "../styles/contact.css";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact">

      <div className="contact-overlay">

        <div className="contact-content">
          <h2>Vamos conversar?</h2>
          <p>Agende sua tatuagem ou tire suas dúvidas agora mesmo.</p>

          <div className="contact-links">

            <a
              href="https://wa.me/5584987458355"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href="https://www.instagram.com/emillynnasttt?igsh=MXZnZzN6eGx1Nzl3bg%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              <FaInstagram /> Instagram
            </a>
                        <a
              href="https://www.instagram.com/emillynnas?igsh=ZWU0NGEwOWY3ZXZj"
              target="_blank"
              rel="noreferrer"
              className="contact-btn"
            >
              <FaInstagram /> Instagram pessoal
            </a>

            <a
              href="mailto:agostinhoemilly744@gmail.com"
              className="contact-btn"
            >
              <FaEnvelope /> Email
            </a>

          </div>
        </div>

      </div>

    </section>
  );
}