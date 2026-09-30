import { ExperienceItem, MetricHighlight, SkillGroup, ToolCategory, EducationItem, ReferenceItem, AwardItem } from '../types';

export const PERSONAL_INFO = {
  name: "Joseph John",
  headline: "Business development, sales and key account management",
  subHeadline: "I win new clients and grow them into long-term accounts.",
  bio: "I'm Joseph John, a business development and sales professional with 8+ years of experience in lead generation, key account management, CRM pipeline management and leading teams across ICT, retail, FMCG, professional consultancy, hotel and hospitality, and real estate.",
  philosophy: "Selling is more than closing deals. It sits between clients, product and operations.",
  philosophyExpanded: "I find the right prospects, understand what they need, put together clear proposals and see the deal through. After the sale, I stay close to the account so it keeps growing. My work has covered tenders, cold outreach, partnerships, demos, contracts and negotiation, plus the reporting and process work that keeps a sales operation running smoothly.",
  location: "Nairobi, Kenya",
  postalAddress: "B.O BOX 62-90119, Matuu, Kenya",
  phonePrimary: "+254 702 581 235",
  phoneSecondary: "+254 748 104 697",
  email: "Josephmwema1@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/joseph-john-270155a6/",
  availability: "Open to Remote, Hybrid and On-site roles",
  workModes: ["Remote", "Hybrid", "On-site"],
  primaryFocus: "Business development, sales and key account management",
  publicWebsiteUrl: "https://ais-pre-5k6yvqfi75kbzuxih2a2qb-929851772140.europe-west2.run.app",
  portraitImage: "/src/assets/images/joseph_john_blue_portrait_1790693140033.jpg",
  yearsExperience: "8+",
  peopleLed: "10",
  industriesCount: "6",
  industriesList: ["ICT", "Retail", "FMCG", "Professional Consultancy", "Hotel & Hospitality", "Real Estate"]
};

