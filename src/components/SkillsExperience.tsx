const SkillsExperience = () => {
  const skills = [
    {
      title: 'UI/UX & Graphic Design',
      desc: 'Figma, Adobe Photoshop, Clip Studio Paint, Canva',
      tools: [
        ['Figma', 'figma'],
        ['Photoshop', 'adobephotoshop'],
        ['Clip Studio Paint', 'clipstudiopaint'],
        ['Canva', 'canva'],
      ],
    },
    {
      title: 'Frontend Dev',
      desc: 'HTML, CSS, JavaScript, React, Flutter, FlutterFlow, Shopify',
      tools: [
        ['HTML', 'html5'],
        ['CSS', 'css3'],
        ['JavaScript', 'javascript'],
        ['React', 'react'],
        ['Flutter', 'flutter'],
        ['FlutterFlow', 'flutterflow'],
        ['Shopify', 'shopify'],
      ],
    },
    {
      title: 'Backend Dev',
      desc: 'Node.Js, Dart, Java, PHP, MySQL, Supabase, Firebase',
      tools: [
        ['Node.js', 'nodedotjs'],
        ['Dart', 'dart'],
        ['Java', 'openjdk'],
        ['PHP', 'php'],
        ['MySQL', 'mysql'],
        ['Supabase', 'supabase'],
        ['Firebase', 'firebase'],
      ],
    },
    {
      title: 'Tools & Workflow',
      desc: 'Git, GitHub, Docker, Vercel',
      tools: [
        ['Git', 'git'],
        ['GitHub', 'github'],
        ['Docker', 'docker'],
        ['Vercel', 'vercel'],
      ],
    },
  ];

  return (
    <section className="services" id="skills">
      <div className="services-content" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
        <p className="subtitle">TECHNICAL EXPERTISE</p>
        <h2 className="title">SKILLS & TECHNOLOGIES</h2>
        <ul className="services-list">
          {skills.map((skill, idx) => (
            <li key={idx} className="service-item" data-reveal style={{ ['--reveal-delay' as string]: `${160 + idx * 80}ms` }}>
              <div className="service-heading">
                <span className="service-index">0{idx + 1}</span>
                <div>
                  <h4>{skill.title}</h4>
                  <p>{skill.desc}</p>
                </div>
              </div>
              {skill.tools.length > 0 && (
                <div className="service-tools">
                  {skill.tools.map(([name, icon]) => (
                    <span className="service-tool" key={name}>
                      <span className="service-tool-fallback" aria-hidden="true">{name.slice(0, 2).toUpperCase()}</span>
                      <img
                        src={`https://cdn.simpleicons.org/${icon}`}
                        alt=""
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                          event.currentTarget.previousElementSibling?.classList.add('is-visible');
                        }}
                      />
                      <span>{name}</span>
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="services-image" data-parallax="0.09" data-reveal style={{ ['--reveal-delay' as string]: '180ms' }}>
        <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?w=600&h=800&fit=crop" alt="Experience" />
        <div className="japanese-text">
          <h1>技術</h1>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
