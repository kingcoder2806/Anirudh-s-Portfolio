import { useEffect, useState } from "react";

const experiences = [
  {
    src: "/Shopbop_Logo.jpg",
    alt: "Shopbop logo",
    name: "Shopbop",
    fit: "contain",
    detail: {
      company: "Shopbop",
      position: "Software Engineering Intern",
      skills: ["React", "Python", "AWS Lambda", "DynamoDB", "API Gateway"],
      duration: "Jan 2026 - May 2026",
      bullets: [
        "Built a real-time multiplayer fashion game with Amazon Shopbop integrating live catalog data, bracket-style elimination rounds, and audience voting mechanics using React, Python, and AWS (Lambda, DynamoDB, API Gateway).",
        "Architected a serverless backend on AWS to support low-latency, concurrent gameplay across 4-8 simultaneous players.",
        "Successfully demoed to 100+ users, validating core game mechanics and gathering live playtesting feedback.",
      ],
    },
  },
  {
    src: "/FICO-logo.jpg",
    alt: "FICO logo",
    name: "FICO",
    fit: "contain",
    detail: {
      company: "FICO",
      position: "Software & Gen AI Engineering Intern / Software Engineering Intern",
      skills: [
        "React",
        "FastAPI",
        "AWS",
        "Spring Boot",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "gRPC",
        "Apache Pulsar",
      ],
      duration: "May 2024 - Dec 2025",
      bullets: [
        "Built InsightMeet AI Studio to convert meeting transcripts into structured Jira tickets with 94% accuracy and 96% lower ticket creation time.",
        "Developed a full-stack solution with React frontend, FastAPI backend, and AWS deployment plus evaluation metrics for reliability and latency.",
        "Created an AI-driven PDF policy ingestion pipeline that generated deployable FICO Decision Modeler assets across 100+ documents.",
        "Implemented JWT-secured gRPC authentication and Pulsar metadata persistence, reaching 97% test coverage across Apache Pulsar services.",
        "Engineered Spring Boot and MongoDB APIs, improving average response latency by about 30%.",
        "Containerized and deployed 4+ microservices via Docker and Kubernetes, cutting release cycle time by 40%.",
      ],
    },
  },
  {
    src: "/GXS-Logo.png",
    alt: "GXS logo",
    name: "GXS",
    fit: "cover",
    detail: {
      company: "GXS Digital Bank",
      position: "Data Analytics Intern",
      skills: ["Python", "Snowflake", "Excel", "Data Validation", "Credit Risk Analytics"],
      duration: "May 2023 - Aug 2023",
      bullets: [
        "Developed an automated Python validation pipeline for credit risk datasets, improving data quality by 20%.",
        "Reduced manual review time by 35%, directly accelerating monthly reporting cycles.",
        "Processed and analyzed 1M+ records on Snowflake to support scalable data operations.",
        "Used advanced Excel pivot tables and macros for risk reporting workflows.",
      ],
    },
  },
  {
    src: "/UWHealth-Logo.png",
    alt: "UW Health logo",
    name: "UW Health",
    fit: "cover",
    detail: {
      company: "UW Health",
      position: "Information Technology Student Technician",
      skills: [
        "Desktop Support",
        "Network Connectivity",
        "Hardware Maintenance",
        "Software Installation",
        "Server Maintenance",
        "Troubleshooting",
      ],
      duration: "Nov 2022 - May 2023",
      bullets: [
        "Maintained hardware performance, network connectivity, and software updates for an office with 20+ workers.",
        "Set up equipment for employee use, ensuring proper installation of cables, operating systems, and required software.",
        "Provided end-user desktop support and handled maintenance of servers and other networked devices.",
        "Assessed and troubleshot computer issues reported by faculty and staff.",
      ],
    },
  },
];

