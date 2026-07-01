export interface Product {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    videoUrl?: string;
    ctaText: string;
}

export interface Solution {
    id: string;
    title: string;
    iconUrl: string;
}

export interface Testimonial {
    id: string;
    clientName: string;
    clientPosition: string;
    clientCompany: string;
    feedback: string;
}

export interface TeamMember {
    id: string;
    name: string;
    position: string;
    imageUrl: string;
    bio: string;
}

export interface ContactForm {
    name: string;
    email: string;
    phone: string;
    company: string;
}