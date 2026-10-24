import { Product, ShowcaseItem, ScentFamily, PartnerLogo, FaqItem, SiteSettings } from '../types';

export const WA_NUMBER = '6285743243378';

export const DEFAULT_SETTINGS: SiteSettings = {
  whatsapp: '6285743243378',
  email: 'scentia.ultimacos@gmail.com',
  address: 'Grand Harvest, Soho HO No.23, Kebraon, Karangpilang, Surabaya 60222',
  hours: 'Senin – Sabtu · 09.00 – 17.00 WIB',
  brand_name: 'Scentia Ultimacos',
  brand_tagline: 'by King Parfum Indonesia',
  company_logo: '/favicon.png',
  hero_image: '',
  kingparfum_name: 'King Parfum Indonesia',
  kingparfum_tagline: 'Pabrik Maklon Parfum Surabaya',
  kingparfum_about: 'King Parfum Indonesia adalah pabrik maklon parfum di Surabaya dengan laboratorium fragrance sendiri. Berdiri sejak 2015, kami telah memproduksi ratusan batch untuk brand lokal dengan standar QC ketat dan legalitas BPOM, Halal MUI, dan CPKB.',
  kingparfum_capacity: '50.000+',
  kingparfum_capacity_unit: 'pcs/bulan',
  kingparfum_year: '2015',
  kingparfum_batches: '200+',
  kingparfum_certifications: 'BPOM · Halal MUI · CPKB',
  kingparfum_factory_address: 'Surabaya, Jawa Timur'
};

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Woody Amber Signature',
    category: 'EDP',
    size: '50 ml',
    scent_family: 'Woody',
    description: 'Aroma kayu cendana dan oud hangat dengan sentuhan amber resin mewah. Elegan, karismatik, dan tahan 8–12 jam.',
    image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
    active: true
  },
  {
    id: 2,
    name: 'Floral Fresh Elegance',
    category: 'EDP',
    size: '50 ml',
    scent_family: 'Floral',
    description: 'Paduan bunga mawar Damask, melati Grasse, dan citrus bergamot segar. Feminin, anggun, dan memikat untuk pemakaian harian.',
    image_url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80',
    active: true
  },
  {
    id: 3,
    name: 'Citrus Aromatic Daily',
    category: 'EDT',
    size: '30 ml',
    scent_family: 'Fresh',
    description: 'Citrus Italia yang bersih dan menyegarkan dipadu dengan crushed mint dan cedarwood. Sangat ideal untuk aktivitas outdoor tropis.',
    image_url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80',
    active: true
  },
  {
    id: 4,
    name: 'Sweet Vanilla Mist',
    category: 'Body Mist',
    size: '100 ml',
    scent_family: 'Gourmand',
    description: 'Vanilla Bourbon manis lembut dengan sentuhan salted caramel dan almond blossom. Ringan dan nyaman disemprot berulang kali.',
    image_url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
    active: true
  },
  {
    id: 5,
    name: 'Parfum Non Alkohol Sensitive',
    category: 'Parfum Non Alkohol',
    size: '50 ml',
    scent_family: 'Floral',
    description: 'Formula wewangian berbahan dasar air (water-based) tanpa alkohol. Halal, lembut di kulit sensitif, dan tidak lengket.',
    image_url: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=600&q=80',
    active: true
  },
  {
    id: 6,
    name: 'Oriental Spice Intense',
    category: 'EDP',
    size: '100 ml',
    scent_family: 'Oriental',
    description: 'Rempah oriental eksotis dengan kayu gaharu, tonka bean, dan smoky vanilla. Menghadirkan kesan misterius dan penuh wibawa untuk acara malam.',
    image_url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
    active: true
  },
  {
    id: 7,
    name: 'Pomade Classic Strong Hold',
    category: 'Pomade',
    size: '80 gr',
    scent_family: 'Woody',
    description: 'Hair pomade water-based & oil-based dengan aroma maskulin tahan lama. Menata rambut rapi berkilau tanpa merusak kulit kepala.',
    image_url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
    active: true
  },
  {
    id: 8,
    name: 'Hair Tonic Fresh Nourishing',
    category: 'Hair Tonic',
    size: '100 ml',
    scent_family: 'Fresh',
    description: 'Hair tonic penyegar kulit kepala beraroma citrus herbal dengan ekstrak alami penutrisi akar rambut dan pengurang ketombe.',
    image_url: 'https://images.unsplash.com/photo-1608248597359-59754668b577?auto=format&fit=crop&w=600&q=80',
    active: true
  }
];

