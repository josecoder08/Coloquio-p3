
import React from 'react';
import Layout from '../../components/Layout';
import './styles.css';

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <div className="profile-section">
          <img
            src="/images/jose.png"  // Ruta de tu foto de perfil
            alt="Foto de Perfil"
            className="profile-image"
          />
          <h1>Bienvenido a mi Portafolio de GitHub</h1>
        </div>

        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          className="github-image"
        />
        <p>
          Me llamo José Vaudagna, soy estudiante de la carrera de Analista de Sistemas, con experiencia en desarrollo web y backend.
          Me apasiona el desarrollo de soluciones tecnológicas y tengo conocimientos en:
        </p>
        <ul>
          <li>
            <strong>Frontend:</strong> React, Angular, HTML, CSS   
            <img src="/images/react.png" alt="React" className="tech-logo" />
            <img src="/images/angular.png" alt="Angular" className="tech-logo" />
            <img src="/images/html.png" alt="HTML" className="tech-logo" />
            <img src="/images/css.jfif" alt="CSS" className="tech-logo" />
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express
            <img src="/images/node.png" alt="Node.js" className="tech-logo" />
            <img src="/images/express.png" alt="express" className="tech-logo" />
          </li>
          <li>
            <strong>Bases de datos:</strong> SQL Server, MongoDB
            <img src="/images/sql.png" alt="SQL Server" className="tech-logo" />
            <img src="/images/mongo.png" alt="mongo db" className="tech-logo" />
          </li>
        </ul>
        <p>
          Acá puedes encontrar algunos de los proyectos que he realizado, en los cuales he aplicado estas tecnologías
          para resolver distintos tipos de problemas y crear aplicaciones funcionales.
        </p>

        {/* Enlace de LinkedIn */}
        <div className="contact-section">
          <a 
            href="https://www.linkedin.com/in/jos%C3%A9-vaudagna/" // Cambia esto por tu enlace de LinkedIn
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img 
              src="/images/linkedin.png" // Asegúrate de tener el icono de LinkedIn en esta ruta
              alt="LinkedIn"
              className="linkedin-icon"
            />
            Contáctame
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
