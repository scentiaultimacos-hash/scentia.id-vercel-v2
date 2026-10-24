export interface Product {
  id: number;
  name: string;
  category: string;
  size: string;
  scent_family: string;
  description: string;
  image_url: string | null;
  active?: boolean;
  sort_order?: number;
}

export interface ShowcaseItem {
  id: number;
  item_type: 'botol' | 'kemasan' | 'sticker';
  name: string;
  category: string;
  size: string;
  material: string;
  description: string;
  image_url: string | null;
  active?: boolean;
  sort_order?: number;
}

export interface ScentIngredient {
  id?: number;
  family_id?: number;
  name: string;
  description: string;
}

export interface ScentFamily {
  id: number;
  name: string;
  description: string;
  image_url?: string | null;
  sort_order?: number;
  ingredients?: ScentIngredient[];
}

export interface PartnerProduct {
  id: number;
  partner_id: number;
  name: string;
  category: string;
  description: string;
  image_url: string;
  active?: boolean;
  sort_order?: number;
}

export interface PartnerLogo {
  id: number;
  name: string;
  industry?: string | null;
  website_url?: string | null;
  description?: string | null;
  image_url?: string | null;
  active?: boolean;
  sort_order?: number;
  products?: PartnerProduct[];
}

export interface FaqItem {
  id?: number;
  question: string;
  answer: string;
  category?: string;
  sort_order?: number;
}

export interface SiteSettings {
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  brand_name: string;
  brand_tagline: string;
  company_logo: string;
  hero_image: string;
  kingparfum_name: string;
  kingparfum_tagline: string;
  kingparfum_about: string;
  kingparfum_capacity: string;
  kingparfum_capacity_unit: string;
  kingparfum_year: string;
  kingparfum_batches: string;
  kingparfum_certifications: string;
  kingparfum_factory_address: string;
}
