export interface Participant {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    affiliation: string;
    designation: string;
    category: string;
    researchArea: string;
    whatsapp: string;
    country: string;
    address: string;
    state: string;
    city: string;
    gender: string;
    postalCode: string;
    status: 'pending' | 'shortlisted' | 'rejected';
    password: string;
    createdAt: string;
    adminNotification?: string;
}
const STORAGE_KEY = 'lso_participants';
const defaultParticipants: Participant[] = [
    {
        id: '1', fullName: 'Rahul Sharma', email: 'rahul@example.com', phone: '9876543210',
        affiliation: 'IIT Delhi', designation: 'PhD Scholar', category: 'student',
        researchArea: 'Optimization', whatsapp: '9876543210', country: 'India',
        address: '123 Main St', state: 'Delhi', city: 'New Delhi', gender: 'male',
        postalCode: '110016', status: 'pending', password: 'pass123',
        createdAt: '2026-02-10',
    },
    {
        id: '2', fullName: 'Priya Patel', email: 'priya@example.com', phone: '9123456780',
        affiliation: 'IISc Bangalore', designation: 'Assistant Professor', category: 'faculty',
        researchArea: 'Linear Programming', whatsapp: '9123456780', country: 'India',
        address: '456 Park Ave', state: 'Karnataka', city: 'Bangalore', gender: 'female',
        postalCode: '560012', status: 'shortlisted', password: 'pass123',
        createdAt: '2026-02-12',
    },
    {
        id: '3', fullName: 'Amit Kumar', email: 'amit@example.com', phone: '9988776655',
        affiliation: 'NIT Trichy', designation: 'Post-doctoral', category: 'student',
        researchArea: 'Heuristics', whatsapp: '9988776655', country: 'India',
        address: '789 College Rd', state: 'Tamil Nadu', city: 'Tiruchirappalli', gender: 'male',
        postalCode: '620015', status: 'rejected', password: 'pass123',
        createdAt: '2026-02-15',
    },
    {
        id: '4', fullName: 'Sneha Reddy', email: 'sneha@example.com', phone: '9871234567',
        affiliation: 'BITS Pilani', designation: 'Industry Analyst', category: 'industry',
        researchArea: 'Robust Optimization', whatsapp: '9871234567', country: 'India',
        address: '101 Tech Park', state: 'Rajasthan', city: 'Pilani', gender: 'female',
        postalCode: '333031', status: 'pending', password: 'pass123',
        createdAt: '2026-02-18',
    },
];
export const ADMIN_CREDENTIALS = {
    email: 'admin@lso.com',
    password: 'admin123',
};
export function getParticipants(): Participant[] {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultParticipants));
        return defaultParticipants;
    }
    return JSON.parse(stored);
}
export function saveParticipants(participants: Participant[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(participants));
}
export function updateParticipantStatus(id: string, status: Participant['status']) {
    const participants = getParticipants();
    const idx = participants.findIndex((p) => p.id === id);
    if (idx !== -1) {
        participants[idx].status = status;
        saveParticipants(participants);
    }
    return participants;
}
export function updateParticipantNotification(id: string, message: string) {
    const participants = getParticipants();
    const idx = participants.findIndex((p) => p.id === id);
    if (idx !== -1) {
        participants[idx].adminNotification = message;
        saveParticipants(participants);
    }
    return participants;
}
export function updateParticipant(id: string, data: Partial<Participant>) {
    const participants = getParticipants();
    const idx = participants.findIndex((p) => p.id === id);
    if (idx !== -1) {
        participants[idx] = { ...participants[idx], ...data };
        saveParticipants(participants);
    }
    return participants;
}
export function findParticipantByLogin(email: string, password: string): Participant | null {
    const participants = getParticipants();
    return participants.find((p) => p.email === email && p.password === password) || null;
}
export function findParticipantByEmail(email: string): Participant | null {
    const participants = getParticipants();
    return participants.find((p) => p.email === email) || null;
}
export function changePassword(email: string, oldPassword: string, newPassword: string): boolean {
    const participants = getParticipants();
    const idx = participants.findIndex((p) => p.email === email && p.password === oldPassword);
    if (idx === -1) return false;
    participants[idx].password = newPassword;
    saveParticipants(participants);
    return true;
}
export function resetPassword(email: string, newPassword: string): boolean {
    const participants = getParticipants();
    const idx = participants.findIndex((p) => p.email === email);
    if (idx === -1) return false;
    participants[idx].password = newPassword;
    saveParticipants(participants);
    return true;
}