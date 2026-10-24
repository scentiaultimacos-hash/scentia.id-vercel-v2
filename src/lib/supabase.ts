import { createClient } from '@supabase/supabase-js';
import { Product, ShowcaseItem, ScentFamily, PartnerLogo, FaqItem, SiteSettings } from '../types';
import {
  DEFAULT_PRODUCTS,
  DEFAULT_SHOWCASE_ITEMS,
  DEFAULT_FAMILIES,
  DEFAULT_PARTNERS,
  DEFAULT_FAQS,
  DEFAULT_SETTINGS
} from './constants';

export const SUPABASE_URL = 'https://tjoyzlgdkhkhiggmealh.supabase.co';
export const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqb3l6bGdka2hraGlnZ21lYWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyOTA2MTMsImV4cCI6MjEwNjg2NjYxM30.72127lDKmBDDB0vE-zgB2BLllCRZns1kb8x4zMkzMi0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

export async function fetchProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('catalog_products')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return DEFAULT_PRODUCTS;
    }
    return data;
  } catch {
    return DEFAULT_PRODUCTS;
  }
}

export async function fetchShowcaseItems(): Promise<ShowcaseItem[]> {
  try {
    const { data, error } = await supabase
      .from('catalog_items')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return DEFAULT_SHOWCASE_ITEMS;
    }
    return data;
  } catch {
    return DEFAULT_SHOWCASE_ITEMS;
  }
}

export async function fetchScentFamilies(): Promise<ScentFamily[]> {
  try {
    const { data: families, error } = await supabase
      .from('scent_families')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !families || families.length === 0) {
      return DEFAULT_FAMILIES;
    }

    const { data: ingredients } = await supabase
      .from('ingredients')
      .select('*');

    return families.map(f => ({
      ...f,
      ingredients: (ingredients || []).filter(i => i.family_id === f.id)
    }));
  } catch {
    return DEFAULT_FAMILIES;
  }
}

export async function fetchPartners(): Promise<PartnerLogo[]> {
  try {
    const { data: logos, error } = await supabase
      .from('portfolio_logos')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !logos || logos.length === 0) {
      return DEFAULT_PARTNERS;
    }

    const { data: products } = await supabase
      .from('partner_products')
      .select('*')
      .eq('active', true)
      .order('sort_order', { ascending: true });

    return logos.map(l => ({
      ...l,
      products: (products || []).filter(p => p.partner_id === l.id)
    }));
  } catch {
    return DEFAULT_PARTNERS;
  }
}

export async function fetchFaqs(): Promise<FaqItem[]> {
  try {
    const { data, error } = await supabase
      .from('faq')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error || !data || data.length === 0) {
      return DEFAULT_FAQS;
    }
    return data;
  } catch {
    return DEFAULT_FAQS;
  }
}

export async function fetchSettings(): Promise<SiteSettings> {
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('*');

    if (error || !data || data.length === 0) {
      return DEFAULT_SETTINGS;
    }

    const map = Object.fromEntries(data.map(s => [s.key, s.value]));
    return {
      whatsapp: map.whatsapp || DEFAULT_SETTINGS.whatsapp,
      email: map.email || DEFAULT_SETTINGS.email,
      address: map.address || DEFAULT_SETTINGS.address,
      hours: map.hours || DEFAULT_SETTINGS.hours,
      brand_name: map.brand_name || DEFAULT_SETTINGS.brand_name,
      brand_tagline: map.brand_tagline || DEFAULT_SETTINGS.brand_tagline,
      company_logo: map.company_logo || DEFAULT_SETTINGS.company_logo,
      hero_image: map.hero_image || DEFAULT_SETTINGS.hero_image,
      kingparfum_name: map.kingparfum_name || DEFAULT_SETTINGS.kingparfum_name,
      kingparfum_tagline: map.kingparfum_tagline || DEFAULT_SETTINGS.kingparfum_tagline,
      kingparfum_about: map.kingparfum_about || DEFAULT_SETTINGS.kingparfum_about,
      kingparfum_capacity: map.kingparfum_capacity || DEFAULT_SETTINGS.kingparfum_capacity,
      kingparfum_capacity_unit: map.kingparfum_capacity_unit || DEFAULT_SETTINGS.kingparfum_capacity_unit,
      kingparfum_year: map.kingparfum_year || DEFAULT_SETTINGS.kingparfum_year,
      kingparfum_batches: map.kingparfum_batches || DEFAULT_SETTINGS.kingparfum_batches,
      kingparfum_certifications: map.kingparfum_certifications || DEFAULT_SETTINGS.kingparfum_certifications,
      kingparfum_factory_address: map.kingparfum_factory_address || DEFAULT_SETTINGS.kingparfum_factory_address
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export async function sendSampleRequest(payload: {
  name: string;
  whatsapp: string;
  address: string;
  notes?: string;
  product_ids?: (number | string)[];
}) {
  try {
    return await supabase.from('sample_requests').insert([payload]);
  } catch (err) {
    console.warn('Sample request DB insert skipped:', err);
    return { error: null };
  }
}

export async function sendBrief(payload: {
  name: string;
  brand_name?: string;
  target_market: string;
  scent_character: string;
  tier: string;
  size: string;
  timeline: string;
  notes?: string;
}) {
  try {
    return await supabase.from('briefs').insert([payload]);
  } catch (err) {
    console.warn('Brief DB insert skipped:', err);
    return { error: null };
  }
}
