import React from 'react';

const SkillsExperience = () => {
  const skills = [
    { title: 'UI/UX & Graphic Design', desc: 'Figma, Adobe Photoshop, Clip Studio Paint' },
    { title: 'Frontend Dev', desc: 'HTML, CSS, JavaScript, React, Flutter' },
    { title: 'Backend Dev', desc: 'Java, PHP, MySQL, Supabase, Firebase' },
    { title: 'Experience', desc: 'UI/UX Intern at FYB Technologies Inc. (800 hours)' }
  ];

  return (
    <section className="services" id="experience">
      <div className="services-content">
        <p className="subtitle">TECHNICAL EXPERTISE</p>
        <h2 className="title">SKILLS & EXPERIENCE</h2>
        <ul className="services-list">
          {skills.map((skill, idx) => (
            <li key={idx} className="service-item">
              <div>
                <h4>{skill.title}</h4>
                <p>{skill.desc}</p>
              </div>
              <span className="service-icon">&#9632;</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="services-image">
        <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?w=600&h=800&fit=crop" alt="Experience" />
        <div className="japanese-text">
          <h1>技</h1>
          <h1>術</h1>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
