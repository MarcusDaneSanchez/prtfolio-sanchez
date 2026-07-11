import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';

const ProjectDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = project?.images[currentImageIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3 seconds auto next
    
    return () => clearInterval(interval);
  }, [project]);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;

    const nextImageIndex = (currentImageIndex + 1) % project.images.length;
    const nextImage = new Image();
    nextImage.src = project.images[nextImageIndex];
  }, [currentImageIndex, project]);

  const nextImage = () => {
    if (!project) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    if (!project) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  if (!project) {
    return (
      <div style={{ paddingTop: '8rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 className="title">Project Not Found</h2>
        <p style={{marginTop: '2rem'}}><Link to="/projects" className="read-more-btn" style={{display: 'inline-block'}}>Back to Projects</Link></p>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '6rem', minHeight: '80vh', backgroundColor: 'var(--bg-color)' }}>
      {/* Detail Hero Section */}
      <section className="hero" style={{paddingTop: '2rem', paddingBottom: '4rem'}}>
        <div className="hero-content">
          <button onClick={() => navigate(-1)} style={{marginBottom: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>&larr; Go Back</button>
          <p className="subtitle">{project.category}</p>
          <h1 className="title" style={{fontSize: '3rem', marginBottom: '1rem'}}>{project.name}</h1>
          <p style={{color: 'var(--text-primary)', fontWeight: '500', marginBottom: '2rem'}}>Role: {project.role}</p>
          <p className="description" style={{maxWidth: '600px', fontSize: '1.1rem', color: '#ccc'}}>
            {project.fullDescription}
          </p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="read-more-btn" style={{display: 'inline-block', marginTop: '1rem'}}>VISIT PROJECT</a>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="story" style={{flexDirection: 'column', alignItems: 'flex-start', paddingBottom: '6rem'}}>
        <h2 className="title" style={{marginBottom: '2rem', fontSize: '2rem'}}>GALLERY</h2>
        <div style={{position: 'relative', width: '100%', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'var(--bg-lighter)'}}>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '65vh', maxHeight: '700px', overflow: 'hidden' }}>
            {currentImage && (
              <>
                <div style={{
                  position: 'absolute', top: '-10%', left: '-10%', right: '-10%', bottom: '-10%',
                  backgroundImage: `url("${currentImage}")`, backgroundSize: 'cover', backgroundPosition: 'center',
                  filter: 'blur(20px) brightness(0.4)', zIndex: 0
                }} />
                <img
                  src={currentImage}
                  alt={`${project.name} preview ${currentImageIndex + 1}`}
                  loading="eager"
                  decoding="async"
                  style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', zIndex: 1, boxShadow: '0 10px 30px rgba(0,0,0,0.5)'}}
                />
              </>
            )}
          </div>
          
          {project.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                style={{
                  position: 'absolute', top: '50%', left: '1rem', transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', 
                  borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', zIndex: 10
                }}
              >
                &#10094;
              </button>
              <button 
                onClick={nextImage}
                style={{
                  position: 'absolute', top: '50%', right: '1rem', transform: 'translateY(-50%)',
                  background: 'rgba(0, 0, 0, 0.5)', color: 'white', border: 'none', 
                  borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', zIndex: 10
                }}
              >
                &#10095;
              </button>
              
              <div style={{
                position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '0.5rem', zIndex: 10
              }}>
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    style={{
                      width: '10px', height: '10px', borderRadius: '50%', border: 'none',
                      background: currentImageIndex === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer', padding: 0
                    }}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage;