export const STATS = [
  {
    value: "8+",
    label: "Years in sales, business development and operations",
    detail: "Cross-industry track record driving sustained client acquisition and growth"
  },
  {
    value: "10",
    label: "People led",
    detail: "Coached, set target KPIs, and managed across sales and customer service teams"
  },
  {
    value: "6",
    label: "Industries mastered",
    detail: "ICT, Retail, FMCGs, Professional Consultancy Services, Hotel & Hospitality, and Real Estate"
  },
  {
    value: "100%",
    label: "Target achievement discipline",
    detail: "Consistent delivery against quarterly revenue benchmarks and SLA commitments"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "canvas-2026",
    period: "June 2026 to present",
    role: "Sales and Customer Service Lead",
    company: "Canvas Technologies & Computers",
    industry: "ICT and Retail",
    industryCategory: "ict",
    location: "Nairobi, Kenya",
    summary: "Spearheading the sales and customer experience operations for commercial enterprise and retail ICT accounts, setting priorities and coaching teams to surpass revenue quotas.",
    categories: [
      {
        title: "Sales leadership",
        items: [
          "Lead the sales and customer service function for corporate and retail ICT clients, setting priorities and monitoring monthly and quarterly targets.",
          "Coach the team on consultative selling, product knowledge and service standards to elevate close rates and customer NPS."
        ]
      },
      {
        title: "Accounts and operations",
        items: [
          "Manage B2B and institutional relationships and grow them through upselling and cross-selling of ICT products and services.",
          "Oversee stock levels, order fulfilment, POS operations and M-PESA reconciliation for clean financial bookkeeping."
        ]
      }
    ],
    keyAchievements: [
      "Streamlined institutional hardware supply pipelines with guaranteed SLA fulfillment",
      "Consistently achieved target conversion rates through disciplined consultative sales coaching"
    ],
    skillsUsed: [
      "Consultative Selling",
      "Sales Leadership",
      "B2B Account Management",
      "POS & M-PESA Reconciliation",
      "Inventory Management",
      "Team Coaching"
    ]
  },
  {
    id: "actserv-2024",
    period: "February 2024 to June 2026",
    role: "Business Development and Account Executive",
    company: "Actuarial Services East Africa Limited (ACTSERV Consulting)",
    industry: "Professional Consultancy Services",
    industryCategory: "consultancy",
    location: "Nairobi, Kenya",
    summary: "Drove high-stakes institutional client acquisition, strategic regulatory partnerships, and valuation software solution deals across pension schemes, insurance firms, and wealth funds.",
    categories: [
      {
        title: "Business development",
        items: [
          "Sourced, nurtured and converted leads through tendering, email marketing, cold calling and networking events.",
          "Won business for customised training for investment teams, boards of trustees and actuarial teams, covering governance, IFRS 17, IAS 19, pensions, asset allocation and risk management.",
          "Secured high-impact partnerships with insurers, regulators (IRA and RBA), investment funds and pension schemes.",
          "Researched markets and competitors to shape pricing, product development and marketing."
        ]
      },
      {
        title: "Key account management",
        items: [
          "Managed corporate and institutional accounts across pension, investment and insurance consulting, software solutions and training.",
          "Prepared proposals, quotations, demos and pitches, and responded to RFPs, RFIs and tenders with competitive precision.",
          "Negotiated and closed deals, and prepared contracts, NDAs and SLAs for IDD, PRMF, ActVal, and GenVal solutions, successfully expanding client portfolios."
        ]
      },
      {
        title: "Pipeline and reporting",
        items: [
          "Kept the CRM pipeline accurate for timely follow-up and better conversion.",
          "Produced sales performance reports and supported project planning and delivery with stakeholders."
        ]
      }
    ],
    keyAchievements: [
      "Forged institutional alliances with Insurance Regulatory Authority (IRA) & Retirement Benefits Authority (RBA)",
      "Sold complex actuarial software modules including ActVal, GenVal, IDD, and PRMF to leading financial institutions",
      "Structured and closed multi-stakeholder consulting and executive governance training contracts"
    ],
    skillsUsed: [
      "RFP / Tender Management",
      "Regulatory Partnerships (IRA & RBA)",
      "IFRS 17 / IAS 19 Advisory Sales",
      "Software Pitching (ActVal, GenVal)",
      "Contract Drafting & SLAs",
      "CRM Pipeline Discipline"
    ]
  },
  {
    id: "canvas-2020",
    period: "February 2020 to January 2024",
    role: "Sales and Customer Service Lead",
    company: "Canvas Technologies & Computers",
    industry: "ICT and Retail",
    industryCategory: "ict",
    location: "Nairobi, Kenya",
    summary: "Led retail and commercial B2B sales cycles from outbound prospect identification to full installation delivery, expanding hardware and networking service accounts.",
    categories: [
      {
        title: "Sales leadership",
        items: [
          "Led a high-performing sales team and met monthly and quarterly targets through coaching and clear sales strategy.",
          "Ran the full sales cycle: lead generation, needs assessment, demos, quotations, negotiation and closing."
        ]
      },
      {
        title: "Key accounts",
        items: [
          "Built B2B and institutional relationships and expanded them by upselling and cross-selling laptops, desktops, monitors, accessories, software and Wi-Fi installation services.",
          "Prepared competitive quotations and proposals that improved conversion rates."
        ]
      },
      {
        title: "Operations and customer care",
        items: [
          "Coordinated inventory and supply to keep stock optimal and orders on time.",
          "Handled POS, cash management and reconciliation, applied CRM practices, gathered quarterly feedback and resolved customer queries."
        ]
      }
    ],
    keyAchievements: [
      "Grew recurring institutional repeat orders for ICT hardware and networking rollouts",
      "Maintained zero-variance cash reconciliation across high-volume POS and M-PESA channels",
      "Achieved 95%+ client satisfaction through responsive post-sale support"
    ],
    skillsUsed: [
      "Full Sales Cycle",
      "B2B Hardware & Networking",
      "Quotation Preparation",
      "Cash & POS Reconciliation",
      "Customer Retention",
      "Procurement Planning"
    ]
  },
  {
    id: "royal-2017",
    period: "June 2017 to December 2019",
    role: "Sales and Business Operations Manager",
    company: "Royal Prime Investment (Hotel, Hospitality & Real Estate)",
    industry: "Hotel and Hospitality, Real Estate",
    industryCategory: "hospitality",
    location: "Kenya",
    summary: "Directed integrated commercial growth and operational execution across a multi-business unit portfolio, managing corporate accounts, event logistics, and regulatory compliance.",
    categories: [
      {
        title: "Sales and business development",
        items: [
          "Directed sales and operational performance across hotel and real estate operations, consistently reaching revenue targets.",
          "Found and pursued new corporate opportunities, widening the client base.",
          "Developed sales growth and operational strategies to expand market reach."
        ]
      },
      {
        title: "Key accounts and operations",
        items: [
          "Managed corporate and institutional accounts such as banks, SACCOs and chamas, delivering conferencing and facility operations to SLA.",
          "Planned corporate events and coordinated conferencing logistics and client service.",
          "Oversaw budgeting and cost control to improve profitability."
        ]
      },
      {
        title: "Leadership and compliance",
        items: [
          "Led and coached a team of 9, setting KPIs and tracking performance.",
          "Maintained business licences and hospitality operating permits."
        ]
      }
    ],
    keyAchievements: [
      "Secured recurring corporate hospitality and conferencing contracts with major banks and SACCOs",
      "Led and mentored 9 operations and hospitality staff members to hit monthly revenue quotas",
      "Maintained 100% regulatory compliance with municipal, public safety, and hospitality licensing"
    ],
    skillsUsed: [
      "Operational Leadership (9 Team Members)",
      "Corporate Hospitality Sales",
      "Event Logistics Coordination",
      "Cost Control & Budgeting",
      "Regulatory Compliance & Licensing",
      "Account Management for SACCOs & Banks"
    ]
  }
];

