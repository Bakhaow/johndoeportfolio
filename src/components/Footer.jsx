/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Empêcher le scroll du body quand la modal est ouverte
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <h3>John Doe</h3>
          <p>40 rue Laure Diebold</p>
          <p>69009 Lyon, France</p>
          <p>10 20 30 40 50</p>
          <p>john.doe@gmail.com</p>
          <div className="social-icons">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-content">
          <h3>Liens utiles</h3>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/about">Services</a>
            </li>
            <li>
              <a href="/projects">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Me contacter</a>
            </li>
            <li>
              <a href="/policies">Mentions légales</a>
            </li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Mes dernières réalisations</h3>
          <ul>
            <li>
              <a href="/projects">Fresh Food</a>
            </li>
            <li>
              <a href="/projects">Restaurant Akira</a>
            </li>
            <li>
              <a href="/projects">Espace bien-être</a>
            </li>
            <li>
              <a href="/projects">SEO</a>
            </li>
            <li>
              <a href="/projects">Création d'une API</a>
            </li>
            <li>
              <a href="/projects">Maquette d'un site</a>
            </li>
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="github-modal-overlay" onClick={closeModal}>
          <div
            className="github-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="github-modal-header">
              <h3>Mon profil GitHub</h3>
              <button className="github-modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="github-modal-body">
              <div className="github-profile">
                <div className="github-avatar-section">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
                    alt="GitHub Avatar"
                  />
                </div>
                <div className="github-info-section">
                  <div className="github-info-item">
                    <span className="info-icon">👤</span>
                    <a
                      href="https://github.com/johndoe"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      John Doe
                    </a>
                  </div>
                  <div className="github-info-item">
                    <span className="info-icon">📍</span>
                  </div>
                  <div className="github-info-item github-bio-item">
                    <span className="info-icon">📄</span>
                    <p>
                      As we all know, John Doe's identity is unknown. I just
                      wanted to contribute without being known.
                    </p>
                  </div>
                  <div className="github-info-item">
                    <span className="info-icon">📁</span>
                    <span>Repositories : 1</span>
                  </div>
                  <div className="github-info-item">
                    <span className="info-icon">👥</span>
                    <span>Followers : 16</span>
                  </div>
                  <div className="github-info-item">
                    <span className="info-icon">👥</span>
                    <span>Following : 0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="github-modal-footer">
              <button
                className="github-modal-close-button"
                onClick={closeModal}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
