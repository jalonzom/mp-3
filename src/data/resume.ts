import type { Certification, Contact, Entry } from "../interfaces/Resume.ts";

export const education: Entry[] = [
    {
        place: "Boston University College of Arts and Sciences, Boston, MA",
        dates: "May 2027",
        details: [
            "Bachelor of Arts in Computer Science, Minor in Business Administration at Questrom School of Business",
            "Activities: BU Girls Who Code; BU Allianza Latina; BostonHacks; BU Cybersecurity Association; BU SHPE",
        ],
    },
];

export const leadership: Entry[] = [
    {
        place: "BostonHacks, Boston, MA",
        role: "Sponsorship Organizer",
        dates: "February 2025 – Present",
        details: [
            "Led proactive outreach to secure sponsorships for BostonHacks. Secured more than $7,000 for the hackathon.",
            "Built and maintained relationships with corporate partners through strategic networking and engagement.",
        ],
    },
    {
        place: "BU Cybersecurity Association, Boston, MA",
        role: "Secretary",
        dates: "May 2025 – Present",
        details: [
            "Managed team communication via Slack and coordinated logistics, including workshops and general meetings.",
        ],
    },
];

export const work: Entry[] = [
    {
        place: "CVS Pharmacy, Riverhead, NY",
        role: "Pharmacy Technician",
        dates: "May 2023 – May 2024",
        details: [
            "Assisted pharmacists with compounding medications and prepared and filled prescriptions accurately.",
        ],
    },
    {
        place: "Boston University, Boston, MA",
        role: "Web Assistant",
        dates: "February 2025 – Present",
        details: [
            "Assisted in maintaining and updating BU Global Programs websites, ensuring accuracy and functionality.",
            "Designed and built marketing emails, applying attention to detail and strong grammatical skills.",
            "Worked with HTML, JavaScript/Node.js, and WordPress to enhance web content and user experience.",
        ],
    },
    {
        place: "Boston University UROP, Boston, MA",
        role: "Research Assistant for Professor Considine",
        dates: "May 2025 – Present",
        details: [
            "Implemented and tested the game Ataxx in C++ using a novel compressed game-solving algorithm to explore its efficiency and scalability in solving previously unsolved game boards.",
            "Designed and experimented with proof validation techniques for large compressed datasets to verify algorithmic correctness in a memory-efficient manner.",
        ],
    },
];

export const professionalReferences: Contact[] = [
    {
        name: "Dr. Emily Carter",
        title: "Senior Software Engineer, Brown University",
        email: "ecarter@bu.edu",
        phone: "(615) 823-0967",
    },
    {
        name: "Michael Thompson",
        title: "Project Lead, TechNova Solutions",
        email: "mthompson@technova.com",
        phone: "(615) 987-6543",
    },
    {
        name: "Sarah Delgado",
        title: "Diving Operations Supervisor, CDA Technical Institute",
        email: "sdelgado@cdati.org",
        phone: "(482) 203-8349",
    },
];

export const personalReferences: Contact[] = [
    {
        name: "Maria Alonzo",
        title: "Family Friend",
        email: "malonzo@gmail.com",
        phone: "(631) 834-1492",
    },
    {
        name: "David Ramirez",
        title: "Mentor",
        email: "dramirez@gmail.com",
        phone: "(631) 506-7788",
    },
];

export const certifications: Certification[] = [
    {
        name: "Scrum Master Certification",
        description: "Certified Scrum Master (CSM) – Demonstrates knowledge of Agile principles, Scrum framework, and team facilitation.",
    },
    {
        name: "Google Analytics Certification",
        description: "Google Analytics Certification – Completed Google’s free analytics training covering data insights, reporting, and website performance tracking.",
    },
];
