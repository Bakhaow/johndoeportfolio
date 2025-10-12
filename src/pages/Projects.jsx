import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import portfolio1 from "../assets/img/portfolio/fresh-food.jpg";
import portfolio2 from "../assets/img/portfolio/restaurant-japonais.jpg";
import portfolio3 from "../assets/img/portfolio/espace-bien-etre.jpg";
import portfolio4 from "../assets/img/portfolio/seo.jpg";
import portfolio5 from "../assets/img/portfolio/coder.jpg";
import portfolio6 from "../assets/img/portfolio/screens.jpg";

function Projects() {
  const portfolioItems = [
    {
      id: 1,
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      technology: "Site réalisé avec PHP et MySQL",
      image: portfolio1,
      link: "#",
    },
    {
      id: 2,
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      technology: "Site réalisé avec WordPress",
      image: portfolio2,
      link: "#",
    },
    {
      id: 3,
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      technology: "Site réalisé avec LARAVEL",
      image: portfolio3,
      link: "#",
    },
    {
      id: 4,
      title: "SEO",
      description: "Amélioration du référencement d'un site e-commerce",
      technology: "Utilisation des outils SEO",
      image: portfolio4,
      link: "#",
    },
    {
      id: 5,
      title: "Création d'une API",
      description: "Création d'une API RESTFULL publique",
      technology: "PHP - SYMFONY",
      image: portfolio5,
      link: "#",
    },
    {
      id: 6,
      title: "Maquette d'un site web",
      description: "Création du prototype d'un site",
      technology: "Réalisé avec FIGMA",
      image: portfolio6,
      link: "#",
    },
  ];

  return (
    <div className="portfolio-page">
      <Navbar active="projects" />

      {/* Hero Section */}
      <div className="portfolio-hero">
        <div className="hero-laser-line"></div>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-main">
        <div className="portfolio-header">
          <h1>Portfolio</h1>
          <p>Voici quelques-unes de mes réalisations.</p>
          <div className="portfolio-divider"></div>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={item.image} alt="portfolio image" />
              </div>
              <div className="portfolio-content">
                <h3>{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
                <button className="portfolio-button">Voir le site</button>
              </div>
              <div className="portfolio-technology-section">
                <p className="portfolio-technology">{item.technology}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;