export const DEFAULT_SHOWCASE_ITEMS: ShowcaseItem[] = [
  // Botol
  {
    id: 101,
    item_type: 'botol',
    name: 'Flint Glass Luxury 50 ml',
    category: 'Kaca Bening Tebal',
    size: '50 ml · Collar 15mm',
    material: 'High Grade Flint Glass + Gold Pump',
    description: 'Botol kaca premium dengan dasar tebal (heavy base) khas parfum niche Eropa. Dilengkapi crimp spray atomizer ultra-fine mist.',
    image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 102,
    item_type: 'botol',
    name: 'Matte Black Cylinder 50/100 ml',
    category: 'Coated Matte Glass',
    size: '50 ml & 100 ml',
    material: 'Kaca Coating Doff + Magnet Cap',
    description: 'Finishing hitam doff elegan anti-sidik jari dengan tutup magnetik klik tegas. Sangat cocok untuk brand parfum maskulin atau unisex.',
    image_url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 103,
    item_type: 'botol',
    name: 'Amber Glass Vintage 30 ml',
    category: 'Apothecary Amber',
    size: '30 ml',
    material: 'Kaca Amber UV-Protection',
    description: 'Warna botol amber cokelat klasik yang melindungi molekul minyak wangi dari degradasi sinar matahari. Populer untuk parfum artisan.',
    image_url: 'https://images.unsplash.com/photo-1608248597359-59754668b577?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 104,
    item_type: 'botol',
    name: 'Crystal Square Minimalist 50 ml',
    category: 'Kaca Persegi Kristal',
    size: '50 ml',
    material: 'Crystal Clear Glass + Akrilik Cap',
    description: 'Desain kubus geometris modern dengan sudut presisi. Permukaan rata sangat ideal untuk penempelan label sticker metalized.',
    image_url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 105,
    item_type: 'botol',
    name: 'Pocket Atomizer Travel 10 ml',
    category: 'Aluminium Travel Spray',
    size: '10 ml Pocket Size',
    material: 'Casing Aluminium Anodized + Tabung Kaca',
    description: 'Format mini ramping praktis dibawa di saku atau tas. Favorit untuk paket bundle discovery set atau tester komersial.',
    image_url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=500&q=80'
  },

  // Kemasan
  {
    id: 201,
    item_type: 'kemasan',
    name: 'Luxury Rigid Hardbox with EVA Foam',
    category: 'Hardbox Premium',
    size: 'Custom sesuai botol',
    material: 'Greyboard 1200gsm + Art Paper Doff + Busa EVA',
    description: 'Kemasan box kaku berbobot mantap dengan dudukan busa velvet presisi. Menghadirkan unboxing experience kelas atas bagi konsumen Anda.',
    image_url: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 202,
    item_type: 'kemasan',
    name: 'Eco Kraft Drawer Slide Box',
    category: 'Kraft Ramah Lingkungan',
    size: '12 × 6 × 4 cm',
    material: 'Kraft Paper Recycled 350gsm',
    description: 'Kotak model laci tarik berbahan kertas daur ulang berserat alami. Menegaskan identitas brand natural, ramah lingkungan, dan organik.',
    image_url: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 203,
    item_type: 'kemasan',
    name: 'Soft Touch Tuck Box with Gold Foil',
    category: 'Folded Box Modern',
    size: 'Standar botol 30/50ml',
    material: 'Ivory 350gsm + Laminasi Beludru Soft Touch',
    description: 'Sentuhan permukaan selembut sutra saat dipegang, dipercantik dengan aksen hot stamping foil emas atau perak di logo brand.',
    image_url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 204,
    item_type: 'kemasan',
    name: 'Cylindrical Tube Box Velvet',
    category: 'Tabung Silinder Kaku',
    size: 'Diameter 5cm × Tinggi 14cm',
    material: 'Spiral Wound Tube + Interior Paper',
    description: 'Format kemasan tabung silinder unik yang membedakan produk Anda di rak etalase toko maupun display foto marketplace.',
    image_url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80'
  },

  // Sticker
  {
    id: 301,
    item_type: 'sticker',
    name: 'Hot Stamped Metallic Gold Label',
    category: 'Foil Stamping Emas',
    size: 'Custom Die-cut',
    material: 'Vinyl Doff + Foil Emas Timbul',
    description: 'Label mewah dengan kilau logam emas pantul cahaya tinggi. Tahan cipratan alkohol, minyak wangi, dan air.',
    image_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 302,
    item_type: 'sticker',
    name: 'Ultra-Clear Transparent Label',
    category: 'Transparan No-Label Look',
    size: 'Custom Die-cut',
    material: 'Clear BOPP Film + Sablon Tinta Putih Pekat',
    description: 'Sticker transparan berdaya rekat kuat yang memberikan efek sablon langsung di atas kaca botol (direct printing effect).',
    image_url: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 303,
    item_type: 'sticker',
    name: 'Textured Cotton Linen Paper Label',
    category: 'Kertas Bertekstur Artisan',
    size: 'Custom Die-cut',
    material: 'Natural Linen Laid Paper + Varnish Anti-Air',
    description: 'Serat kertas linen yang kaya tekstur sentuh, sering digunakan pada parfum niche mewah Eropa dan label wine berkelas.',
    image_url: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=80'
  }
];

