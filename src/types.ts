export type ServiceCategory = 'all' | 'makeup' | 'lashes' | 'wigs' | 'bridal';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'makeup' | 'lashes' | 'wigs' | 'bridal';
  price: number;
  duration: string;
  shortDesc: string;
  included: string[];
  popular?: boolean;
  requiresWigDropoff?: boolean;
  image?: string;
}

export type LocationType = 'studio' | 'house_call_town' | 'house_call_location' | 'house_call_out_of_town';

export interface BookingEstimate {
  selectedServices: ServiceItem[];
  locationType: LocationType;
  customLocationNotes: string;
  guestCount: number; // for bridal / event group
  preferredDate: string;
  preferredTime: string;
  clientName: string;
  clientPhone: string;
  wigDropoffConfirmed: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'makeup' | 'lashes' | 'wigs' | 'bridal';
  description: string;
  image: string;
  tag: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  occasion: string;
  comment: string;
  rating: number;
  date: string;
  serviceType: string;
}