export const REVENUE_PROCESS = [
  {
    step: "01",
    title: "Find",
    subtitle: "Lead Sourcing & Opportunity Discovery",
    description: "Identify and reach the right prospects through proactive outreach, government and institutional tenders, and industry networking.",
    tactics: [
      "Outreach Marketing & Cold Calling",
      "RFP, RFI & Tender Tracking",
      "Targeted Email Campaigns",
      "Competitor & Market Gap Analysis"
    ],
    deliverable: "Qualified Lead Pipeline"
  },
  {
    step: "02",
    title: "Pitch",
    subtitle: "Consultative Needs Assessment",
    description: "Understand the prospect's unique operational friction, then present a tailored proposal, software demo, or competitive quotation.",
    tactics: [
      "Deep Consultative Discovery",
      "Tailored Executive Pitches & Presentations",
      "Custom Software Demos (ActVal, GenVal, IDD)",
      "Precise Pricing & Quotations"
    ],
    deliverable: "High-Conviction Proposals"
  },
  {
    step: "03",
    title: "Close",
    subtitle: "Commercial Contracting & Negotiation",
    description: "Overcome objections, align stakeholders, negotiate favorable commercial terms, and formalize legal contracts, NDAs, and SLAs.",
    tactics: [
      "Commercial Deal Structuring",
      "Contract, NDA & SLA Formulation",
      "Stakeholder Alignment (Trustees, Regulators)",
      "Objection Handling & Closing"
    ],
    deliverable: "Signed Multi-Year Contracts"
  },
  {
    step: "04",
    title: "Grow",
    subtitle: "Retention, Upselling & Expansion",
    description: "Stay close to the account post-sale, maintain CRM hygiene, gather quarterly feedback, and unlock upselling and cross-selling avenues.",
    tactics: [
      "Quarterly Account Reviews & Feedback",
      "Cross-selling ICT & Advisory Modules",
      "Rigorous CRM Pipeline Tracking",
      "Referral & Partnership Cultivation"
    ],
    deliverable: "Compounded Account LTV"
  }
];

