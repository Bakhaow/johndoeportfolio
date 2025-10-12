import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="contact-page">
      <Navbar active="contact" />

      <div className="contact-main">
        <div className="contact-header">
          <h1>Contact</h1>
          <p>
            Pour me contacter en vue d'un entretien ou d'une future
            collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="contact-divider"></div>
        </div>

        <div className="contact-container">
          <div className="contact-form-section">
            <h3>Formulaire de contact</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                placeholder="Votre nom"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Votre adresse email"
                className="form-input"
                required
              />
              <input
                type="tel"
                placeholder="Votre numéro de téléphone"
                className="form-input"
                required
              />
              <input
                type="text"
                placeholder="Sujet"
                className="form-input"
                required
              />
              <textarea
                placeholder="Votre message"
                className="form-textarea"
                rows="6"
                required
              ></textarea>
              <button type="submit" className="submit-button">
                Envoyer
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h3>Mes coordonnées</h3>
            <div className="contact-details">
              <p>John Doe</p>
              <p>40 rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>10 20 30 40 50</p>
              <p>john.doe@gmail.com</p>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.123456789!2d4.7890123!3d45.7890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c123456789ab%3A0x123456789abcdef0!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
