const Story = () => {
  return (
    <section className="story" id="about">
      <div className="story-images">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&h=200&fit=crop" alt="Education 1" />
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop" alt="Education 2" />
        <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=200&h=200&fit=crop" alt="Education 3" />
      </div>
      <div className="story-content">
        <p className="subtitle">EDUCATION & BACKGROUND</p>
        <h2 className="title">CONTINUOUS<br/>LEARNING AND<br/>INNOVATION</h2>
        <div className="description" style={{color: 'var(--text-secondary)'}}>
          <p style={{marginBottom: '1rem'}}>
            <strong style={{color: 'white'}}>National University – Baliwag</strong><br/>
            BS Information Technology<br/>
            Specializing in Mobile and Web App Development<br/>
            (Aug 2022 – Jul 2026)
          </p>
          <p>
            <strong style={{color: 'white'}}>Baliwag University</strong><br/>
            Senior High School – STEM Strand<br/>
            (Dec 2020 – Jul 2022)
          </p>
        </div>
        <a href="#contact" className="discover-link">GET IN TOUCH &rarr;</a>
      </div>
    </section>
  );
};

export default Story;