export const WORK_HIGHLIGHTS: MetricHighlight[] = [
  {
    id: "revenue-targets",
    title: "Revenue Targets",
    stat: "100%",
    badge: "Consistent Performance",
    iconName: "TrendingUp",
    description: "Consistently met and exceeded revenue targets across sales roles in six diverse industries.",
    detail: "Demonstrated disciplined quota attainment spanning ICT retail, enterprise consulting, actuarial training, and commercial hospitality services."
  },
  {
    id: "strategic-partnerships",
    title: "Strategic Partnerships",
    stat: "High-Impact",
    badge: "Institutional Growth",
    iconName: "Handshake",
    description: "Secured channel partners across insurance, regulation, investment funds, and pensions.",
    detail: "Successfully built trusted institutional rapport with top regulatory bodies including the Insurance Regulatory Authority (IRA) and Retirement Benefits Authority (RBA)."
  },
  {
    id: "tender-wins",
    title: "Tender Wins",
    stat: "Competitive",
    badge: "Public & Private RFPs",
    iconName: "FileCheck",
    description: "Responded to RFPs, RFIs, and tenders with tailored proposals that won competitive bids.",
    detail: "Prepared detailed bid documents, compliance dossiers, financial quotations, and technical demonstrations for institutional tenders."
  },
  {
    id: "pipeline-discipline",
    title: "Pipeline Discipline",
    stat: "Zero Cold Leads",
    badge: "CRM Architecture",
    iconName: "Target",
    description: "Kept CRM records meticulously current so no prospective opportunity slipped through.",
    detail: "Implemented cadence-driven follow-ups in Salesforce and Zoho, creating transparent forecasting for executive boards and stakeholders."
  },
  {
    id: "team-leadership",
    title: "Team Leadership",
    stat: "10 Led",
    badge: "People & Performance",
    iconName: "Users",
    description: "Led sales and operations teams with clear KPIs, collaborative culture, and weekly coaching.",
    detail: "Managed up to 9 direct reports simultaneously at Royal Prime and high-velocity retail sales teams at Canvas Technologies."
  },
  {
    id: "key-accounts",
    title: "Key Accounts",
    stat: "Long-Term",
    badge: "High Retention",
    iconName: "ShieldCheck",
    description: "Managed corporate and institutional clients over the long term through proactive customer care.",
    detail: "Built enduring trust with corporate clients, banks, SACCOs, chamas, and investment committees through dependable post-sale SLA delivery."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Business Development & Sales",
    description: "End-to-end client acquisition, outbound strategy, and consultative deal closing.",
    skills: [
      "Lead Generation & Prospecting",
      "Outbound & Inbound Cold Calling",
      "Email Marketing Campaigns",
      "Consultative Selling",
      "Executive Pitches & Presentations",
      "Product Demos (Software & Hardware)",
      "Bid & Tender Management (RFPs/RFIs)",
      "Contract Negotiations & Closing"
    ]
  },
  {
    category: "Account Management",
    description: "Nurturing institutional relationships, maximizing retention, and expanding LTV.",
    skills: [
      "Key Account Management",
      "Client Relationship Management",
      "Upselling & Cross-Selling Strategies",
      "Strategic Channel Partnerships",
      "Stakeholder Management (Trustees, Regulators)",
      "Service Level Agreement (SLA) Monitoring",
      "Client Needs Assessment",
      "Quarterly Business Reviews"
    ]
  },
  {
    category: "Operations & Sales Strategy",
    description: "Systematizing workflows, revenue tracking, and maintaining strict compliance.",
    skills: [
      "Operations & Process Improvement",
      "Project Planning & Coordination",
      "KPI Definition, Tracking & Analysis",
      "Sales Performance Reporting",
      "Risk Management & Regulatory Compliance",
      "Inventory & Supply Chain Coordination",
      "POS & M-PESA Financial Bookkeeping",
      "Budget Planning & Cost Control"
    ]
  },
  {
    category: "Working Style & Leadership",
    description: "Strategic mind-set, critical thinking, and collaborative team stewardship.",
    skills: [
      "Strategic & Critical Thinking",
      "Cross-Functional Team Leadership",
      "Complex Problem Solving",
      "Performance Coaching & Mentoring",
      "High Attention to Detail",
      "Market Research & Competitor Analysis",
      "High-Value Contract & NDA Drafting",
      "Adaptive Multitasking"
    ]
  }
];

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    category: "CRM & ERP Systems",
    description: "Pipeline management, contact intelligence, and sales opportunity forecasting.",
    items: [
      {
        name: "Salesforce",
        category: "CRM",
        proficiency: "Advanced",
        useCase: "Pipeline tracking, lead scoring, deal velocity, account history & enterprise reporting"
      },
      {
        name: "Zoho CRM",
        category: "CRM & ERP",
        proficiency: "Advanced",
        useCase: "Lead routing, activity tracking, customer onboarding workflows & contact hygiene"
      }
    ]
  },
  {
    category: "Data Analysis & Reporting",
    description: "Translating raw numbers into actionable commercial strategies and sales dashboards.",
    items: [
      {
        name: "Microsoft Excel",
        category: "Data Analysis",
        proficiency: "Expert",
        useCase: "Financial modeling, commission calculation, sales dashboards, pivot analysis & data cleansing"
      },
      {
        name: "Power BI",
        category: "BI & Visualization",
        proficiency: "Proficient",
        useCase: "Executive KPI dashboards, pipeline conversion visualizers & quarterly sales trends"
      },
      {
        name: "SQL",
        category: "Database Querying",
        proficiency: "Proficient",
        useCase: "Querying customer databases, cohort analysis & extracting commercial metrics"
      },
      {
        name: "Tableau",
        category: "BI & Visualization",
        proficiency: "Proficient",
        useCase: "Interactive data visualization and stakeholder reporting presentations"
      }
    ]
  },
  {
    category: "Project & Task Management",
    description: "Ensuring flawless execution of tenders, cross-functional sprints, and deliverables.",
    items: [
      {
        name: "Trello",
        category: "Kanban",
        proficiency: "Advanced",
        useCase: "Sprint visual boards, client onboarding pipelines & collaborative task triage"
      },
      {
        name: "Asana",
        category: "Workflow",
        proficiency: "Advanced",
        useCase: "Cross-departmental milestone tracking and stakeholder deliverables"
      },
      {
        name: "Jira",
        category: "Agile",
        proficiency: "Proficient",
        useCase: "Technical project coordination, software demo issue tracking & sprint oversight"
      },
      {
        name: "ClickUp",
        category: "Productivity",
        proficiency: "Advanced",
        useCase: "Docs, task dependencies, tender submission timelines & goal tracking"
      }
    ]
  },
  {
    category: "Programming & Modern Tech",
    description: "Harnessing quantitative rigor and modern computational tools.",
    items: [
      {
        name: "Python",
        category: "Programming",
        proficiency: "Applied",
        useCase: "Data scripting, workflow automation, actuarial statistical modeling & analysis"
      },
      {
        name: "Software & AI Workflows",
        category: "Modern Productivity",
        proficiency: "Certified",
        useCase: "Leveraging generative AI and data tools to accelerate pitch research and documentation"
      }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Bachelor of Science in Actuarial Science",
    institution: "University of Kabianga",
    period: "2013 to 2017",
    type: "degree",
    details: "Rigorous quantitative foundation covering financial modeling, risk analysis, probability, and corporate finance.",
    topics: [
      "Financial and Actuarial Mathematics",
      "Operations & Project Management",
      "Economics & Database Systems",
      "Data Analysis & Computer Programming",
      "Mathematical Statistics & Probability Modeling",
      "Actuarial Theory of Pension Funds & Survival Models"
    ]
  },
  {
    degree: "Diplomas in Risk Management",
    institution: "Alison & Athena Global Education",
    period: "2024 to 2025",
    type: "diploma",
    details: "Specialized post-graduate diplomas focused on risk identification, quantification, and institutional mitigation frameworks.",
    topics: [
      "Operational Risk Management",
      "Financial Risk Management",
      "Insurance Risk Management & Compliance"
    ]
  },
  {
    degree: "Certificate in Software Engineering with AI",
    institution: "Power Learn Project",
    period: "2025",
    type: "certification",
    details: "Intensive 16-week software engineering programme bridging technical software development with modern AI capabilities.",
    topics: [
      "Python Programming & Application Development",
      "Database Management & SQL Design",
      "Startup Building for Developers",
      "Data Analysis with Excel",
      "Web Development Principles"
    ]
  },
  {
    degree: "Certificates in Strategic, Operations and Project Management",
    institution: "CIQ (Chartered Institute of Qualifications)",
    period: "2025",
    type: "certification",
    details: "Executive development certification spanning cross-departmental operations and project leadership.",
    topics: [
      "Operations & Strategic Planning",
      "Project Lifecycle Management",
      "Resource Allocation & Execution"
    ]
  },
  {
    degree: "Sales and Marketing Analytics; Data Analysis and Visualization",
    institution: "CIQ (Chartered Institute of Qualifications)",
    period: "2025",
    type: "certification",
    details: "Specialized analytical training in metric-driven commercial strategy and visualization.",
    topics: [
      "Sales & Marketing Analytics",
      "Data Analysis and Executive Visualization",
      "Customer Lifetime Value & Attribution Modeling"
    ]
  }
];

