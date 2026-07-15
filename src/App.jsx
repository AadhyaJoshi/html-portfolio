import { useEffect, useMemo, useState } from 'react';
import './App.css';

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aadhya-joshi-66a7b4285/',
    src: asset('assets/linkedin.png'),
    alt: 'My LinkedIn profile',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AadhyaJoshi',
    src: asset('assets/github.png'),
    alt: 'My GitHub profile',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/aadhyajoshi/',
    src: asset('assets/leetcode.png'),
    alt: 'My LeetCode profile',
  },
];

const experienceCards = [
  {
    title: 'Experience',
    icon: asset('assets/experience.png'),
    description:
      'Technology Program Intern @ Wells Fargo International Solutions Pvt Ltd, Hyderabad, Telangana | Jan - June 2026',
  },
  {
    title: 'Experience',
    icon: asset('assets/experience.png'),
    description:
      'Intern Analyst @ Wells Fargo International Solutions Pvt Ltd, Bengaluru, Karnataka | May - July 2025',
  },
  {
    title: 'Experience',
    icon: asset('assets/experience.png'),
    description:
      'Software Developer Intern @ ConfidoSoft Solutions Pvt Ltd, Vadodara, Gujarat | May - June 2024',
  },
  {
    title: 'Education',
    icon: asset('assets/education.png'),
    description:
      'B.Tech CSE at Malaviya National Institute of Technology, Jaipur, Rajasthan | Nov 2022 – May 2026',
  },
];

const skills = [
  'C++',
  'Python',
  'Java',
  'JavaScript',
  'SQL',
  'HTML/CSS',
  'Django',
  'ReactJS',
  'ExpressJS',
  'Spring Boot',
  'MongoDB',
  'MySQL',
  'GitHub',
  'VS Code',
  'CI/CD',
  'Harness',
  'OpenShift (OCP)',
  'Kafka',
  'Splunk',
  'Overleaf (LaTeX)',
];

const coursework = [
  { label: 'Data Structures & Algorithms' },
  { label: 'Database Management Systems' },
  { label: 'Object-Oriented Programming' },
  { label: 'AI & ML' },
  { label: 'NLP' },
  { label: 'Computer Networks & Security' },
  { label: 'Operating System' },
  { label: 'Blockchain Technologies' },
];

const projects = [
    {
    title: 'Plagiarism Checker',
    image: asset('assets/plag_check.png'),
    href: 'https://github.com/SheliJaju/PlagiarismChecker',
  },
  {
    title: 'Hostel Complaint Management System',
    image: asset('assets/hcms.png'),
    href: 'https://github.com/MauuJo/Hostel-Complaint-Management-System',
  },
  {
    title: 'BankNote Authentication EDA Project',
    image: asset('assets/bank.png'),
    href: 'https://github.com/AadhyaJoshi/banknote_auth_EDA',
  },
  {
    title: 'Game Development',
    image: asset('assets/game_dev.png'),
    href: 'https://github.com/AadhyaJoshi/Game_Dev',
  },
  {
    title: 'Chatbot using Chatterbot',
    image: asset('assets/chatbot.png'),
    href: 'https://github.com/AadhyaJoshi/Chatbot',
  },
];

const typedStrings = ['B.Tech CSE Graduate', 'Software Engineer'];

function App() {
  const [typedIndex, setTypedIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const currentText = useMemo(
    () => typedStrings[typedIndex % typedStrings.length],
    [typedIndex]
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setCharIndex(charIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else if (charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(false);
        setTypedIndex((typedIndex + 1) % typedStrings.length);
      }
    }, isDeleting ? 50 : 100);

    return () => window.clearTimeout(timeout);
  }, [charIndex, currentText, isDeleting, typedIndex]);

  const typedText = currentText.slice(0, charIndex);

  const toggleMenu = () => setMenuOpen((current) => !current);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      {/* <nav id="desktop-nav">
        <div className="logo">Welcome to My World!</div>
        <div>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Welcome to My World!</div>
        <div className="hamburger-menu">
          <button
            type="button"
            className={`hamburger-icon ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </div>
        </div>
      </nav> */}

      <section id="profile">
        <div className="profile-intro">
          <div className="section__text__p1">Hi! I am</div>
          <h2 className="title">Aadhya Joshi</h2>
          <p className="section__text__p2 intro-typed">
            🌟<span className="element">{typedText}</span>
          </p>
        </div>
        <div className="section__text__3">
          <div className="section__pic-container">
            <img
              src={asset('assets/portfolio-pic-1.jpg')}
              alt="Aadhya Joshi profile picture"
              className="profile-pic"
            />
          </div>
          <div className="profile-card-wrapper">
            <p className="section__text__p2 profile-paragraph">
               I am a 🎓 B.Tech CSE graduate from Malaviya National Institute of Technology (MNIT), Jaipur, currently working at Wells Fargo as a Technology Program Analyst. <br />
              💡I love AI and the endless possibilities it unlocks for real-world impact — from intelligent automation to data-driven systems. I have a strong foundation in programming, data structures, and algorithms, and I thrive on building innovative solutions that truly matter. I'm always excited to learn new technologies, level up my skills, and take on ambitious challenges. <br />
              Outside of work, I'm a sports person at heart — a national-level 🏀 basketball player who also loves trekking, travelling, and going for runs!
            </p>
          </div>
        </div>
        
        <div className="section__text">
          <div className="btn-container">
            <a
              className="btn btn-color-2"
              href={asset('assets/Aadhya_Joshi_Resume.pdf')}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div id="socials-container">
            {socials.map((item) => (
              <span className="tooltip" key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <img src={item.src} alt={item.alt} className="icon" />
                </a>
                <span className="tooltiptext">{item.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div>
          <p className="section__text__p1">Get To Know More</p>
          <h1 className="title">About Me</h1>
          <div className="section-container">
            <div className="about-details-container">
              <div className="about-containers">
                {experienceCards.map((card) => (
                  <div className="details-container" key={card.title + card.description}>
                    <img src={card.icon} alt={`${card.title} icon`} className="icon" />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Technical Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Tools & technologies</h2>
              <div className="article-container">
                {skills.map((skill) => (
                  <article key={skill}>
                    <img src={asset('assets/checkmark.png')} alt="Checkmark icon" className="icon" />
                    <div>
                      <h3>{skill}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Relevant Coursework</h2>
              <div className="article-container">
                {coursework.map((course) => (
                  <article key={course.label}>
                    <img src={asset('assets/checkmark.png')} alt="Checkmark icon" className="icon" />
                    <div>
                      <h3>
                        <a href={course.href} target="_blank" rel="noreferrer">
                          {course.label}
                        </a>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            {projects.map((project) => (
              <div className="details-container color-container" key={project.title}>
                <div className="article-container">
                  <img src={project.image} alt={project.title} className="project-img" />
                </div>
                <h2 className="experience-sub-title project-title">{project.title}</h2>
                <div className="btn-container">
                  <a
                    className="btn btn-color-2 project-btn"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={asset('assets/email.png')} alt="Email icon" className="icon contact-icon email-icon" />
            <p>
              <a href="mailto:aadhyajoshi1510@gmail.com">aadhyajoshi1510@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
                <img src={asset('assets/linkedin.png')} alt="LinkedIn icon" className="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/aadhya-joshi-66a7b4285/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-text">Made with 💗 by Aadhya Joshi.</div>
      </footer>
    </div>
  );
}

export default App;