const strengths = [
  {
    title: "Shopbop Showdown",
    text: "Real-time multiplayer fashion game with live catalog integration, bracket elimination, and audience voting.",
    href: "https://github.com/Buman-Erdem/ShopBop-Showdown",
  },
  {
    title: "Flight Tracker",
    text: "Built tracking workflows for monitoring and visualizing flight movement and status updates.",
  },
  {
    title: "BadgerChat",
    text: "Multi-interface chat platform integrating web, mobile, and AI-powered conversation features.",
    href: "https://github.com/CS571-S25/hw9-kingcoder2806",
  },
  {
    title: "RISC Processor",
    text: "Designed and implemented a processor project with focus on system-level architecture and execution logic.",
    href: "https://github.com/kingcoder2806/RISC-Processor",
  },
  {
    title: "Shopping Cart App",
    text: "Built end-to-end cart and checkout workflows with state management and responsive UI behavior.",
    href: "https://github.com/kingcoder2806/Shopping_Cart",
  },
  {
    title: "Link Saver",
    text: "Created a productivity utility for organizing, storing, and quickly retrieving saved web resources.",
    href: "https://github.com/kingcoder2806/Link-Saver",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "C/C++",
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "Verilog",
      "x86 Assembly",
      "MATLAB",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React",
      "FastAPI",
      "Spring Boot",
      "Node.js",
      "Pandas",
      "Matplotlib",
      "Splunk",
      "Apache Pulsar",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (S3, EC2)", "Docker", "Kubernetes", "Jenkins", "Git", "Snowflake"],
  },
  {
    title: "AI/ML",
    items: [
      "LLM Prompt Engineering",
      "RAG",
      "GPT-4o API Integration",
      "Evaluation Frameworks",
    ],
  },
];

const educationEntries = [
  {
    name: "University of Wisconsin-Madison",
    period: "Aug 2022 - May 2026",
    location: "Madison, WI",
    degree: "B.S. Computer Engineering",
    secondMajor: "Second Major in Computer Science",
    gpa: "3.80/4.00",
    honors: "Dean's Honours List (6/6 Semesters)",
    coursework: [
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Intro to Computer Systems (C)",
      "Microprocessor Systems",
      "Linear Algebra",
      "User Interfaces",
    ],
  },
];

const socialLinks = [
  {
    id: "GH",
    label: "GitHub",
    href: "https://github.com/anirudhkompella",
  },
  {
    id: "IN",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/anirudh-kompell-479496193",
  },
  {
    id: "IG",
    label: "Instagram",
    href: "https://www.instagram.com/anirudhkompella/",
  },
];