export const AWARDS: AwardItem[] = [
  {
    title: "Leadership Award – Chairmanship",
    organization: "Actuarial Science Students Association, University of Kabianga",
    year: "Nov 2016",
    description: "Awarded for exceptional student leadership, orchestrating academic symposiums, career mentorship, and institutional partner engagements."
  },
  {
    title: "Participant, Actuarial Bootcamp (4th & 5th Annual Editions)",
    organization: "Insurance Regulatory Authority (Kenya) & TASSMU",
    year: "May 2016",
    description: "Selected to participate in the premier industry bootcamps on regulatory compliance, risk-based supervision, and insurance market innovations."
  },
  {
    title: "Top Performer, National Mathematics Contest",
    organization: "BIC, HACCO Brands & Mang'u High School",
    year: "June 2012",
    description: "Recognized among top nationwide performers in quantitative aptitude, analytical logic, and mathematical problem-solving."
  }
];

export const REFERENCES: ReferenceItem[] = [
  {
    name: "Joan Ngao",
    title: "Commercial Manager",
    company: "Kuunda",
    phone: "(+254) 720 860 187",
    email: "joan.nandaa@gmail.com",
    relationship: "Commercial & Business Development Colleague"
  },
  {
    name: "Purity Mwihaki",
    title: "Business Development Consultant",
    company: "Actuarial Services East Africa Limited",
    phone: "(+254) 746 012 496",
    email: "mwihakipurity09@gmail.com",
    relationship: "Senior Business Development Peer & Project Partner"
  },
  {
    name: "Ernest Makau",
    title: "Founder & Manager",
    company: "Royal Prime Investment",
    phone: "+254 702 056 140",
    email: "emkyembwa@gmail.com",
    relationship: "Former Executive Leadership & Direct Supervisor"
  },
  {
    name: "Joseph Nduva Kamwele",
    title: "Founder & Manager",
    company: "Canvas Technologies & Computers",
    phone: "+254 726 024 845",
    email: "canvascomputers254@gmail.com",
    relationship: "Founder & Managing Director, Canvas Technologies"
  }
];

