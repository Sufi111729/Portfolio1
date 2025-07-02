export const personalInfo = {
  name: "Muhammad Sufiyan",
  title: "Full Stack Java Developer",
  email: "muhammadsufiyandev01@gmail.com",
  phone: "+91-8574774647",
  location: "Bangalore, India",
  linkedin: "https://linkedin.com/in/sufiyan2k1",
  github: "https://github.com/Sufi111729",
  portfolio: "https://sufiweb.netlify.app",
  
  objective: "Motivated Computer Science graduate with practical experience in full stack Java development including REST APIs, Spring Boot, and MySQL. Seeking to apply technical skills and passion for innovation in a Graduate Engineer Trainee role in telecom or network infrastructure projects.",
  
  availability: "Available for immediate joining and relocation",
  
  skills: {
    languages: [
      { name: "Java", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5/CSS3", level: 85 },
      { name: "SQL", level: 80 }
    ],
    frameworks: ["Spring Boot", "React", "Hibernate", "TypeScript"],
    databases: ["MySQL", "JPA/Hibernate ORM"],
    tools: ["Git/GitHub", "Maven", "Postman", "VS Code", "Eclipse"],
    networking: "Fundamentals of 2G, 3G, 4G and network deployment",
    softSkills: ["Communication", "Teamwork", "Problem-solving", "Adaptability"]
  },
  
  workExperience: [
    {
      title: "Employee Management System",
      company: "Personal Project",
      period: "Dec 2022 – Jan 2023",
      type: "Full Stack Development",
      description: "Led the complete development lifecycle of a comprehensive Employee Management System, from database design to frontend implementation.",
      responsibilities: [
        "Developed a full-stack Employee Management System enabling Create, Read, Update, and Delete (CRUD) operations using Java, Spring Boot, and MySQL",
        "Built a robust RESTful API backend for managing employee data with clearly structured endpoints and integrated error handling",
        "Connected the frontend (React + TypeScript) with the backend using Axios to enable seamless client-server communication",
        "Designed the database schema using MySQL and used JPA/Hibernate for efficient ORM mapping",
        "Integrated Maven for project management and Postman for endpoint testing to ensure API functionality",
        "Emphasized clean code practices, modular design, and scalability for future enhancements"
      ],
      technologies: ["Spring Boot", "React", "TypeScript", "MySQL", "Maven", "JPA/Hibernate", "REST APIs"],
      achievements: [
        "Successfully deployed application with 100% API endpoint functionality",
        "Implemented responsive design ensuring cross-device compatibility",
        "Created comprehensive documentation for API endpoints"
      ]
    }
  ],

  projects: [
    {
      name: "Employee Management System",
      type: "Full Stack",
      description: "A comprehensive CRUD application built with Spring Boot backend and React frontend, featuring RESTful APIs, MySQL database integration, and modern UI design principles.",
      technologies: ["Spring Boot", "React", "TypeScript", "MySQL", "Maven"],
      features: [
        "Full CRUD operations with RESTful API design",
        "Responsive React frontend with TypeScript",
        "JPA/Hibernate ORM for database management",
        "Comprehensive error handling and validation"
      ],
      liveDemo: "https://emsdb.netlify.app",
      backendCode: "https://github.com/Sufi111729/Ems-back-end",
      frontendCode: "https://github.com/Sufi111729/Ems-front-end",
      period: "Dec 2022 – Jan 2023"
    },
    {
      name: "Portfolio Website",
      type: "Frontend",
      description: "A responsive personal portfolio website showcasing projects and professional background, featuring GitHub API integration and modern design principles.",
      technologies: ["HTML5", "CSS3", "JavaScript", "GitHub API", "Netlify"],
      features: [
        "Fully responsive design with cross-device compatibility",
        "Dynamic GitHub repository fetcher using REST API",
        "SEO optimized for better search visibility",
        "Continuous deployment via GitHub integration"
      ],
      liveDemo: "https://sufiweb.netlify.app",
      sourceCode: "https://github.com/Sufi111729/Portfolio",
      period: "Nov 2022 – Present"
    }
  ],
  
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Technocrats Institute of Technology, Bhopal",
      period: "2021 - 2024",
      description: "Comprehensive computer science education covering algorithms, data structures, software engineering, and modern development practices."
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "MSMT, Delhi",
      period: "2018 - 2021",
      description: "Foundation in computer engineering principles, programming fundamentals, and technical problem-solving skills."
    }
  ],
  
  certifications: [
    {
      name: "Full Stack Java Developer",
      issuer: "JSpiders, Bangalore",
      year: "2025",
      description: "Intensive full-stack development certification covering enterprise-level Java technologies and modern web development practices.",
      technologies: ["Core Java", "JDBC", "JSP", "Servlets", "Hibernate", "Spring Boot", "Git", "MySQL", "Postman"]
    }
  ],
  
  languages: [
    { name: "Hindi", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Basic Reading" }
  ]
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: personalInfo.linkedin,
    icon: "fab fa-linkedin",
    color: "text-blue-600"
  },
  {
    name: "GitHub",
    url: personalInfo.github,
    icon: "fab fa-github",
    color: "text-gray-800"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "fas fa-envelope",
    color: "text-red-600"
  },
  {
    name: "Phone",
    url: `tel:${personalInfo.phone}`,
    icon: "fas fa-phone",
    color: "text-green-600"
  }
];
