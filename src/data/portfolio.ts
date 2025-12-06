
export const portfolioData = {
    personalInfo: {
        name: "Aniket Patil",
        role: "Data Science | AI & ML Developer | Python Developer",
        summary: "I am a passionate Data Science enthusiast with hands-on experience in data analysis and proven academic and project experience aligned with AI-augmented development. \"Placement Coordinator\" at Indira University, coordinating placement activities, bridging communication between students and recruiters.",
        email: "aniketpatil6448@gmail.com",
        phone: "8847731860", // From Resume Image? Text didn't explicitly say phone but image header had it. I'll include if legible. Resume text has it. 
        linkedin: "https://linkedin.com/in/aniketpatil-6448",
        github: "https://github.com/aniketpatil-6448", // Assumed pattern or generic
        location: "Pune, Maharashtra, India",
        // Avatar image will act as placeholder until user replaces it or I use the uploaded one.
    },
    skills: [
        { name: "Python", category: "Languages", level: 90 },
        { name: "SQL", category: "Languages", level: 85 },
        { name: "NumPy", category: "Frameworks", level: 85 },
        { name: "Pandas", category: "Frameworks", level: 85 },
        { name: "Matplotlib", category: "Frameworks", level: 80 },
        { name: "Seaborn", category: "Frameworks", level: 80 },
        { name: "LangChain", category: "Frameworks", level: 85 },
        { name: "FastAPI", category: "Frameworks", level: 75 },
        { name: "Flask", category: "Frameworks", level: 80 },
        { name: "MongoDB", category: "Database", level: 75 },
        { name: "HTML5/CSS3", category: "Web", level: 90 },
        { name: "Bootstrap", category: "Web", level: 85 },
        { name: "Docker", category: "Tools", level: 70 },
        { name: "Git & GitHub", category: "Tools", level: 85 },
        { name: "Jupyter Notebook", category: "Tools", level: 90 },
    ],
    experience: [
        {
            company: "Codec Technologies",
            role: "Python Developer Intern",
            duration: "Aug 2025 – Sept 2025",
            description: "Developed a RAG-based chatbot system with contextual responses using LangChain and HuggingFace Embeddings. Integrated Flask backend with React.js frontend for smooth interaction. Implemented Pinecone Vector Database for efficient document retrieval and accuracy.",
            techStack: ["Python", "LangChain", "HuggingFace", "Flask", "React", "Pinecone"]
        }
    ],
    education: [
        {
            institution: "Indira College of Engineering and Management, Pune",
            degree: "Master of Computer Applications (MCA)",
            year: "Expected June 2026",
            score: "94.00%"
        },
        {
            institution: "G H Raisoni Institute of Business Management, Jalgaon",
            degree: "Bachelor of Computer Applications (BCA)",
            year: "Jul 2021 - Jul 2024",
            score: "85.80%"
        },
        {
            institution: "KCES's Moolji Jaitha College, Jalgaon",
            degree: "Higher Secondary Certificate (HSC)",
            year: "Jul 2019 - Jul 2021",
            score: "86.17%"
        }
    ],
    projects: [
        {
            title: "Mindmate – AI LMS Platform",
            description: "Designed an AI-powered LMS integrating Google Gemini AI, Google OAuth 2.0, and Razorpay API. Implemented AI-driven assistant, course search, voice-based interactions, and real-time dashboards. Enabled dual roles (Student & Educator).",
            techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "LangChain", "Gemini 2.0", "OAuth 2.0", "Razorpay"],
            link: "#", // Placeholder
            github: "#"
        },
        {
            title: "RAG-Based GenAI – Medical Assistant Chatbot",
            description: "Developed an intelligent chatbot capable of retrieving and generating medical domain answers using RAG with Gemini Flash 2. Implemented LangChain components, HuggingFace Embeddings, and Pinecone Vector Store.",
            techStack: ["Python", "Flask", "React.js", "LangChain", "HuggingFace", "Pinecone", "Gemini Flash 2"],
            link: "#",
            github: "#"
        }
    ],
    certifications: [
        {
            title: "Research Paper: Role of AI Chatbots in Modern Education",
            issuer: "National Conference on Technological Advancements",
            date: "2023"
        },
        {
            title: "Generative AI Fundamentals",
            issuer: "Databricks",
            date: "2024"
        },
        {
            title: "RPA Developer Course",
            issuer: "UiPath Academy",
            date: "2024"
        }
    ],
    achievements: [
        "1st Prize - Internal Smart India Hackathon (SIH-2023)",
        "2nd Prize - Business Plan Poster Presentation Competition"
    ]
};
