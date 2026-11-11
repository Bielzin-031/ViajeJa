export interface TravelPackage {
  id: number;
  title: string;
  destination: string;
  country: string;
  duration: string;
  price: number;
  category: 'Praia' | 'Aventura' | 'Cultura' | 'Natureza';
  image: string;
  description: string;
  highlights: string[];
  featured?: boolean;
}
