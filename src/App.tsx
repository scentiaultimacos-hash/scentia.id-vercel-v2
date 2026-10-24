/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Product,
  ShowcaseItem,
  ScentFamily,
  PartnerLogo,
  PartnerProduct,
  FaqItem,
  SiteSettings
} from './types';
import {
  fetchProducts,
  fetchShowcaseItems,
  fetchScentFamilies,
  fetchPartners,
  fetchFaqs,
  fetchSettings
} from './lib/supabase';
import {
  DEFAULT_PRODUCTS,
  DEFAULT_SHOWCASE_ITEMS,
  DEFAULT_FAMILIES,
  DEFAULT_PARTNERS,
  DEFAULT_FAQS,
  DEFAULT_SETTINGS
} from './lib/constants';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsPabrik } from './components/StatsPabrik';
import { MarqueeLogos } from './components/MarqueeLogos';
import { LayananSection } from './components/LayananSection';
import { KatalogSection } from './components/KatalogSection';
import { ShowcaseSection } from './components/ShowcaseSection';
import { SimulasiSection } from './components/SimulasiSection';
import { AromaSection } from './components/AromaSection';
import { LabSection } from './components/LabSection';
import { PartnerSection } from './components/PartnerSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { SampleModal } from './components/SampleModal';
import { InquiryModal } from './components/InquiryModal';
import { PartnerDetailModal } from './components/PartnerDetailModal';
import { LightboxModal } from './components/LightboxModal';
import { AdminHubModal } from './components/AdminHubModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

export default function App() {
  // Application State
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [products, setProducts] = useState<Product[]>(DEFAULT_PRODUCTS);
  const [showcaseItems, setShowcaseItems] = useState<ShowcaseItem[]>(DEFAULT_SHOWCASE_ITEMS);
  const [families, setFamilies] = useState<ScentFamily[]>(DEFAULT_FAMILIES);
  const [partners, setPartners] = useState<PartnerLogo[]>(DEFAULT_PARTNERS);
  const [faqs, setFaqs] = useState<FaqItem[]>(DEFAULT_FAQS);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Modal Control State
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedProductForSample, setSelectedProductForSample] = useState<Product | null>(null);
  const [selectedFamilyForSample, setSelectedFamilyForSample] = useState<string | null>(null);

  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedInquiryItem, setSelectedInquiryItem] = useState<ShowcaseItem | null>(null);

  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<PartnerLogo | null>(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxProducts, setLightboxProducts] = useState<PartnerProduct[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Initial Data Fetching from Supabase
  useEffect(() => {
    async function loadInitialData() {
      try {
        const [
          fetchedSettings,
          fetchedProducts,
          fetchedShowcase,
          fetchedFamilies,
          fetchedPartners,
          fetchedFaqs
        ] = await Promise.all([
          fetchSettings(),
          fetchProducts(),
          fetchShowcaseItems(),
          fetchScentFamilies(),
          fetchPartners(),
          fetchFaqs()
        ]);

        if (fetchedSettings) setSettings(fetchedSettings);
        if (fetchedProducts?.length) setProducts(fetchedProducts);
        if (fetchedShowcase?.length) setShowcaseItems(fetchedShowcase);
        if (fetchedFamilies?.length) setFamilies(fetchedFamilies);
        if (fetchedPartners?.length) setPartners(fetchedPartners);
        if (fetchedFaqs?.length) setFaqs(fetchedFaqs);
      } catch (err) {
        console.warn('Initial data load completed with default datasets:', err);
      }
    }

    loadInitialData();
  }, []);

  // Intersection Observer for Navigation Spy
  useEffect(() => {
    const sectionIds = [
      'home',
      'pabrik',
      'layanan',
      'katalog',
      'showcase',
      'simulasi',
      'aroma',
      'lab',
      'portofolio',
      'faq',
      'kontak'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handlers
  const handleOpenSample = (productOrFamily?: Product | string) => {
    if (typeof productOrFamily === 'string') {
      setSelectedFamilyForSample(productOrFamily);
      setSelectedProductForSample(null);
    } else if (productOrFamily) {
      setSelectedProductForSample(productOrFamily);
      setSelectedFamilyForSample(null);
    } else {
      setSelectedProductForSample(null);
      setSelectedFamilyForSample(null);
    }
    setSampleModalOpen(true);
  };

  const handleOpenInquiry = (item: ShowcaseItem) => {
    setSelectedInquiryItem(item);
    setInquiryModalOpen(true);
  };

  const handleOpenPartnerModal = (partner: PartnerLogo) => {
    setSelectedPartner(partner);
    setPartnerModalOpen(true);
  };

  const handleOpenLightbox = (prods: PartnerProduct[], index: number) => {
    setLightboxProducts(prods);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigateToShowcase = () => {
    const el = document.getElementById('showcase');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFA] text-[#1C1A17] relative">
      
      {/* 1. Header & Navigation */}
      <Navbar
        settings={settings}
        onOpenSample={() => handleOpenSample()}
        onOpenAdmin={() => setAdminModalOpen(true)}
        activeSection={activeSection}
      />

      {/* 2. Hero Section */}
      <Hero
        settings={settings}
        onOpenSample={() => handleOpenSample()}
      />

      {/* 3. Factory Capabilities & Credentials */}
      <StatsPabrik
        settings={settings}
        onOpenSample={() => handleOpenSample()}
      />

      {/* 4. Client Brand Marquee */}
      <MarqueeLogos
        partners={partners}
        onSelectPartner={handleOpenPartnerModal}
      />

      {/* 5. Service Pillars */}
      <LayananSection
        onOpenSample={() => handleOpenSample()}
      />

      {/* 6. Product Catalog */}
      <KatalogSection
        products={products}
        onOpenSample={handleOpenSample}
        onNavigateToShowcase={handleNavigateToShowcase}
      />

      {/* 7. Showcase (Botol, Kemasan, Sticker) */}
      <ShowcaseSection
        items={showcaseItems}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* 8. Cost Estimator & Brief Builder */}
      <SimulasiSection
        whatsappNumber={settings.whatsapp}
      />

      {/* 9. Scent Quiz & Raw Notes Explorer */}
      <AromaSection
        families={families}
        onOpenSample={(fam) => handleOpenSample(fam)}
        whatsappNumber={settings.whatsapp}
      />

      {/* 10. Laboratory & 4-Step Production Sequence */}
      <LabSection />

      {/* 11. Client Brand Partners Portfolio */}
      <PartnerSection
        partners={partners}
        onSelectPartner={handleOpenPartnerModal}
      />

      {/* 12. Frequently Asked Questions */}
      <FaqSection
        faqs={faqs}
        whatsappNumber={settings.whatsapp}
      />

      {/* 13. Direct Contact & Office Location */}
      <ContactSection
        settings={settings}
      />

      {/* 14. Footer with Sitemap and Legal Entity Details */}
      <Footer
        settings={settings}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloat
        whatsappNumber={settings.whatsapp}
      />

      {/* Interactive Modals */}
      <SampleModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        selectedProduct={selectedProductForSample}
        selectedFamily={selectedFamilyForSample}
        whatsappNumber={settings.whatsapp}
      />

      <InquiryModal
        item={selectedInquiryItem}
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        whatsappNumber={settings.whatsapp}
      />

      <PartnerDetailModal
        partner={selectedPartner}
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
        onOpenLightbox={handleOpenLightbox}
      />

      <LightboxModal
        products={lightboxProducts}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      <AdminHubModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        settings={settings}
        onUpdateSettings={(newSt) => setSettings(newSt)}
      />

    </div>
  );
}
