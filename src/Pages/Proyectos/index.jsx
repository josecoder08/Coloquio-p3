import React from 'react';
import './styles.css'; // Importa estilos específicos

const projects = [
  {
    title: 'Proyecto Realizado para Materia Programación 3',
    description: 'Aplicación realizada para la facultad la cual integramos backend node js, frontend react.js y base de datos mongodb, la cual nos permite ver lista de clientes poder crear borrar y modificar y que todo ellos impacte en la base de datos !!',
    link: 'https://front-programacion3.vercel.app/', // Enlace al proyecto si tienes una página específica
    image: '/images/sistemacl.webp', // Ruta de la imagen del proyecto
  },
  {
    title: 'Sistema TODO MACHINE Curso Platzi',
    description: 'Aplicación creada en el curso de REACT JS de platzi en el cual podemos agendar, borrar, marcar como realizada una tarea',
    link: 'https://josecoder08.github.io/TodoMachine/',
    image: '/images/todomachine.webp',
  },
  {
    title: 'Ecommerce Curso Platzi',
    description: 'Vite + React aplicacición realizada en el curso de Platzi en el cual pude crear un ecommerce',
    link: 'https://dancing-smakager-c75d28.netlify.app/',
    image: '/images/eco.jfif',
  },
  // Añade más proyectos según necesites
];

const Proyectos = () => {
  return (
    <div className="projects-container">
      <h1>Mis Proyectos Realizados</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              Ver Proyecto
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
