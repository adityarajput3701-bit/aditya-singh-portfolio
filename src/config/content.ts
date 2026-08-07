import type { SiteContent } from "@/types/content";

export const siteContent: SiteContent = {
  person: {
    firstName: "Aditya",
    lastName: "Singh",
    role: "Accounts Executive",
    org: "Link Middle East Limited",
    orgHref: "https://linkmiddleeast.com/",
    location: "Dubai, United Arab Emirates",
    tagline:
      "Financial statement analysis & bookkeeping — passionate about capital markets and portfolio management.",
    statusBadge: "Open to opportunities",
  },
  nav: [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "skills", href: "#skills" },
    { label: "certifications", href: "#certifications" },
    { label: "education", href: "#education" },
    { label: "contact", href: "#contact" },
  ],
  about: {
    paragraph:
      "Numbers tell a story before words do — that's what drew me into accounting and finance in the first place. I'm a detail-oriented Accounts Executive at LINK MIDDLE EAST LIMITED in Dubai, with hands-on UAE experience across financial operations, VAT compliance, and general ledger management. I work daily in FACTS ERP and Tally ERP, and lean on advanced Excel — Pivot Tables, VLOOKUP/XLOOKUP, INDEX MATCH — for reconciliations, invoice processing, and financial reporting. I coordinate closely with sales and procurement teams to keep cash flow visibility accurate through month-end close, and manage VAT filing and FTA compliance for trading operations. I hold a Bachelor of Business Administration from Maharishi Markandeshwar University, and what draws me to this field is the problem-solving underneath the numbers — figuring out why an account doesn't balance, or how a set of financials tells the real story of a business.",
    goal: "Building toward the CFA — developing technical and quantitative analysis skills through algorithmic trading indicator design.",
  },
  experience: [
    {
      role: "Accounts Executive",
      org: "LINK MIDDLE EAST LIMITED",
      orgHref: "https://linkmiddleeast.com/",
      location: "Dubai, UAE",
      dateRange: "Jul 2024 — Present",
      current: true,
      description:
        "Process day-to-day accounting transactions in FACTS ERP, maintaining accuracy across ledger postings and supporting documentation. Maintain and review general ledger entries and financial reports to support month-end close and management reporting. Manage VAT filing and FTA compliance for trading operations, ensuring timely and accurate submissions. Coordinate with sales and procurement teams to support cash flow visibility and working capital planning. Perform bank, vendor, and customer reconciliations to identify and resolve discrepancies and strengthen internal controls.",
    },
    {
      role: "Marketing Manager",
      org: "Finolity Ventures Pvt. Ltd.",
      location: "Yamunanagar, Haryana, IN",
      dateRange: "May 2023 — Jan 2024",
      description:
        "Led marketing campaigns to drive brand awareness and customer acquisition, and managed customer engagement initiatives that improved retention by 30%.",
    },
    {
      role: "Trainee Executive",
      org: "Imperial Investigations Pvt. Ltd.",
      location: "Patna, Bihar, IN",
      dateRange: "Dec 2022 — Apr 2023",
      description:
        "Prepared investigation reports for insurance claims and researched fraud assessment case details, supporting senior investigators with detailed documentation and case tracking.",
    },
  ],
  skills: [
    "Account Reconciliation",
    "Accounting",
    "Bookkeeping",
    "Corporate Financial Statement Analysis",
    "Equity Research",
    "FACTS ERP",
    "Financial Analysis",
    "Financial Modeling",
    "Financial Reporting",
    "Forecasting",
    "Internal Controls & Audit Support",
    "Microsoft Office",
    "Pivot Tables & VLOOKUP/XLOOKUP",
    "Tally ERP",
    "Technical Analysis & Algorithmic Indicator Design (Pine Script)",
    "UAE VAT Compliance & FTA Filing",
  ],
  certifications: [
    {
      title: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      href: "https://www.linkedin.com/learning/certificates/65e372218a0025b4110c4c9cb307ccd23a8e5a6e79fa780b276d95a121b1719c",
    },
    {
      title: "Corporate Financial Statement Analysis",
      href: "https://www.linkedin.com/learning/certificates/dc2b61d3e7982bb95ce8d686e910d238656abf9c1a128c91af7e724a26d26930",
    },
    {
      title: "Data, Economic Modeling, and Forecasting with Stata",
      href: "https://www.linkedin.com/learning/certificates/325c847e99dbd09202d48b395ad4a67cf2f7c86859dd60758c063032680786ed",
    },
    {
      title: "Excel Modeling Tips and Tricks",
      href: "https://www.linkedin.com/learning/certificates/622ac4327711ccaf9f3e4efea865f20d8486cad58dea8f76667ef1f08fbf7644",
    },
    {
      title: "Financial Modeling and Forecasting Financial Statements",
      href: "https://www.linkedin.com/learning/certificates/eb4f65705dfd405e927e8351e36c355881bbf9a79455481bd0b2801c57de0fd0",
    },
    {
      title: "Financial Modeling Foundations",
      href: "https://www.linkedin.com/learning/certificates/6209b901b3e377697a778c7f1f2ef29583febd2bf5a50d4c74ed93b220087971",
    },
    {
      title: "Master Key Financial Analyst Skills",
      href: "https://www.linkedin.com/learning/certificates/5b4a909a228916eb3da0756b729bbe24a92ff46119215085a9ab53d93f568622",
    },
    {
      title: "Starting Your Career as a Financial Analyst",
      href: "https://www.linkedin.com/learning/certificates/1ec688dbc36d26dcf7aa5105ccbfadef6caaa8dc311f3c325f71bcc13c21f775",
    },
  ],
  education: [
    {
      degree: "Bachelor of Business Administration (BBA)",
      school: "Maharishi Markandeshwar University",
      schoolHref: "https://www.mmumullana.org/",
      location: "Ambala, India",
      year: "Dec 2023",
    },
    {
      degree: "High School Diploma, Intermediate of Commerce",
      school: "Rajdeo Singh College",
      location: "Siwan, Bihar",
      year: "2017 — 2019",
    },
    {
      degree: "Matriculation",
      school: "Vigyananand Kendriya Vidyalaya",
      schoolHref: "https://www.vkvsiwan.edu.in/",
      location: "Siwan, Bihar",
      year: "2016 — 2017",
    },
  ],
  contact: {
    heading: "Let's talk opportunities.",
    sub: "Open to roles in accounting, financial analysis, and investment research.",
    channels: [
      { label: "Call", href: "tel:+971545374079" },
      { label: "Email me", href: "mailto:adityarajput3701@gmail.com" },
      {
        label: "Get Resume",
        href: "/resume.pdf",
        download: "Aditya_Singh_Resume.pdf",
      },
    ],
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/a_a_d_i__s_n_g/", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aditya-singh0103/", external: true },
    { label: "X", href: "https://x.com/Aadi_sng", external: true },
  ],
};
