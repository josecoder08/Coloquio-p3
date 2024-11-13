import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

// Mapeo de tecnologías y sus logos
const techLogos = {
  react: '/images/react.png',
  express: '/images/express.png',
  'node.js': '/images/node.png',
  mongodb: '/images/mongo.png',
  angular: '/images/angular.png',
  mysql:'/images/mysql.png',
  cors:'/images/cors.png',
 firebase:'/images/firebase.png',
 bootstrap:'/images/bootstrap.png',
};

const ReadmeViewer = ({ repo }) => {
  const [readmeContent, setReadmeContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [technologies, setTechnologies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Reiniciar los estados cuando cambia el repositorio
    const fetchReadmeAndPackageJson = async () => {
      setLoading(true);
      setError('');  // Reiniciar el mensaje de error
      setReadmeContent('');  // Limpiar el contenido del README
      setTechnologies([]);  // Limpiar las tecnologías previas

      try {
        // Fetch README
        const readmeResponse = await fetch(
          `https://api.github.com/repos/${process.env.REACT_APP_GITHUB_USER}/${repo.name}/readme`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
              Accept: 'application/vnd.github.v3.raw',
            },
          }
        );

        if (!readmeResponse.ok) {
          throw new Error(`Error ${readmeResponse.status}: No se encontró el archivo README`);
        }

        const readmeText = await readmeResponse.text();
        setReadmeContent(readmeText);

        // Fetch package.json (for dependencies)
        const packageJsonResponse = await fetch(
          `https://api.github.com/repos/${process.env.REACT_APP_GITHUB_USER}/${repo.name}/contents/package.json`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );

        if (!packageJsonResponse.ok) {
          throw new Error('Error fetching package.json');
        }

        const packageJsonData = await packageJsonResponse.json();
        const packageJsonContent = atob(packageJsonData.content);
        const parsedPackageJson = JSON.parse(packageJsonContent);

        // Extract dependencies (if any)
        const dependencies = Object.keys(parsedPackageJson.dependencies || {}).concat(
          Object.keys(parsedPackageJson.devDependencies || {})
        );
        setTechnologies(dependencies);

      } catch (error) {
        setError('No se encuentra disponible el README de este Repositorio');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (repo) {
      fetchReadmeAndPackageJson();
    }
  }, [repo]);  // El hook depende de `repo`, se reinicia al cambiar

  return (
    <div className="readme-viewer">
      {loading ? (
        <p>Cargando README y tecnologías...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div>
            <h3>Tecnologías utilizadas:</h3>
            <ul>
              {technologies.length > 0 ? (
                technologies.map((tech, index) => (
                  <li key={index}>
                    {techLogos[tech.toLowerCase()] ? (
                      <img
                        src={techLogos[tech.toLowerCase()]}
                        alt={`${tech} logo`}
                        className="tech-logo"
                        style={{ width: '24px', height: '24px', marginRight: '8px' }}
                      />
                    ) : null}
                    {tech}
                  </li>
                ))
              ) : (
                <li>No se encontraron tecnologías.</li>
              )}
            </ul>
          </div>
          <div>
            <h3>README:</h3>
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
          </div>
        </>
      )}
    </div>
  );
};

export default ReadmeViewer;
