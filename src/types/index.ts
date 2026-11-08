export type MenuCategory = 
  | 'starters'
  | 'mains'
  | 'pasta'
  | 'seafood'
  | 'desserts'
  | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // in NGN
  category: MenuCategory;
  categoryLabel: string;
  image: string;
  gallery?: string[];
  dietary: string[];
  ingredients: string[];
  chefNotes?: string;
  pairingRecommendation?: string;
  isSignature?: boolean;
  calories?: string;
  preparationTime?: string;
}

export interface Reservation {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingArea: 'Main Dining Room' | 'Waterfront Terrace' | 'Chef\'s Counter' | 'Private Salon';
  specialRequests?: string;
  occasion?: 'Dinner' | 'Birthday' | 'Anniversary' | 'Business Dining' | 'Date Night' | 'Celebration';
  createdAt: string;
  status: 'Confirmed' | 'Pending';
}

export interface ContactInquiry {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  inquiryType: 'General Inquiries' | 'Private Dining & Events' | 'Press & Media' | 'Sommelier Tasting';
  message: string;
  createdAt: string;
}
