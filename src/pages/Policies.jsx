import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Policies() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Editeur du site",
      content: (
        <div className="accordion-content">
          <div className="contact-item">
            <strong>John Doe</strong>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>40 rue Laure Diebold</span>
          </div>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>69009 Lyon, France</span>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>10 20 30 40 50</span>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <span>john.doe@gmail.com</span>
          </div>
        </div>
      ),
    },
    {
      title: "Hébergeur",
      content: (
        <div className="accordion-content">
          <div className="contact-item">
            <strong>alwaysdata</strong>
          </div>
          <div className="contact-item">
            <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
          </div>
          <div className="contact-item">
            <span className="icon">🌐</span>
            <a
              href="https://www.alwaysdata.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.alwaysdata.com
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Crédits",
      content: (
        <div className="accordion-content">
          <div className="contact-item">
            <strong>Crédits</strong>
          </div>
          <div className="contact-item">
            <span>Ce site a été réalisé par John Doe, étudiant au </span>
            <a
              href="https://www.centre-europeen-formation.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Centre Européen de formation
            </a>
          </div>
          <div className="contact-item">
            <span>
              Les images utilisées sur ce site sont libres de droits et ont été
              obtenues sur le site{" "}
            </span>
            <a
              href="https://www.pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
          </div>
          <div className="contact-item">
            <span>La favicon de ce site a été fournie par </span>
            <a
              href="https://www.flaticon.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              John doe Icons erstellt von Freepik - Flaticon
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="policies-page">
      <Navbar active="policies" />

      <div className="policies-main">
        <div className="policies-header">
          <h1>Mentions légales</h1>
          <div className="policies-divider"></div>
        </div>

        <div className="accordion-container">
          {accordionItems.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${
                  activeAccordion === index ? "active" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.title}</h3>
                <span className="accordion-icon">
                  {activeAccordion === index ? "▲" : "▼"}
                </span>
              </div>
              {activeAccordion === index && (
                <div className="accordion-body">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Policies;
