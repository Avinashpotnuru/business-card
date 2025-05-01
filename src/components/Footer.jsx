import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="section_footer">
        <ul className="footer_social flex gap-4">
          <li>
            <a
              href="https://github.com/Avinashpotnuru"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub color="white" size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/share/18qeB3B9mq/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaFacebook color="white" size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/avi__potnuru"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram color="white" size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=918919016096"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-green-500 text-3xl"
            >
              <FaWhatsapp size={24} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
