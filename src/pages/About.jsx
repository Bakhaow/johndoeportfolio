import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const services = [
    {
      id: 1,
      title: "UX Design",
      icon: "✏️",
      description:
        "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.",
    },
    {
      id: 2,
      title: "Développement web",
      icon: "</>",
      description:
        "Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).",
    },
    {
      id: 3,
      title: "Référencement",
      icon: "🔍",
      description:
        "Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.",
    },
  ];

  return (
    <div className="services-page">
      <Navbar active="about" />

      {/* Hero Section */}
      <div className="services-hero">
        <div className="hero-laser-line"></div>
      </div>

      {/* Services Section */}
      <div className="services-main">
        <div className="services-header">
          <h1>Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir</p>
          <div className="services-divider"></div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