export const INDUSTRY_FIT_PROFILES = [
  {
    id: "consultancy",
    name: "Consultancy & Financial Services",
    icon: "Briefcase",
    pitch: "Proven ability to win executive boardroom contracts, sell complex actuarial & valuation software (ActVal, GenVal, IDD, PRMF), and secure institutional partnerships with regulators like IRA and RBA.",
    relevantExperience: "Actuarial Services East Africa Limited (ACTSERV)",
    highlightMetrics: ["Tender & RFP conversions", "Trustee & C-suite training sales", "Strategic regulatory alliances"]
  },
  {
    id: "tech-ict",
    name: "ICT, Hardware & Tech Solutions",
    icon: "Cpu",
    pitch: "Led end-to-end B2B hardware rollouts, corporate Wi-Fi and infrastructure installations, software licensing, and managed large-scale supply chain logistics with high client satisfaction.",
    relevantExperience: "Canvas Technologies & Computers",
    highlightMetrics: ["Institutional repeat sales", "Consultative team coaching", "Complete sales cycle closure"]
  },
  {
    id: "hospitality-realestate",
    name: "Hospitality & Real Estate",
    icon: "Building2",
    pitch: "Experience directing multi-facility operations, managing a team of 9, landing recurring corporate accounts (banks, SACCOs), and ensuring total regulatory SLA compliance.",
    relevantExperience: "Royal Prime Investment",
    highlightMetrics: ["Supervised team of 9", "Bank & SACCO corporate accounts", "Budget optimization & cost control"]
  },
  {
    id: "retail-fmcg",
    name: "Retail & FMCG Commercial Sales",
    icon: "ShoppingBag",
    pitch: "Hands-on POS and M-PESA reconciliation mastery, inventory turnover optimization, and consultative retail customer service that turns single transactions into lifetime value.",
    relevantExperience: "Canvas Technologies & Computers / Royal Prime",
    highlightMetrics: ["Zero-variance bookkeeping", "Upselling & cross-selling", "Customer retention"]
  }
];

