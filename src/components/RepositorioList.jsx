import React, { useState, useEffect } from 'react';
import ReadmeViewer from './ReadmeViewer';
import './styles.css';

const RepositorioList = () => {
  const [repos, setRepos] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${process.env.REACT_APP_GITHUB_USER}/repos`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        });
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="App">
      <div className="sidebar">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          className="github-logo"
        />
        <h2>Mis Repositorios</h2>


        {loading ? (
          <p>Cargando repositorios...</p>
        ) : (
          <ul>
            {repos.length > 0 ? (
              repos.map(repo => (
                <li key={repo.id} onClick={() => setSelectedRepo(repo)}>
                  <span className="icon">📁</span>
                  {repo.name}
                  <button className="button">Ver</button>
                </li>
              ))
            ) : (
              <p>No se encontraron repositorios.</p>
            )}
          </ul>
        )}
      </div>

      <div className="main-content">
        {selectedRepo ? (
          <ReadmeViewer repo={selectedRepo} />
        ) : (
          <h3>Selecciona un repositorio para ver el README.md</h3>
        )}
      </div>
    </div>
  );
};

export default RepositorioList;
