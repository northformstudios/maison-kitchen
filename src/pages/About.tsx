import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Compass, Utensils, Wine, ShieldCheck, Calendar, MapPin } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, luxuryEasing } from '../components/motion/MotionTransitions';

export default function About() {
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    document.title = "Our Story, Craft & Provenance | Maison Kitchen Lagos";
  }, []);

  const accolades = [
    { year: '2026', title: 'Best Architectural Dining Space', source: 'Lagos Design & Architecture Review' },
    { year: '2025', title: 'Top 10 Destination Restaurants in West Africa', source: 'Epicurean Continent Guide' },
    { year: '2025', title: 'Excellence in Sommelier & Cellar Craft', source: 'West African Wine Guild' },
    { year: '2024', title: 'Culinary Innovation Award', source: 'Pan-African Gastronomy Summit' },
  ];

  const terroirRegions = [
    {
      region: 'Niger Delta Estuary',
      ingredient: 'Wild Jumbo Tiger Prawns & Mangrove Oysters',
      description: 'Harvested with sustainable artisanal pots by generational fishing families in pristine brackish waters.'
    },
    {
      region: 'Jos Plateau Highlands',
      ingredient: 'Heirloom Tomatoes, Baby Carrots & Alpine Herbs',
      description: 'Grown at 1,200m elevation where cool highland breezes yield concentrated sugars and vibrant botanical acidity.'
    },
    {
      region: 'Badagry Coastal Pans',
      ingredient: 'Hand-Harvested Flake Sea Salt',
      description: 'Slow-evaporated over sunbeds, yielding delicate mineral crystals that melt with gentle salinity.'
    },
    {
      region: 'Northern Savanna & Kano',
      ingredient: 'Wild Roselle (Zobo) & Sun-Dried Ginger',
      description: 'Single-origin roselle calyces chosen for their intense ruby tint, rich polyphenols, and sharp floral tartness.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* 1. HERO STORY SECTION */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
        <FadeIn direction="up">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> The Maison Kitchen Genesis
          </span>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#171717] tracking-tight leading-tight">
            Where West African soul meets contemporary restraint.
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-secondary text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-body">
            Founded in Victoria Island, Lagos, Maison Kitchen emerged from a single conviction: 
            that Nigerian ingredients, coastal seafood, and botanical heritage possess the depth to stand alongside 
            the world's most revered culinary traditions—presented in an architectural atmosphere of pure serenity.
          </p>
        </FadeIn>

        {/* Demo Tag */}
        <FadeIn direction="up" delay={0.4}>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs text-secondary shadow-subtle">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B99A75]" />
              <span>Fictional luxury restaurant brand created for portfolio demonstration</span>
            </span>
          </div>
        </FadeIn>
      </section>

      {/* 2. LARGE EDITORIAL PHOTOGRAPHIC ESSAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden aspect-[21/9] sm:aspect-[16/7] bg-[#171717] shadow-luxury group">
            <motion.img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85"
              alt="Maison Kitchen Lagos luxury dining room ambiance"
              initial={shouldReduce ? {} : { scale: 1.05 }}
              whileInView={shouldReduce ? {} : { scale: 1.0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: luxuryEasing }}
              className="w-full h-full object-cover filter brightness-90 group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-8 sm:p-12 text-white">
              <div className="max-w-xl space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#B99A75] font-semibold">The Architecture of Silence</span>
                <p className="font-heading text-lg sm:text-2xl font-light">
                  Designed to quiet the sensory vibrancy of Lagos the moment you step across the threshold.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. THREE CULINARY PILLARS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <StaggerItem>
            <motion.div whileHover={shouldReduce ? {} : { y: -4 }} transition={{ duration: 0.3, ease: luxuryEasing }} className="space-y-3 bg-white p-8 rounded-3xl border border-black/5 shadow-subtle hover:shadow-luxury transition-shadow h-full">
              <div className="w-12 h-12 rounded-2xl bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#171717]">Provenance & Terroir</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                We work directly with artisanal fishermen in the Niger Delta and organic heirloom vegetable farmers in the Jos highlands to harvest ingredients at peak botanical maturity.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div whileHover={shouldReduce ? {} : { y: -4 }} transition={{ duration: 0.3, ease: luxuryEasing }} className="space-y-3 bg-white p-8 rounded-3xl border border-black/5 shadow-subtle hover:shadow-luxury transition-shadow h-full">
              <div className="w-12 h-12 rounded-2xl bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#171717]">Classical Precision</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                48-hour slow braises, clarified broths, hand-rolled pasta extruded daily, and delicate emulsions. Every dish adheres to strict culinary fundamentals without unnecessary gimmickry.
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div whileHover={shouldReduce ? {} : { y: -4 }} transition={{ duration: 0.3, ease: luxuryEasing }} className="space-y-3 bg-white p-8 rounded-3xl border border-black/5 shadow-subtle hover:shadow-luxury transition-shadow h-full">
              <div className="w-12 h-12 rounded-2xl bg-[#F1EBDD] text-[#B99A75] flex items-center justify-center">
                <Wine className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-[#171717]">The Living Cellar</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Our sommelier has curated a temperature-controlled collection of over 450 labels, bridging classical French Grand Crus with dynamic emergent African boutique vineyards.
              </p>
            </motion.div>
          </StaggerItem>

        </StaggerContainer>
      </section>

      {/* 4. THE LEADERSHIP / CHEF & SOMMELIER PROFILES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <FadeIn>
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
              Culinary Leadership
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#171717]">
              The Artisans Behind the Pass
            </h2>
          </div>
        </FadeIn>

        {/* Executive Chef Card */}
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8E1] group">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
                alt="Executive Chef Adebayo Thorne preparing tasting courses"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
                  Executive Chef & Co-Founder
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#171717] mt-1">
                  Chef Adebayo Thorne
                </h3>
              </div>

              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                Trained in Parisian three-star Michelin establishments before returning to his native Lagos, Adebayo spent four years cataloging indigenous West African aromatics, fermentation techniques, and wild herbs.
              </p>

              <blockquote className="border-l-2 border-[#B99A75] pl-4 italic text-sm text-[#171717] font-medium leading-relaxed">
                "We don't need to dilute our heritage to make it world-class. Our duty is to honor each ingredient with rigorous respect, generous whitespace, and pure flavor clarity."
              </blockquote>

              <div className="pt-2 flex items-center gap-6 text-xs text-secondary">
                <div>
                  <strong className="block text-[#171717]">Institut Paul Bocuse</strong>
                  <span>Culinary Arts Alumnus</span>
                </div>
                <div className="h-6 w-px bg-black/10" />
                <div>
                  <strong className="block text-[#171717]">Lagos Waterfront</strong>
                  <span>Home Since 2024</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Head Sommelier Card */}
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-luxury grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
                  Head Sommelier & Cellar Master
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#171717] mt-1">
                  Nia Lawson
                </h3>
              </div>

              <p className="text-secondary text-sm sm:text-base leading-relaxed">
                Certified Court of Master Sommeliers (Advanced). Nia spent a decade cellar-consulting across Burgundy, Piedmont, and the Western Cape before establishing Maison Kitchen's 450-bottle cellar reserve on Walter Carrington Crescent.
              </p>

              <blockquote className="border-l-2 border-[#B99A75] pl-4 italic text-sm text-[#171717] font-medium leading-relaxed">
                "Wine pairing is emotional pacing. When pairing with West African habanero and uziza warmth, one must look for tension, acidity, and floral restraint rather than overpowering alcohol."
              </blockquote>

              <div className="pt-2 flex items-center gap-6 text-xs text-secondary">
                <div>
                  <strong className="block text-[#171717]">Court of Master Sommeliers</strong>
                  <span>Advanced Certification</span>
                </div>
                <div className="h-6 w-px bg-black/10" />
                <div>
                  <strong className="block text-[#171717]">Cellar Vault</strong>
                  <span>450+ Temperature-Controlled Labels</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECE8E1] order-1 lg:order-2 group">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80"
                alt="Head Sommelier inspecting cellar vintage"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 5. INGREDIENT PROVENANCE & TERROIR */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <FadeIn>
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
              Terroir & Provenance
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#171717]">
              Our Artisanal Supply Network
            </h2>
            <p className="text-xs sm:text-sm text-secondary">
              Ethical, direct-source relationships with Nigeria's premier growers and coastal harvesters.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {terroirRegions.map((item, idx) => (
            <StaggerItem key={idx}>
              <motion.div whileHover={shouldReduce ? {} : { y: -3 }} transition={{ duration: 0.25, ease: luxuryEasing }} className="bg-white p-6 rounded-2xl border border-black/5 shadow-subtle hover:shadow-luxury transition-all space-y-2 h-full">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#B99A75] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.region}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-[#171717]">{item.ingredient}</h3>
                <p className="text-xs text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 6. EDITORIAL AWARDS & RECOGNITION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B99A75]">
              Accolades & Press
            </span>
            <h2 className="font-heading font-bold text-3xl text-[#171717]">
              Demonstration Industry Recognition
            </h2>
            <p className="text-xs text-secondary">
              Simulated reviews demonstrating how a world-class Lagos institution is celebrated.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.07} className="space-y-4">
          {accolades.map((item, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                whileHover={shouldReduce ? {} : { x: 4 }}
                transition={{ duration: 0.25, ease: luxuryEasing }}
                className="bg-white p-6 rounded-2xl border border-black/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[#B99A75]/40 transition-colors shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <span className="font-heading font-bold text-lg text-[#B99A75]">{item.year}</span>
                  <span className="font-medium text-[#171717] text-sm">{item.title}</span>
                </div>
                <span className="text-xs text-secondary sm:text-right">{item.source}</span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <FadeIn>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#171717]">
            Join us at our Victoria Island table.
          </h2>
          <p className="text-secondary text-sm max-w-md mx-auto mt-2">
            We invite you to experience the harmony of our dining room and our kitchen's creative expression.
          </p>
          <div className="pt-6">
            <motion.div whileHover={shouldReduce ? {} : { scale: 1.03 }} whileTap={shouldReduce ? {} : { scale: 0.97 }} className="inline-block">
              <Link
                to="/reservations"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#171717] hover:bg-[#B99A75] text-white font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md"
              >
                <Calendar className="w-4 h-4 text-[#B99A75]" />
                <span>Make a Reservation</span>
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