export const DEFAULT_FAMILIES: ScentFamily[] = [
  {
    id: 1,
    name: 'Floral',
    description: 'Bunga-bungaan segar, anggun, dan feminin dengan nuansa romantis.',
    image_url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=500&q=80',
    ingredients: [
      { name: 'Rose Damascena', description: 'Mawar klasik Grasse yang berkarakter elegan dan tahan lama.' },
      { name: 'Sambac Jasmine', description: 'Melati tropis dengan wangi sensual, manis, dan memikat.' },
      { name: 'Lily of the Valley', description: 'Aroma bunga putih segar berangin yang lembut.' },
      { name: 'Neroli Blossom', description: 'Bunga jeruk beraroma segar dengan sentuhan citrus manis.' },
      { name: 'Ylang-Ylang', description: 'Bunga eksotis dengan nuansa creamy tropis mewah.' }
    ]
  },
  {
    id: 2,
    name: 'Woody',
    description: 'Aroma kayu-kayuan hangat, earthy, berkarakter dalam, dan penuh wibawa.',
    image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=500&q=80',
    ingredients: [
      { name: 'Mysore Sandalwood', description: 'Kayu cendana lembut, creamy, dan memberi ketenangan abadi.' },
      { name: 'Virginia Cedarwood', description: 'Kayu cedar beraroma kering, bersih, dan maskulin tegas.' },
      { name: 'Agarwood / Oud', description: 'Minyak gaharu mewah yang mendalam, smokey, dan berbobot prestise.' },
      { name: 'Haitian Vetiver', description: 'Akar wangi dengan sentuhan earthy hijau dan aroma tanah basah.' },
      { name: 'Indonesian Patchouli', description: 'Nilam Nusantara berkualitas ekspor pengunci keawetan parfum.' }
    ]
  },
  {
    id: 3,
    name: 'Oriental',
    description: 'Rempah sensual, amber resin eksotis, dan kehangatan balsamik yang misterius.',
    image_url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=500&q=80',
    ingredients: [
      { name: 'Golden Amber Resin', description: 'Aroma amber keemasan hangat yang sangat disukai untuk wewangian malam.' },
      { name: 'Madagascar Vanilla', description: 'Vanilla alami manis berpadu gurih tanpa terasa buatan.' },
      { name: 'Tonka Bean', description: 'Paduan aroma almond, kayu manis, dan vanila lembut.' },
      { name: 'White Musk', description: 'Wangi kulit bersih yang melekat intim dan memperpanjang longevity.' },
      { name: 'Somali Frankincense', description: 'Kemenyan oriental suci dengan aroma smokey aromatik.' }
    ]
  },
  {
    id: 4,
    name: 'Fresh',
    description: 'Citrus berkilau, embun pagi, dedaunan hijau, dan angin laut akuatik.',
    image_url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=500&q=80',
    ingredients: [
      { name: 'Calabrian Bergamot', description: 'Citrus bangsawan Italia yang menyegarkan sebagai pembuka top note.' },
      { name: 'Sicilian Lemon', description: 'Jeruk lemon segar membangkitkan semangat dan rasa bersih ceria.' },
      { name: 'Crisp Marine Aquatics', description: 'Nuansa hembusan angin laut samudra yang sejuk menenangkan.' },
      { name: 'Spearmint Leaf', description: 'Daun mint dingin yang memberi sensasi kesejukan instan.' },
      { name: 'Green Tea Essence', description: 'Teh hijau lembut yang menyeimbangkan aroma tropis.' }
    ]
  },
  {
    id: 5,
    name: 'Gourmand',
    description: 'Aroma manis menggoda yang mengingatkan pada pastry, kopi, dan cokelat artisan.',
    image_url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=500&q=80',
    ingredients: [
      { name: 'Dark Roasted Coffee', description: 'Aroma seduhan biji kopi hitam sangrai yang modern dan berenergi.' },
      { name: 'Belgian Chocolate', description: 'Cokelat hitam lezat berkarakter manis pekat dan berkelas.' },
      { name: 'Salted Caramel', description: 'Karamel mentega dengan sedikit kristal garam laut yang gurih.' },
      { name: 'Toasted Hazelnut', description: 'Kacang hazelnut panggang dengan aroma nutty yang hangat.' }
    ]
  }
];

