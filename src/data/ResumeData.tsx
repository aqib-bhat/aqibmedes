const experienceInfo = [
    {
      name: 'BlackLine Systems Inc.',
      location: 'Issaquah, Washington state, USA (Remote)',
      title: 'Senior Software Engineer',
      startDate: 'April 4, 2022',
      endDate: 'October 27, 2023',
      details: [
        'I was a senior engineer in the Platform team tasked with Identity and Access Management.',
        'I was involved in the design and implementation of microservices for the integration with Okta to enable a Single Sign-On (SSO) experience for the tenant users of the SaaS applications.',
        'I also coordinated with the QA, DevOps, and SRE teams to ensure the smooth rollout of the new microservices.',
        'I was also involved in improving operations, performance, and monitoring.'
      ]
    },
    {
      name: 'Amazon',
      location: 'Seattle, Washington state, USA',
      title: 'Software Development Engineer (SDE)',
      startDate: 'May 30, 2017',
      endDate: 'April 1, 2022',
      details: [
        'I was part of the Amazon Publishing division and built various internal and external web applications and campaigns (examples: Amazon Original Stories and World Book Day celebrations).',
        'I did full-stack work building backend services as well as the front-end/UI.',
        'I also lead the cloud migrations of some existing applications.',
        'Besides new features, I remodeled existing applications to streamline the book metadata and comply with privacy regulations.',
        'I multiplied my impact by mentoring and helping out interns, fresh grads, and also experienced engineers who were new to the team.'
      ]
    },
    {
      name: 'Amazon (internship)',
      location: 'Seattle, Washington state, USA',
      title: 'Software Development Engineer (SDE) Intern',
      startDate: 'May 17, 2016',
      endDate: 'August 5, 2016',
      details: [
        'I got selected for the coveted software development summer internship at Amazon and developed a news feed for an internal website.',
        'I ended up getting a full-time job offer at the end.'
      ]
    },
    {
      name: 'Wipro Technologies',
      location: 'Pune, India and York, UK',
      title: 'Project Engineer to Senior Software Engineer',
      startDate: 'April 26, 2010',
      endDate: 'May 27, 2015',
      details: [
        'I started work as a software engineer after graduation.',
        'I learned and practiced full-stack deployment.',
        'I worked on large projects for insurance and banking clients.',
        'I also worked in the UK being on-site at the York office of Aviva Life Insurance and handled the offshore team in India.'
      ]
    },
];

const skills = [
    {
      type: 'Computer Languages',
      examples: 'Java, C#/.Net, JavaScript'
    },
    {
      type: 'Cloud technologies',
      examples: 'AWS (SNS, SQS, API Gateway, Lambda, etc.), GCP (Apigee, GKE, CloudSql)'
    },
    {
      type: 'Database/Storage',
      examples: 'SQL/PLSQL, Postgres, Oracle, MS SqlServer, DynamoDB, S3'
    },
    {
      type: 'Operating Systems',
      examples: 'Linux, Windows, macOS'
    },
    {
      type: 'Integrated Development Environments (IDEs)',
      examples: 'JetBrains IntelliJ Idea and Rider, Visual Studio, VSCode, Eclipse'
    },
    {
      type: 'Backend development',
      examples: 'REST APIs, Spring, ASP.NET, Microservices, Kubernetes, Docker, Postman, Kafka'
    },
    {
      type: 'Front-end development',
      examples: 'HTML, CSS, JavaScript, AngularJS 1, Bootstrap, JQuery, React, Material UI (MUI)'
    },
    {
      type: 'DevOps and SRE',
      examples: 'CI/CD, Git, GitOps, Infrastructure as Code (CDK, Terraform, Cloud Formation), monitoring, alarming, dashboards'
    },
    {
      type: 'Unit and Integration testing',
      examples: 'JUnit, XUnit, Jasmine, Karma, Cypress, Selenium'
    },
    {
      type: 'Project execution',
      examples: 'Agile, synthesizing requirements, planning and estimations, scrum and sprint retro, mentoring'
    },
];

const education = [
    {
      institute: 'Texas A&M University (TAMU)',
      location: 'College Station, Texas, USA',
      degreeName: 'Master of Science (MS)',
      concentration: 'Computer Science (CS)',
      start: 'August 2015',
      end: 'May 2017',
      details: [
        'I took courses like Analysis of Algorithms, Software Engineering, Information Storage & Retrieval, Artificial Intelligence, and Natural Language Processing.',
        'I also researched the application of sketch recognition in improving the knowledge of geography among students.',
        'I got inducted into Upsilon Pi Epsilon, the reputed International Honor Society for Computing and Information disciplines.'
      ]
    },
    {
      institute: 'National Institute of Technology (NIT), Srinagar',
      location: 'Srinagar, Jammu & Kashmir, India',
      degreeName: 'Bachelor of Technology (B.Tech.)',
      concentration: 'Electronics and Communication Engineering (ECE)',
      start: 'August 2005',
      end: 'July 2009',
      details: [
        'I took core courses like Microprocessors, Digital Electronics & Logic Design, Communication Systems, and Digital Signal Processing.',
        'I also CS-related courses like Introduction to Computer Programming, Data Structures, Internet & Web Design, and Java & Web Technologies.'
      ]
    },
];

const certifications = [
    {
      name: 'Oracle Certified Professional, Java SE 6 Programmer',
      issuingAuthority: 'Oracle University',
      issueDate: 'August 5, 2015'
    },
    {
      name: 'IBM Certified Application Developer, IBM WebSphere Portlet Factory 6.1.5',
      issuingAuthority: 'IBM',
      issueDate: 'September 22, 2011'
    },
];

const languages = [ 'English', 'Kashmiri', 'Hindi', 'Urdu' ];

const testScores = [
    {
      name: 'GRE',
      result: '330/340'
    },
    {
      name: 'TOEFL iBT',
      result: '113/120'
    },
    {
      name: 'IELTS',
      result: 'Overall band 8.5/9.0'
    },
];

export { experienceInfo, skills, education, certifications, languages, testScores };