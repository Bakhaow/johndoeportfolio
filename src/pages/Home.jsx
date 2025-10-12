import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import johnDoeAbout from "../assets/img/john-doe-about.jpg";

function Home() {
  return (
    <div className="home">
      <Navbar active="home" />

      {/* Section Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button className="cta-button">En savoir plus</button>
        </div>
      </section>

      {/* Section À propos et Compétences */}
      <section className="about-section">
        <div className="main-card">
          <div className="about-content">
            <h3>A propos</h3>
            <div className="about-image">
              <img src={johnDoeAbout} alt="John Doe" />
            </div>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          {/* Section Compétences */}
          <div className="skills-content">
            <h3>Mes compétences</h3>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">HTML5</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress html"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">CSS3</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress css"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <span className="skill-percentage">80%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">JAVASCRIPT</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress js"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="skill-percentage">70%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">PHP</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress php"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <span className="skill-percentage">60%</span>
              </div>

              <div className="skill-item">
                <span className="skill-name">REACT</span>
                <div className="skill-bar">
                  <div
                    className="skill-progress react"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <span className="skill-percentage">50%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