export const DEFAULT_PARTNERS: PartnerLogo[] = [
  {
    id: 1,
    name: 'AURÉLIA',
    industry: 'Luxury Fragrance & Beauty',
    website_url: 'https://scentia.id/',
    description: 'Brand parfum lokal Surabaya dengan konsep haute perfumery. Memproduksi seri EDP 50 ml bertema botanical florals di King Parfum Indonesia.',
    image_url: null,
    products: [
      {
        id: 11,
        partner_id: 1,
        name: 'Aurélia Fleur Éternelle',
        category: 'EDP 50 ml',
        description: 'Paduan mawar Grasse dan white musk dengan botol kaca kristal tutup emas.',
        image_url: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 12,
        partner_id: 1,
        name: 'Aurélia Soleil D’Or',
        category: 'EDP 50 ml',
        description: 'Aroma bergamot citrus dan amber hangat untuk pemakaian harian mewah.',
        image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 2,
    name: 'NOIR & CO',
    industry: 'Men’s Grooming & Lifestyle',
    website_url: 'https://scentia.id/',
    description: 'Brand lifestyle pria berkarakter maskulin modern. Memproduksi parfum EDP woody leather dan pomade strong hold.',
    image_url: null,
    products: [
      {
        id: 21,
        partner_id: 2,
        name: 'Noir Signature Intense',
        category: 'EDP 100 ml',
        description: 'Botol matte black 100 ml dengan aroma oud, kulit, dan tembakau manis.',
        image_url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80'
      },
      {
        id: 22,
        partner_id: 2,
        name: 'Noir Water-Based Pomade',
        category: 'Pomade 80 gr',
        description: 'Pomade aroma sandalwood cedarwood tahan tatanan rambut 24 jam.',
        image_url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 3,
    name: 'VELVETO',
    industry: 'Boutique Cosmetics',
    website_url: 'https://scentia.id/',
    description: 'Lini kosmetik independen yang mengembangkan parfum aroma vanilla gourmand dengan kemasan box velvet eksklusif.',
    image_url: null,
    products: [
      {
        id: 31,
        partner_id: 3,
        name: 'Velveto Dulce de Vanilla',
        category: 'EDP 50 ml',
        description: 'Aroma vanilla bourbon dan praline manis dengan box beludru soft touch.',
        image_url: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 4,
    name: 'MAISON KIA',
    industry: 'Artisan Perfumery',
    website_url: 'https://scentia.id/',
    description: 'Studio wewangian berfokus pada rempah Nusantara dan nilam ekspor kualitas tinggi.',
    image_url: null,
    products: [
      {
        id: 41,
        partner_id: 4,
        name: 'Maison Kia Java Patchouli',
        category: 'Extrait de Parfum 30 ml',
        description: 'Konsentrasi tinggi Extrait 35% dengan botol amber apothecary klasik.',
        image_url: 'https://images.unsplash.com/photo-1608248597359-59754668b577?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 5,
    name: 'SILLAGE',
    industry: 'Modern Athleisure',
    website_url: 'https://scentia.id/',
    description: 'Wewangian akuatik sporty tahan keringat untuk generasi aktif perkotaan.',
    image_url: null,
    products: [
      {
        id: 51,
        partner_id: 5,
        name: 'Sillage Aqua Kinetic',
        category: 'EDT 100 ml',
        description: 'Aroma laut samudra dan spearmint dingin dengan botol ramping travel spray.',
        image_url: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 6,
    name: 'AROMÉ',
    industry: 'Hospitality & Spa',
    website_url: 'https://scentia.id/',
    description: 'Penyedia amenities dan signature scent untuk resort bintang 5 dan spa premium di Bali & Surabaya.',
    image_url: null,
    products: [
      {
        id: 61,
        partner_id: 6,
        name: 'Aromé Sanctuary Mist',
        category: 'Body & Linen Mist 150 ml',
        description: 'Formula non-alkohol lembut dengan minyak atsiri serai wangi dan lavender.',
        image_url: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 7,
    name: 'ESSENCE.ID',
    industry: 'Gen-Z Fragrance',
    website_url: 'https://scentia.id/',
    description: 'Parfum viral anak muda berharga terjangkau dengan varian buah manis ceria.',
    image_url: null,
    products: [
      {
        id: 71,
        partner_id: 7,
        name: 'Essence Peach Bliss',
        category: 'EDT 30 ml',
        description: 'Aroma peach segar dan berry manis dengan kemasan pouch warna-warni.',
        image_url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  {
    id: 8,
    name: 'FUME STUDIO',
    industry: 'Bespoke Collections',
    website_url: 'https://scentia.id/',
    description: 'Private collection eksklusif pesanan korporat untuk cinderamata VIP dan hampers eksekutif.',
    image_url: null,
    products: [
      {
        id: 81,
        partner_id: 8,
        name: 'Fume Prestige Black Oud',
        category: 'EDP 50 ml',
        description: 'Kemasan hardbox kaku dengan hot stamping logo gold foil timbul.',
        image_url: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
];

export const DEFAULT_FAQS: FaqItem[] = [
  {
    question: 'Apa itu King Parfum Indonesia dan apa hubungannya dengan Scentia Ultimacos?',
    answer: 'King Parfum Indonesia adalah pabrik maklon parfum di Surabaya yang berdiri sejak 2015 dengan fasilitas produksi dan laboratorium fragrance in-house. Scentia Ultimacos adalah unit layanan marketing, konsultasi formulasi, dan private label resmi dari King Parfum Indonesia yang membantu pemilik brand dari tahap perancangan konsep hingga produk siap jual.'
  },
  {
    question: 'Berapa jumlah minimal pesanan (MOQ) untuk maklon parfum?',
    answer: 'MOQ standar kami mulai dari 250 pcs untuk kemasan custom, dengan tier 500 pcs dan 1000 pcs untuk efisiensi biaya produksi maksimal. Khusus bulan ini, tersedia kuota promo 100 pcs untuk brand baru yang ingin menguji respon pasar.'
  },
  {
    question: 'Apakah formula parfum diracik eksklusif untuk brand saya?',
    answer: 'Ya, 100% eksklusif. Formula custom Anda diracik oleh tim perfumer profesional di laboratorium King Parfum Indonesia dan didaftarkan hak eksklusifnya untuk brand Anda sehingga tidak akan dijual atau direplikasi ke brand lain.'
  },
  {
    question: 'Apakah bisa mendapatkan sampel aroma sebelum produksi massal?',
    answer: 'Tentu saja. Anda akan mendapatkan sampel aroma (tester lab) untuk dicoba aroma top-heart-base note serta daya tahannya. Anda berhak memberikan masukan dan revisi formula hingga aroma final disetujui sebelum naik cetak dan produksi massal.'
  },
  {
    question: 'Berapa lama estimasi waktu proses produksi dari awal hingga selesai?',
    answer: 'Waktu produksi standar berkisar 3–6 minggu setelah sampel formula dan desain kemasan disetujui. Tim kami selalu memperbarui timeline kerja secara transparan di setiap tahapan (maceration, filling, crimping, boxing, QC testing).'
  },
  {
    question: 'Apakah Scentia & King Parfum mendampingi pengurusan izin BPOM & Halal?',
    answer: 'Ya. Kami menyediakan pendampingan legalitas terintegrasi untuk pengurusan izin edar BPOM RI, sertifikasi Halal MUI / BPJPH, serta memastikan formula sesuai standar Cara Pembuatan Kosmetika yang Baik (CPKB).'
  },
  {
    question: 'Apakah bisa memproduksi selain parfum cair alkohol biasa?',
    answer: 'Bisa. Fasilitas pabrik King Parfum Indonesia juga memproduksi Parfum Non Alkohol (water-based), Pomade rambut (oil-based & water-based), Hair Tonic penumbuh rambut, Body Mist, serta Pillow & Linen Spray.'
  },
  {
    question: 'Bagaimana cara berkonsultasi atau mengunjungi pabrik langsung di Surabaya?',
    answer: 'Anda dapat menghubungi tim marketing kami via WhatsApp di 0857-4324-3378 untuk menjadwalkan konsultasi online atau membuat janji temu langsung di kantor & fasilitas kami di Grand Harvest, Soho HO No.23, Kebraon, Karangpilang, Surabaya.'
  }
];