export const RECRUITER_FAQS = [
  {
    question: "What work arrangements is Joseph open to?",
    answer: "Joseph is 100% open to Remote, Hybrid, and On-site opportunities. He is based in Nairobi, Kenya, and is available for both local on-site/hybrid positions and global remote roles."
  },
  {
    question: "What is Joseph's core area of expertise?",
    answer: "Business development, key account management, consultative B2B sales cycles, public/private tender bidding (RFPs/RFIs), CRM pipeline management (Salesforce, Zoho), and leading sales teams."
  },
  {
    question: "What client profiles and contract sizes has Joseph closed?",
    answer: "Joseph has sold into executive boardrooms, pension trustee boards, government regulatory authorities (IRA, RBA), tier-1 insurance institutions, banks, SACCOs, and corporate commercial entities, as well as high-volume retail ICT buyers."
  },
  {
    question: "How does his Actuarial Science background benefit sales?",
    answer: "Unlike typical salespeople, Joseph has a quantitative degree in Actuarial Science from the University of Kabianga. This enables him to speak the language of CFOs, risk directors, and actuarial teams, analyzing profit margins, numerical risk probabilities, and complex financial terms with precision."
  },
  {
    question: "What software and technical tools does he use daily?",
    answer: "Salesforce CRM, Zoho CRM, Microsoft Excel (advanced financial modeling), Power BI, SQL, Jira, Trello, POS systems, M-PESA reconciliation channels, plus actuarial solutions like ActVal, GenVal, IDD, and PRMF."
  },
  {
    question: "How soon is Joseph available to start?",
    answer: "Joseph is actively interviewing and open for immediate or short-notice discussions. Reach out via email at Josephmwema1@gmail.com or call +254 702 581 235."
  }
];

export const KEY_SOLUTIONS_SOLD = [
  {
    title: "Actuarial & Valuation Software (ActVal & GenVal)",
    sector: "Financial & Pension Consulting",
    description: "Led software demos and closed licensing agreements for enterprise valuation engines used by pension schemes and insurance underwriters.",
    tag: "High-Value Enterprise SaaS"
  },
  {
    title: "Executive Trustee Governance & IFRS 17 Training",
    sector: "Institutional Advisory",
    description: "Secured high-margin corporate training tenders for boards of trustees and investment managers navigating regulatory compliance and IAS 19.",
    tag: "Advisory Services"
  },
  {
    title: "Institutional ICT Infrastructure & Hardware Rollouts",
    sector: "Enterprise Tech",
    description: "Supplied corporate desktops, servers, enterprise Wi-Fi systems, and secured annual SLA maintenance retainers across institutional accounts.",
    tag: "Hardware & Networking"
  },
  {
    title: "Corporate Hospitality & Commercial Real Estate",
    sector: "Hospitality & Property",
    description: "Directed facilities, managed a team of 9, and negotiated recurring master services agreements with commercial banks, SACCOs, and chamas.",
    tag: "Multi-Unit Operations"
  }
];

