export interface WeddingCar {
  id: string;
  name: string;
  category: 'sedan' | 'suv' | 'classic_convertible';
  tagline: string;
  description: string;
  images: string[];
  specs: {
    seating: number;
    color: string;
    decorIncluded: boolean;
    fuelType: string;
    features: string[];
  };
  basePriceLkr: number; // For interactive LKR calculator
  perExtraKmLkr: number;
  perExtraHourLkr: number;
  sriLankanVibe: string; // Tailored description matching Sri Lankan wedding traditions
}

export interface BookingRequest {
  carId: string;
  weddingDate: string;
  groomName: string;
  brideName: string;
  contactNumber: string;
  pickupLocation: string;
  venueLocation: string;
  durationHours: number;
  expectedDistanceKm: number;
  decorStyle: string;
  notes?: string;
}
