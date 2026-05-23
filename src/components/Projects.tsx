import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
  // Grab top 3 featured projects
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="bestsellers" id="projects">
      <div className="bestsellers-header">
        <h2 className="title">FEATURED PROJECTS</h2>
        <Link to="/projects" className="view-collection">VIEW ALL PROJECTS &rarr;</Link>
      </div>
      <div className="product-grid">
        {featuredProjects.map((project) => (
          <div key={project.id} className="product-card">
            <Link to={`/projects/${project.id}`} style={{display: 'block'}}>
              <div className="product-image-container">
                <img src={project.image} alt={project.name} />
                <button className="add-to-cart-btn">&rarr;</button>
              </div>
            </Link>
            <div className="product-info">
              <div>
                <span className="product-category">{project.category}</span>
                <Link to={`/projects/${project.id}`}><h3 className="product-name" style={{textDecoration: 'underline transparent', transition: '0.3s'}} onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'underline transparent'}>{project.name}</h3></Link>
              </div>
              <span className="product-price" style={{fontSize: '0.9rem', fontWeight: 400}}>{project.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
