export interface Entry {
    place: string;
    role?: string;
    dates: string;
    details: string[];
}

export interface Contact {
    name: string;
    title: string;
    email: string;
    phone: string;
}

export interface Certification {
    name: string;
    description: string;
}
