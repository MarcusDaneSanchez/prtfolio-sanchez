import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '6rem', minHeight: '80vh', backgroundColor: 'var(--bg-color)' }}>
      <section className="bestsellers" style={{paddingTop: '2rem'}}>
        <div className="bestsellers-header">
          <h2 className="title">ALL PROJECTS</h2>
        </div>
        <div className="product-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="product-card">
              <Link to={`/projects/${project.id}`} style={{display: 'block'}}>
                <div className="product-image-container" style={{position: 'relative'}}>
                  {project.name !== 'Digital Art & Design' && (
                    <div style={{
                      position: 'absolute', top: '10px', left: '10px', 
                      background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)',
                      padding: '4px 8px', borderRadius: '4px', zIndex: 2,
                      display: 'flex', alignItems: 'center', gap: '6px'
                    }}>
                      <span style={{
                        display: 'inline-block', width: '6px', height: '6px', 
                        borderRadius: '50%', backgroundColor: project.link ? '#4caf50' : '#ff9800'
                      }}></span>
                      <span style={{color: 'white', fontSize: '0.65rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px'}}>
                        {project.link ? 'Deployed' : 'Not Deployed'}
                      </span>
                    </div>
                  )}
                  <img src={project.image} alt={project.name} />
                  <button className="add-to-cart-btn">&rarr;</button>
                </div>
              </Link>
              <div className="product-info" style={{display: 'block'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem'}}>
                  <span className="product-category">{project.category}</span>
                  <span className="product-price" style={{fontSize: '0.85rem', fontWeight: 400}}>{project.role}</span>
                </div>
                <Link to={`/projects/${project.id}`}><h3 className="product-name" style={{marginBottom: '0.5rem', textDecoration: 'underline transparent', transition: '0.3s'}} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'underline transparent'}>{project.name}</h3></Link>
                <p style={{fontSize: '0.8rem', color: 'var(--text-secondary)'}}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
