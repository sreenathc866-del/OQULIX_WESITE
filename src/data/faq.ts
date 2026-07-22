export type FAQCategory = 'All' | 'General' | 'Services' | 'Products' | 'Careers' | 'Support';

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqCategories: FAQCategory[] = ['All', 'General', 'Services', 'Products', 'Careers', 'Support'];

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is OQULIX?",
    answer: "OQULIX is a technology company specializing in innovative digital solutions, including Artificial Intelligence (AI), Augmented Reality (AR), Virtual Reality (VR), web development, mobile applications, and immersive digital experiences for businesses and individuals.",
    category: "General"
  },
  {
    id: 2,
    question: "What services does OQULIX provide?",
    answer: "We provide AI solutions, AR/VR experiences, custom web development, mobile application development, digital products, UI/UX design, and technology consulting tailored to business needs.",
    category: "Services"
  },
  {
    id: 3,
    question: "What products are developed by OQULIX?",
    answer: "OQULIX develops innovative products such as Happy Moves, AR Flash Cards, Happy Class, and GAMEFAKTORY, each designed to enhance learning, entertainment, and digital engagement.",
    category: "Products"
  },
  {
    id: 4,
    question: "Do you build custom software for businesses?",
    answer: "Yes. We design and develop custom software solutions, web applications, mobile apps, AI-powered platforms, and immersive AR/VR experiences based on your business requirements.",
    category: "Services"
  },
  {
    id: 5,
    question: "Can startups work with OQULIX?",
    answer: "Absolutely. We collaborate with startups, educational institutions, enterprises, and organizations to transform innovative ideas into scalable digital products.",
    category: "General"
  },
  {
    id: 6,
    question: "Which technologies do you specialize in?",
    answer: "Our expertise includes React, Node.js, TypeScript, AI technologies, AR, VR, cloud solutions, Firebase, modern UI/UX design, and scalable web platforms.",
    category: "General"
  },
  {
    id: 7,
    question: "How can I request a project quotation?",
    answer: "Simply visit the Contact page or use the \"Let's Build Together\" button to share your project requirements. Our team will review your request and respond with a customized proposal.",
    category: "Support"
  },
  {
    id: 8,
    question: "Do you provide maintenance and technical support?",
    answer: "Yes. We offer continuous maintenance, updates, performance optimization, bug fixes, and technical support after project delivery.",
    category: "Support"
  },
  {
    id: 9,
    question: "How long does a project usually take?",
    answer: "Project timelines depend on complexity. Small projects typically take a few weeks, while larger enterprise solutions may take several months. We provide an estimated timeline during project planning.",
    category: "Services"
  },
  {
    id: 10,
    question: "How can I join the OQULIX team?",
    answer: "Visit the Careers page to explore current job openings, internships, and opportunities to become part of the OQULIX team.",
    category: "Careers"
  },
  {
    id: 11,
    question: "How can I contact OQULIX?",
    answer: "You can contact us through our Contact page, email, phone, or social media channels listed in the footer. Our team will respond as quickly as possible.",
    category: "Support"
  }
];
