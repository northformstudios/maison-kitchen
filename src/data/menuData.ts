import { MenuItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // STARTERS (4 items)
  // ==========================================
  {
    id: 'charred-octopus-suya',
    name: 'Charred Atlantic Octopus',
    tagline: 'Northern Spiced Yaji Crumb & Calamansi Emulsion',
    description: 'Slow-braised then wood-fire charred Atlantic octopus brushed with artisanal suya spice emulsion, served over smoked sweet potato purée, pickled shallots, and calamansi citrus gel.',
    price: 24500,
    category: 'starters',
    categoryLabel: 'Starters',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80'
    ],
    dietary: ['Gluten-Free', 'Pescatarian', "Chef's Signature"],
    ingredients: [
      'Atlantic Octopus Tentacle',
      'Handcrafted Yaji Pepper Blend',
      'Smoked Shaki Sweet Potato',
      'Fermented Lime Oil',
      'Micro Cilantro',
      'Charred Leek Ash'
    ],
    chefNotes: 'We gently poach the octopus for three hours with local aromatics before caramelizing it over mangrove wood embers. The contrast between smokiness and citrus is pure Lagos waterfront memory.',
    pairingRecommendation: 'Sancerre Blanc, Domaine Vacheron (Loire Valley, France)',
    isSignature: true,
    calories: '380 kcal',
    preparationTime: '15 mins'
  },
  {
    id: 'wagyu-tartare-locust-bean',
    name: 'A5 Wagyu Tartare & Iru Crisp',
    tagline: 'Fermented Locust Bean, Quail Yolk & Brioche',
    description: 'Hand-cut Japanese Wagyu tenderloin seasoned with cold-pressed sesame oil, fermented locust bean essence (iru), shaved black winter truffle, cured quail yolk, and toasted brioche shards.',
    price: 32000,
    category: 'starters',
    categoryLabel: 'Starters',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80'
    ],
    dietary: ['Halal-Friendly', "Chef's Signature"],
    ingredients: [
      'Miyazaki A5 Wagyu Tenderloin',
      'Fermented Locust Bean (Iru) Glaze',
      'Confit Quail Egg Yolk',
      'Périgord Black Truffle',
      'Artisanal House Brioche',
      'Shallot Caviar'
    ],
    chefNotes: 'The umami depth of traditional West African iru mirrors and amplifies the marbling richness of Miyazaki Wagyu beef.',
    pairingRecommendation: 'Billecart-Salmon Brut Rosé Champagne',
    isSignature: true,
    calories: '420 kcal',
    preparationTime: '12 mins'
  },
  {
    id: 'truffle-egusi-veloute',
    name: 'Silken Egusi & Truffle Velouté',
    tagline: 'Whipped Coconut, Wild Herbs & Crispy Seed Wafer',
    description: 'An airy, delicate velouté of slow-simmered toasted melon seeds, infused with white Alba truffle butter, poured tableside around wild foraged bitterleaf crisp and whipped coconut crema.',
    price: 18500,
    category: 'starters',
    categoryLabel: 'Starters',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Vegetarian', 'Gluten-Free'],
    ingredients: [
      'Toasted Indigenous Melon Seed (Egusi)',
      'Alba White Truffle Butter',
      'Coconut Milk Reduction',
      'Crispy Bitterleaf Veil',
      'Garlic Blossom',
      'Smoked Sea Salt'
    ],
    chefNotes: 'A radical reinterpretation of West African comfort soup into a Michelin-level French velouté texture.',
    pairingRecommendation: 'Chablis Premier Cru, Louis Latour (Burgundy, France)',
    isSignature: false,
    calories: '310 kcal',
    preparationTime: '10 mins'
  },
  {
    id: 'smoked-burrata-heirloom',
    name: 'Smoked Stracciatella & Heirloom Tomatoes',
    tagline: 'Jos Green Herb Oil & Charred Sourdough',
    description: 'Hand-pulled artisan stracciatella lightly cold-smoked with hickory wood, paired with heirloom Plateau State garden tomatoes, basil-scented uziza oil, and warm seeded sourdough.',
    price: 19500,
    category: 'starters',
    categoryLabel: 'Starters',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23933?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Vegetarian'],
    ingredients: [
      'Artisanal Smoked Stracciatella',
      'Heirloom Jos Plateau Tomatoes',
      'Cold-Pressed Uziza Leaf Oil',
      '25-Year Aged Balsamico di Modena',
      'Stoneground Sourdough Focaccia'
    ],
    chefNotes: 'Tomatoes sourced directly from partner organic farmers in the cooler highlands of Jos, bursting with vibrant sweetness.',
    pairingRecommendation: 'Sauvignon Blanc, Cloudy Bay (Marlborough, NZ)',
    isSignature: false,
    calories: '340 kcal',
    preparationTime: '10 mins'
  },

  // ==========================================
  // MAIN COURSES (4 items)
  // ==========================================
  {
    id: 'short-rib-plantain-fondant',
    name: '48-Hour Prime Beef Short Rib',
    tagline: 'Caramelized Plantain Fondant & Bone Marrow Asun Jus',
    description: 'Slow-braised prime beef short rib glazed in a concentrated peppercorn and habanero reduction, served with butter-poached sweet plantain fondant, glazed baby heritage carrots, and bone marrow emulsion.',
    price: 46000,
    category: 'mains',
    categoryLabel: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80'
    ],
    dietary: ['Gluten-Free', "Chef's Signature"],
    ingredients: [
      'Prime Angus Short Rib',
      'Aged Bone Marrow & Scotch Bonnet Glaze',
      'Butter-Poached Yellow Plantain',
      'Smoked Shallot Mousseline',
      'Heritage Jos Carrots',
      'Fresh Thyme & Allspice'
    ],
    chefNotes: 'Braised for exactly forty-eight hours at 62°C. The beef yields at the touch of a fork, harmonized by the gentle sweetness of caramelized plantain.',
    pairingRecommendation: 'Château Margaux Premier Grand Cru Classé or Tignanello Antinori',
    isSignature: true,
    calories: '780 kcal',
    preparationTime: '25 mins'
  },
  {
    id: 'pan-roasted-guinea-fowl',
    name: 'Pan-Roasted Guinea Fowl Supreme',
    tagline: 'Wild Mushroom Duxelles, Yam Purée & Morel Jus',
    description: 'Free-range African guinea fowl breast with crispy golden skin, stuffed with wild chanterelles and truffle paste, accompanied by velvet yam purée, roasted baby leeks, and a rich poultry jus.',
    price: 38000,
    category: 'mains',
    categoryLabel: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Gluten-Free', 'Halal-Friendly'],
    ingredients: [
      'Free-Range Guinea Fowl',
      'Wild French Morel & Forest Chanterelles',
      'Silken Pounded Yam Mousseline',
      'Crispy Herb Skin Tuile',
      'Charred Baby Leek',
      'Madeira Wine Demi-Glace'
    ],
    chefNotes: 'Guinea fowl has a distinct nobility and subtle game note that outshines conventional chicken, honoring West African royal banquets.',
    pairingRecommendation: 'Pinot Noir, Domaine Serene Evenstad Reserve (Oregon)',
    isSignature: false,
    calories: '610 kcal',
    preparationTime: '22 mins'
  },
  {
    id: 'herb-crusted-lamb-rack',
    name: 'New Zealand Lamb Cutlets',
    tagline: 'Rosemary-Uziza Crust, Smoked Aubergine & Pomegranate',
    description: 'Pan-seared tender lamb rack finished with a verdant crust of fresh rosemary, thyme, and peppery uziza leaves. Plated with smoked aubergine caviar, charred asparagus, and tart pomegranate reduction.',
    price: 49500,
    category: 'mains',
    categoryLabel: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Halal-Friendly'],
    ingredients: [
      'Pasture-Fed New Zealand Lamb Rack',
      'Uziza & Panko Herb Crust',
      'Smoked Aubergine Purée',
      'Grilled Jumbo Asparagus',
      'Lagos Spiced Lamb Glace',
      'Fresh Pomegranate Jewels'
    ],
    chefNotes: 'Cooked medium-rare with a fragrant crust that delivers an aroma of eucalyptus and warm black pepper.',
    pairingRecommendation: 'Barolo DOCG, Pio Cesare (Piedmont, Italy)',
    isSignature: false,
    calories: '720 kcal',
    preparationTime: '25 mins'
  },
  {
    id: 'dry-aged-ribeye-truffle-butter',
    name: '45-Day Dry-Aged Prime Ribeye (400g)',
    tagline: 'Roasted Garlic Bone Marrow Butter & Triple-Cooked Cassava',
    description: 'Creekstone Farms prime beef ribeye aged in our Himalayan salt-brick aging chamber, seared over open hardwood coals. Accompanied by roasted garlic compound butter, grilled king oyster mushrooms, and crisp cassava fries.',
    price: 58000,
    category: 'mains',
    categoryLabel: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Gluten-Free', "Chef's Signature"],
    ingredients: [
      'Salt-Aged Prime Ribeye 400g',
      'Roasted Garlic & Truffle Compound Butter',
      'Triple-Blanched Crisp Cassava Frites',
      'Charred King Oyster Mushroom',
      'Smoked Maldon Sea Salt Flakes'
    ],
    chefNotes: 'Dry-aged right on site for concentrated minerality and buttery richness. Rested for 10 minutes with compound herb butter.',
    pairingRecommendation: 'Caymus Vineyards Cabernet Sauvignon (Napa Valley)',
    isSignature: true,
    calories: '920 kcal',
    preparationTime: '30 mins'
  },

  // ==========================================
  // HANDMADE PASTA (4 items)
  // ==========================================
  {
    id: 'atlantic-crab-tagliolini',
    name: 'Hand-Rolled Tagliolini with Atlantic Crab',
    tagline: 'Scotch Bonnet Bisque, Bottarga & Lemon Agrumato',
    description: 'House-extruded saffron tagliolini tossed with sweet picked Atlantic blue swimmer crab meat, a silky bisque infused with gentle scotch bonnet warmth, cured mullet bottarga, and lemon zest oil.',
    price: 36000,
    category: 'pasta',
    categoryLabel: 'Handmade Pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Pescatarian', "Chef's Signature"],
    ingredients: [
      'Fresh Saffron Egg Tagliolini',
      'Picked Atlantic Blue Crab Meat',
      'Lagos Coast Shellfish Bisque',
      'Grated Sardinian Bottarga',
      'Cold-Pressed Lemon Agrumato',
      'Chives & Chervil'
    ],
    chefNotes: 'The pasta is prepared every morning at 10 AM using Italian 00 flour and fresh farm eggs. The sauce is reduced for 8 hours from roasted blue crab shells.',
    pairingRecommendation: 'Gavi di Gavi, La Scolca Black Label (Piedmont, Italy)',
    isSignature: true,
    calories: '550 kcal',
    preparationTime: '18 mins'
  },
  {
    id: 'squid-ink-fettuccine-prawns',
    name: 'Squid Ink Fettuccine & Tiger Prawns',
    tagline: 'Confit Datterini, White Wine & Garlic Crumbs',
    description: 'Black squid ink pasta ribbons served with pan-roasted wild tiger prawns, sweet confit Sicilian datterini tomatoes, baby capers, crisp herb garlic sourdough crumble, and fresh basil.',
    price: 34500,
    category: 'pasta',
    categoryLabel: 'Handmade Pasta',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Pescatarian'],
    ingredients: [
      'Artisanal Squid Ink Fettuccine',
      'Jumbo Niger Delta Tiger Prawns',
      'Sicilian Confit Datterini Tomatoes',
      'Crispy Herb Panko Breadcrumbs',
      'Dry Pinot Grigio Reduction',
      'Micro Basil'
    ],
    chefNotes: 'Striking black and red presentation, balanced between seaside salinity and sweet sun-ripened tomatoes.',
    pairingRecommendation: 'Etna Bianco DOC, Benanti (Sicily, Italy)',
    isSignature: false,
    calories: '580 kcal',
    preparationTime: '18 mins'
  },
  {
    id: 'truffle-ricotta-agnolotti',
    name: 'Smoked Ricotta & Truffle Agnolotti',
    tagline: 'Brown Butter, Crispy Sage & Toasted Pine Nuts',
    description: 'Delicate pillow pasta filled with house-smoked buffalo ricotta and summer black truffle paste, glazed in foaming Normandy hazelnut butter, crispy mountain sage leaves, and aged 36-month Parmigiano-Reggiano.',
    price: 29500,
    category: 'pasta',
    categoryLabel: 'Handmade Pasta',
    image: 'https://images.unsplash.com/photo-1587740896339-96a76170508d?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Vegetarian'],
    ingredients: [
      'House-Smoked Buffalo Ricotta',
      'Umbrian Black Winter Truffle',
      'Hand-Pinched Piedmontese Agnolotti',
      'Beurre Noisette (Brown Butter)',
      'Aged Parmigiano-Reggiano 36 Mo.',
      'Crispy Sage Leaves'
    ],
    chefNotes: 'A classic northern Italian technique elevated with our subtly smoked house ricotta cheese.',
    pairingRecommendation: 'Brunello di Montalcino, Biondi-Santi (Tuscany, Italy)',
    isSignature: false,
    calories: '520 kcal',
    preparationTime: '16 mins'
  },
  {
    id: 'wild-mushroom-pappardelle',
    name: 'Foraged Forest Mushroom Pappardelle',
    tagline: 'Porcini Reduction, Thyme & Whipped Mascarpone',
    description: 'Wide ribbons of egg pappardelle folded through a rich ragù of French porcini, king oyster, and local forest mushrooms, finished with whipped lemon mascarpone and freshly cracked white pepper.',
    price: 28000,
    category: 'pasta',
    categoryLabel: 'Handmade Pasta',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810d2?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Vegetarian'],
    ingredients: [
      'Fresh 8-Yolk Pappardelle Ribbons',
      'Wild Porcini & Golden Chanterelles',
      'Slow-Cooked Shallot & Garlic Fondue',
      'Whipped Lemon Mascarpone',
      'Fresh Thyme Flowers'
    ],
    chefNotes: 'Earthy, comforting and deeply satisfying without feeling heavy.',
    pairingRecommendation: 'Barbaresco DOCG, Bruno Giacosa (Piedmont, Italy)',
    isSignature: false,
    calories: '490 kcal',
    preparationTime: '16 mins'
  },

  // ==========================================
  // SEAFOOD (4 items)
  // ==========================================
  {
    id: 'atlantic-turbot-beurre-blanc',
    name: 'Wild Atlantic Turbot En Papillote',
    tagline: 'Lemongrass Beurre Blanc, Samphire & Sea Greens',
    description: 'Fillet of wild-caught Atlantic turbot steamed with aromatics, served over a silky emulsion of cultured Normandy butter, lemongrass, kaffir lime leaf, sea samphire, and caramelized fennel bulb.',
    price: 48500,
    category: 'seafood',
    categoryLabel: 'Seafood',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Gluten-Free', 'Pescatarian', "Chef's Signature"],
    ingredients: [
      'Wild Atlantic Turbot Fillet',
      'Lemongrass & Ginger Beurre Blanc',
      'Braised Baby Fennel Bulb',
      'Coastal Sea Samphire',
      'Chive Blossom Infusion'
    ],
    chefNotes: 'Turbot is widely regarded by culinary masters as the king of fish. Its firm, succulent flakes are bathed in fragrant butter.',
    pairingRecommendation: 'Meursault Premier Cru, Domaine des Comtes Lafon (Burgundy)',
    isSignature: true,
    calories: '530 kcal',
    preparationTime: '24 mins'
  },
  {
    id: 'jumbo-tiger-prawns-palm-wine',
    name: 'Grilled Niger Delta Jumbo Prawns',
    tagline: 'Palm Wine Butter Reduction, Garlic Chives & Lime',
    description: 'Colossal wild tiger prawns butterflied and flame-grilled over charcoal, glazed with an artisanal fermented palm wine butter reduction, toasted garlic flakes, and charred fresh lime.',
    price: 42000,
    category: 'seafood',
    categoryLabel: 'Seafood',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Gluten-Free', 'Pescatarian', "Chef's Signature"],
    ingredients: [
      'Wild-Caught Jumbo Tiger Prawns (U-6)',
      'Fresh Palm Wine Glaze',
      'Cultured Salted Butter',
      'Crispy Garlic Chips',
      'Scallion Oil & Charred Lime'
    ],
    chefNotes: 'We source these prawns sustainably from fishermen along the Niger Delta coast. Sweet, smoky, and intensely flavorful.',
    pairingRecommendation: 'Riesling Grand Cru, Trimbach (Alsace, France)',
    isSignature: true,
    calories: '460 kcal',
    preparationTime: '18 mins'
  },
  {
    id: 'lagos-red-snapper-cru',
    name: 'Pan-Crisped Red Snapper',
    tagline: 'Smoked Tomato Dashi, Cassava Crisp & Sea Fennel',
    description: 'Crisp skin local red snapper fillet served in a clear, smoky broth made from roasted coastal tomatoes and dried crayfish dashi, garnished with crisp cassava chips and sea fennel.',
    price: 36000,
    category: 'seafood',
    categoryLabel: 'Seafood',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Gluten-Free', 'Pescatarian'],
    ingredients: [
      'Line-Caught Lagos Coastal Red Snapper',
      'Smoked Tomato & Crayfish Clarified Dashi',
      'Crispy Fine Cassava Shavings',
      'Blanched Bok Choy & Sea Fennel',
      'Ginger Flower Oil'
    ],
    chefNotes: 'A modern dialogue between Japanese clarified broth aesthetics and Nigerian pepper soup clarity.',
    pairingRecommendation: 'Albariño, Pazo de Señorans (Rías Baixas, Spain)',
    isSignature: false,
    calories: '440 kcal',
    preparationTime: '20 mins'
  },
  {
    id: 'hokkaido-scallops-cauliflower',
    name: 'Pan-Seared Hokkaido Diver Scallops',
    tagline: 'Caramelized Cauliflower Velvet, Uziza Pepper & Caviar',
    description: 'Golden-crusted sashimi-grade Hokkaido sea scallops served on a bed of silky caramelized cauliflower purée, finished with Siberian Baerii caviar and a light uziza pepper drizzle.',
    price: 44000,
    category: 'seafood',
    categoryLabel: 'Seafood',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Gluten-Free', 'Pescatarian', "Chef's Signature"],
    ingredients: [
      'Hokkaido Sashimi-Grade Diver Scallops',
      'Slow-Roasted Cauliflower Cream',
      'Siberian Baerii Royal Caviar',
      'Uziza Pepper Infused Clarified Butter',
      'Petite Watercress'
    ],
    chefNotes: 'Seared for precisely 75 seconds per side to maintain translucency and natural ocean sweetness.',
    pairingRecommendation: 'Dom Pérignon Vintage Champagne (Épernay, France)',
    isSignature: true,
    calories: '390 kcal',
    preparationTime: '14 mins'
  },

  // ==========================================
  // DESSERTS (4 items)
  // ==========================================
  {
    id: 'zobo-hibiscus-pavlova',
    name: 'Zobo & Hibiscus Cloud Pavlova',
    tagline: 'Soursop Sorbet, Meringue & Spiced Berry Gelée',
    description: 'Crisp vanilla bean meringue shell filled with whipped mascarpone cream, tart hibiscus (zobo) berry reduction, candied ginger, and a quenching quenelle of freshly churned tropical soursop sorbet.',
    price: 16500,
    category: 'desserts',
    categoryLabel: 'Desserts',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Vegetarian', 'Gluten-Free', "Chef's Signature"],
    ingredients: [
      'French Vanilla Bean Meringue',
      'Artisanal Zobo (Roselle) Reduction',
      'Churned Wild Soursop Sorbet',
      'Madagascar Vanilla Mascarpone',
      'Candied Kano Ginger Flakes',
      'Edible Gold Leaf'
    ],
    chefNotes: 'Inspired by the vibrant ruby hue and tart refreshing notes of West African zobo infusions.',
    pairingRecommendation: 'Château d’Yquem Sauternes Premier Cru Supérieur',
    isSignature: true,
    calories: '320 kcal',
    preparationTime: '12 mins'
  },
  {
    id: 'valrhona-chocolate-cocoa-pod',
    name: 'Guanaja 70% Dark Chocolate Sphere',
    tagline: 'Smoked Sea Salt Caramel, Spiced Cacao Crisp & Gold',
    description: 'Valrhona single-origin dark chocolate dome concealing warm hazelnut praline sponge, molten cocoa nib caramel, and smoked Nigerian sea salt gelato, melted with hot pouring ganache.',
    price: 18500,
    category: 'desserts',
    categoryLabel: 'Desserts',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Vegetarian', 'Halal-Friendly', "Chef's Signature"],
    ingredients: [
      'Valrhona Guanaja 70% Chocolate',
      'Smoked Salted Butter Caramel',
      'Piedmont Hazelnut Praline Feuilletine',
      'Artisanal Cocoa Nib Gelato',
      '24-Karat Gold Leaf Flakes'
    ],
    chefNotes: 'An immersive tableside spectacle celebrating the finest West African cocoa heritage.',
    pairingRecommendation: 'Taylor’s 20-Year-Old Tawny Port (Douro, Portugal)',
    isSignature: true,
    calories: '510 kcal',
    preparationTime: '15 mins'
  },
  {
    id: 'plantain-mille-feuille',
    name: 'Caramelized Plantain Mille-Feuille',
    tagline: 'Crisp Puff Pastry, Spiced Rum Cremeux & Toasted Pecans',
    description: 'Inverted caramelized puff pastry layered with roasted sweet plantain cremeux, dark spiced Caribbean rum, delicate vanilla diplomat cream, and glazed praline pecans.',
    price: 15500,
    category: 'desserts',
    categoryLabel: 'Desserts',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Vegetarian'],
    ingredients: [
      'Handmade Inverted Butter Puff Pastry',
      'Roasted Ripe Yellow Plantain Puree',
      'Madagascar Vanilla Diplomat Cream',
      'Aged Dark Rum Glaze',
      'Pecan Nut Praline'
    ],
    chefNotes: 'Layered texture of whisper-thin crisp pastry and luscious caramelized plantain.',
    pairingRecommendation: 'Moscato d’Asti, Vietti Cascinetta (Piedmont, Italy)',
    isSignature: false,
    calories: '440 kcal',
    preparationTime: '12 mins'
  },
  {
    id: 'mango-passionfruit-cheesecake',
    name: 'Deconstructed Jos Mango & Passion Cheesecake',
    tagline: 'Sable Breton, Kaffir Lime & Passionfruit Coulis',
    description: 'Light whipped cream cheese quenelle over a golden buttery sablé Breton crumb, topped with sweet compressed mango from Jos Plateau, tangy passionfruit caviar, and micro mint.',
    price: 16000,
    category: 'desserts',
    categoryLabel: 'Desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Vegetarian'],
    ingredients: [
      'Whipped French Cream Cheese',
      'Compressed Jos Mango',
      'Passion Fruit Reduction',
      'Brittany Butter Sablé Crumb',
      'Kaffir Lime Zest'
    ],
    chefNotes: 'Vibrant and light after an indulgent multi-course dinner.',
    pairingRecommendation: 'Royal Tokaji 5 Puttonyos Aszú (Hungary)',
    isSignature: false,
    calories: '360 kcal',
    preparationTime: '10 mins'
  },

  // ==========================================
  // ARTISANAL DRINKS (4 items)
  // ==========================================
  {
    id: 'smoked-agbalumo-highball',
    name: 'Smoked Agbalumo & Rye Highball',
    tagline: 'African Star Apple, WhistlePig Rye & Ginger Bitters',
    description: 'WhistlePig 10-year rye whiskey infused with roasted African star apple (agbalumo), clarified citrus juice, house carbonated botanical water, and aromatic ginger leaf bitters over crystal clear hand-cut ice.',
    price: 14500,
    category: 'drinks',
    categoryLabel: 'Artisanal Drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Cocktail', "Chef's Signature"],
    ingredients: [
      'WhistlePig 10-Year Rye Whiskey',
      'Clarified Roasted Agbalumo Cordial',
      'House Carbonated Spring Soda',
      'Ginger & Peppercorn Bitters',
      'Hand-Carved Crystal Ice Spear'
    ],
    chefNotes: 'Agbalumo possesses a striking sweet-tart complexity that balances beautifully against barrel rye spices.',
    pairingRecommendation: 'Pairs exceptionally well with our Wagyu Tartare or Charred Octopus',
    isSignature: true,
    calories: '180 kcal',
    preparationTime: '5 mins'
  },
  {
    id: 'palm-wine-botanical-spritz',
    name: 'Lagos Lagoon Botanical Spritz',
    tagline: 'Distilled Palm Spirit, Italicus Bergamot & Champagne',
    description: 'Small-batch artisanal palm botanical spirit, Italicus Rosolio di Bergamotto, fresh pink grapefruit mist, and topped with Laurent-Perrier La Cuvée Champagne.',
    price: 16000,
    category: 'drinks',
    categoryLabel: 'Artisanal Drinks',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Cocktail', "Chef's Signature"],
    ingredients: [
      'Artisanal Palm Botanical Distillate',
      'Italicus Bergamot Liqueur',
      'Fresh Pressed Ruby Grapefruit',
      'Laurent-Perrier Champagne Float',
      'Dehydrated Citrus Disc'
    ],
    chefNotes: 'The premier sunset aperitif on our Waterfront Terrace.',
    pairingRecommendation: 'Ideal companion for our Hokkaido Scallops and Smoked Stracciatella',
    isSignature: true,
    calories: '160 kcal',
    preparationTime: '5 mins'
  },
  {
    id: 'hibiscus-negroni-reserve',
    name: 'Maison Hibiscus Negroni Reserve',
    tagline: 'Zobo-Infused Monkey 47, Campari & Carpano Antica',
    description: 'Monkey 47 Schwarzwald dry gin infused with whole roselle flowers, Campari aged in charred oak barrels for 60 days, and sweet Carpano Antica Formula vermouth with orange oils.',
    price: 15500,
    category: 'drinks',
    categoryLabel: 'Artisanal Drinks',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Cocktail'],
    ingredients: [
      'Monkey 47 Gin (Roselle Maceration)',
      'Barrel-Aged Campari',
      'Carpano Antica Formula Vermouth',
      'Flamed Orange Peel Oils',
      'Hand-Cut Ice Block'
    ],
    chefNotes: 'Intense ruby depth with bittersweet floral botanicals and rich oak vanilla.',
    pairingRecommendation: 'Best savored as an aperitif before the 48-Hour Short Rib',
    isSignature: false,
    calories: '210 kcal',
    preparationTime: '5 mins'
  },
  {
    id: 'calamansi-ginger-zero-proof',
    name: 'Calamansi & Spiced Ginger Elixir (Zero-Proof)',
    tagline: 'Lemongrass, Wild Honey, Sparkling Alkaline Water',
    description: 'A vibrant non-alcoholic elixir of pressed calamansi lime, slow-extracted wild ginger root, organic mountain honey, crushed lemongrass stalk, and sparkling chilled tonic.',
    price: 9500,
    category: 'drinks',
    categoryLabel: 'Artisanal Drinks',
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1200&q=80',
    dietary: ['Non-Alcoholic', 'Gluten-Free', 'Vegetarian'],
    ingredients: [
      'Pressed Calamansi Citrus',
      'Cold-Extracted Ginger Root',
      'Wild Acacia Honey Nectar',
      'Bruised Stalk Lemongrass',
      'Fever-Tree Mediterranean Tonic'
    ],
    chefNotes: 'Crafted with equal reverence to our cellar cocktails, refreshing and invigorating.',
    pairingRecommendation: 'Complements any dish across the menu',
    isSignature: false,
    calories: '95 kcal',
    preparationTime: '4 mins'
  }
];

export const MENU_CATEGORIES: { id: MenuItem['category']; label: string; count: number; description: string }[] = [
  { id: 'starters', label: 'Starters', count: 4, description: 'Preludes of umami, smoky woodfire, and delicate coastal freshness.' },
  { id: 'mains', label: 'Main Courses', count: 4, description: 'Prime wood-grilled cuts, long-braised delicacies, and elevated West African aromatics.' },
  { id: 'pasta', label: 'Handmade Pasta', count: 4, description: 'Extruded fresh daily in-house with Italian 00 flour and rich egg yolks.' },
  { id: 'seafood', label: 'Seafood', count: 4, description: 'Wild-caught Atlantic seafood and sustainably harvested Niger Delta delicacies.' },
  { id: 'desserts', label: 'Desserts', count: 4, description: 'Artisanal patisserie combining French technique with tropical West African botanical notes.' },
  { id: 'drinks', label: 'Artisanal Drinks', count: 4, description: 'Hand-crafted botanical cocktails, vintage champagnes, and refined zero-proof elixirs.' },
];