function App() {
  const [activeExperience, setActiveExperience] = useState(null);
  const [activeEducation, setActiveEducation] = useState(null);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activeExperience && !activeEducation) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveExperience(null);
        setActiveEducation(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeExperience, activeEducation]);

  const year = new Date().getFullYear();

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow bg-glow-top" aria-hidden="true" />
      <div className="bg-glow bg-glow-bottom" aria-hidden="true" />

      <aside className="social-rail reveal" aria-label="Social links">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={item.label}
            title={item.label}
          >
            <span>{item.id}</span>
          </a>
        ))}
      </aside>

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Anirudh Kompella">
            <span>AK</span>
          </a>
          <nav className="main-nav" aria-label="Primary">
            <a href="#about">Introduction</a>
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </nav>
          <a
            className="btn btn-small"
            href="/Anirudh_Kompella_Resume_Feb26.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </header>

      <main id="home">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Student | AI & Software Engineer</p>
              <h1>Anirudh Kompella</h1>
              <p className="lead">
                Building AI and Gen-AI products that move from prototype to
                production with measurable business impact.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#experience">
                  View Experience
                </a>
                <a
                  className="btn btn-ghost"
                  href="/Anirudh_Kompella_Resume_Feb26.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </div>
            </div>

            <aside className="summary-card reveal">
              <h2>Focus Areas</h2>
              <ul>
                <li>Builds LLM-powered and RAG-based production applications</li>
                <li>Designs reliable evaluation and guardrail workflows for Gen-AI</li>
                <li>Ships full-stack AI features with product and data teams</li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container reveal">
            <p className="section-label">Introduction</p>
            <h2>Engineering AI systems with ownership</h2>
            <p>
              I build AI and Generative AI systems end-to-end, from prompt and
              pipeline design to deployment, evaluation, and iteration in
              production. My focus is on delivering reliable, scalable
              experiences where LLM capabilities translate into real user and
              business outcomes.
            </p>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container reveal">
            <p className="section-label">Education</p>
            <h2>Academic Background</h2>
            <div className="education-grid">
              {educationEntries.map((entry) => (
                <button
                  type="button"
                  key={entry.name}
                  className="education-card"
                  onClick={() => setActiveEducation(entry)}
                >
                  <div className="education-seal">
                    <img
                      src="/uw-madison-logo.png"
                      alt="UW-Madison logo"
                      className="education-seal-img"
                      loading="lazy"
                    />
                  </div>
                  <div className="education-content">
                    <p className="education-period">{entry.period}</p>
                    <h3>{entry.name}</h3>
                    <p className="education-location">{entry.location}</p>
                    <p className="education-line">{entry.degree}</p>
                    <p className="education-line">{entry.secondMajor}</p>
                    <p className="education-meta">
                      GPA: {entry.gpa} | {entry.honors}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <p className="section-label reveal">Experience</p>
            <h2 className="reveal">Organizations I have worked with</h2>
            <div className="logo-grid">
              {experiences.map((experience) => (
                <button
                  type="button"
                  className="logo-card logo-card-button reveal"
                  key={experience.name}
                  onClick={() => setActiveExperience(experience)}
                >
                  <img
                    src={experience.src}
                    alt={experience.alt}
                    loading="lazy"
                    className={experience.fit === "contain" ? "logo-fit-contain" : ""}
                  />
                  <h3>{experience.name}</h3>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container reveal">
            <p className="section-label">Skills</p>
            <h2>Skills & Expertise</h2>
            <p className="skills-subtitle">
              A comprehensive technical toolkit for building scalable,
              production-ready software systems.
            </p>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skills-card reveal" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skills-tags">
                    {group.items.map((skill) => (
                      <span className="skill-pill" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="section-label reveal">Projects</p>
            <h2 className="reveal">Selected engineering strengths</h2>
            <div className="project-grid">
              {strengths.map((item) => (
                <a
                  className="project-card reveal"
                  key={item.title}
                  href={item.href || "#"}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noopener noreferrer" : undefined}
                  aria-label={
                    item.href ? `${item.title} GitHub repository` : item.title
                  }
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-block reveal">
            <p className="section-label">Contact</p>
            <h2>Let's connect.</h2>
            <p>
              Reach out for software engineering opportunities and collaborations.
            </p>
            <a className="btn" href="mailto:anikomps28@gmail.com">
              Email Me
            </a>
          </div>
        </section>
      </main>

      {activeExperience && (
        <div
          className="job-modal-backdrop"
          role="presentation"
          onClick={() => setActiveExperience(null)}
        >
          <div
            className="job-modal reveal visible"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeExperience.detail.company} experience details`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="job-modal-header">
              <img
                src={activeExperience.src}
                alt={activeExperience.alt}
                className={`job-modal-logo${activeExperience.fit === "contain" ? " logo-fit-contain" : ""}`}
              />
              <div className="job-modal-meta">
                <p>
                  <strong>Company:</strong> {activeExperience.detail.company}
                </p>
                <p>
                  <strong>Position:</strong> {activeExperience.detail.position}
                </p>
                <p>
                  <strong>Skills:</strong> {activeExperience.detail.skills.join(" | ")}
                </p>
                <p>
                  <strong>Duration:</strong> {activeExperience.detail.duration}
                </p>
              </div>
            </div>

            <ul className="job-modal-points">
              {activeExperience.detail.bullets.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <button
              type="button"
              className="btn job-modal-close"
              onClick={() => setActiveExperience(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {activeEducation && (
        <div
          className="job-modal-backdrop"
          role="presentation"
          onClick={() => setActiveEducation(null)}
        >
          <div
            className="job-modal reveal visible"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeEducation.name} coursework details`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="coursework-header">
              <h3>Relevant Coursework</h3>
              <p>
                <strong>{activeEducation.name}</strong> | {activeEducation.degree} +{" "}
                {activeEducation.secondMajor}
              </p>
            </div>

            <ul className="job-modal-points">
              {activeEducation.coursework.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>

            <button
              type="button"
              className="btn job-modal-close"
              onClick={() => setActiveEducation(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {year} Anirudh Kompella. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
