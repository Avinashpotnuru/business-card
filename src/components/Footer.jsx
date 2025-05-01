import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/Avinashpotnuru",
      label: "GitHub",
      icon: <FaGithub color="white" size={24} />,
    },
    {
      href: "https://www.facebook.com/share/18qeB3B9mq/",
      label: "Facebook",
      icon: <FaFacebook color="white" size={24} />,
    },
    {
      href: "https://www.instagram.com/avi__potnuru",
      label: "Instagram",
      icon: <FaInstagram color="white" size={24} />,
    },
    {
      href: "https://api.whatsapp.com/send/?phone=918919016096",
      label: "WhatsApp",
      icon: <FaWhatsapp color="white" size={24} />,
      className: "text-green-500 text-3xl",
    },
  ];

  return (
    <>
      <footer className="section_footer">
        <ul className="footer_social flex gap-4">
          {socialLinks.map(({ href, label, icon, className }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={className}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
