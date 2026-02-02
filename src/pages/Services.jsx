import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/ui/FloatingHearts';
import { useLanguage } from '../context/LanguageContext';
import serviceVenue from '../assets/images/home/service-venue.png';
import serviceDecor from '../assets/images/home/service-decor.png';
import serviceHospitality from '../assets/images/home/service-hospitality.png';
import portfolioBride from '../assets/images/home/portfolio-bride.png';
import portfolioDecor from '../assets/images/home/portfolio-decor.png';
import portfolioCouple from '../assets/images/home/portfolio-couple.png';
import portfolioCultural from '../assets/images/home/portfolio-cultural.png';

const ServiceSection = ({ number, title, description, images, icon }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-32 border-b border-primary/10 pb-20 last:border-0">

      {/* Left Column: Content */}
      <div className="w-full lg:w-5/12 animate-fade-in-up order-2 lg:order-1">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-7xl font-serif text-primary/20 font-bold">{number}</span>
          <div className="h-[2px] w-20 bg-primary/30"></div>
          <span className="material-symbols-outlined text-3xl text-primary/60">{icon}</span>
        </div>

        <h3 className="text-4xl md:text-5xl font-serif text-accent uppercase tracking-wide mb-8 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 text-lg leading-loose mb-10 font-light text-justify">
          {description}
        </p>

        <Link to="/contact" className="group inline-flex items-center gap-4 bg-accent text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-xl hover:shadow-primary/50">
          <span>Book This Service</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </Link>
      </div>

      {/* Right Column: Visuals */}
      <div className="w-full lg:w-7/12 relative order-1 lg:order-2">
        <div className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden shadow-2xl mb-6">
          {/* Main Image Slider */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} - ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
            />
          ))}
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>

        {/* Thumbnails Navigation */}
        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative w-24 h-24 md:w-32 md:h-24 flex-shrink-0 cursor-pointer rounded-sm overflow-hidden transition-all duration-300 ${index === currentImageIndex ? 'ring-2 ring-primary ring-offset-2 opacity-100' : 'opacity-60 hover:opacity-100'
                }`}
            >
              <img src={img} alt="thumb" className="w-full h-full object-cover" />
              {/* Active Progress Bar */}
              {index === currentImageIndex && (
                <div className="absolute bottom-0 left-0 h-1 bg-primary animate-scroll w-full" style={{ animationDuration: '4s' }}></div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const servicesList = [
    { id: 'venues', number: '01', title: t.services.list.venues.title, description: t.services.list.venues.desc, images: [serviceVenue, serviceDecor, portfolioCouple], icon: 'castle' },
    { id: 'decor', number: '02', title: t.services.list.decor.title, description: t.services.list.decor.desc, images: [serviceDecor, serviceVenue, portfolioDecor], icon: 'yard' },
    { id: 'food', number: '03', title: t.services.list.catering.title, description: t.services.list.catering.desc, images: [serviceHospitality, serviceVenue, portfolioDecor], icon: 'restaurant_menu' },
    { id: 'photography', number: '04', title: t.services.list.cinematography.title, description: t.services.list.cinematography.desc, images: [portfolioCouple, portfolioBride, serviceVenue], icon: 'photo_camera' },
    { id: 'makeup', number: '05', title: t.services.list.styling.title, description: t.services.list.styling.desc, images: [portfolioBride, portfolioDecor, serviceVenue], icon: 'brush' },
    { id: 'budget', number: '06', title: t.services.list.budget.title, description: t.services.list.budget.desc, images: [portfolioDecor, serviceVenue, serviceDecor], icon: 'account_balance_wallet' },
    { id: 'vendor', number: '07', title: t.services.list.vendor.title, description: t.services.list.vendor.desc, images: [serviceHospitality, serviceVenue, portfolioDecor], icon: 'groups' },
    { id: 'invites', number: '08', title: t.services.list.invites.title, description: t.services.list.invites.desc, images: [serviceDecor, portfolioBride, portfolioDecor], icon: 'mail' },
    { id: 'entertainment', number: '09', title: t.services.list.entertainment.title, description: t.services.list.entertainment.desc, images: [portfolioCultural, portfolioCouple, serviceVenue], icon: 'celebration' },
    { id: 'destination', number: '10', title: t.services.list.destination.title, description: t.services.list.destination.desc, images: [serviceVenue, portfolioCouple, portfolioDecor], icon: 'public' },
    { id: 'prewedding', number: '11', title: t.services.list.prewedding.title, description: t.services.list.prewedding.desc, images: [portfolioCouple, portfolioBride, serviceVenue], icon: 'favorite' },
    { id: 'rituals', number: '12', title: t.services.list.rituals.title, description: t.services.list.rituals.desc, images: [portfolioDecor, serviceDecor, portfolioBride], icon: 'auto_awesome' },
    { id: 'coordination', number: '13', title: t.services.list.coordination.title, description: t.services.list.coordination.desc, images: [serviceHospitality, serviceVenue, portfolioCouple], icon: 'event_available' },
    { id: 'shopping', number: '14', title: t.services.list.shopping.title, description: t.services.list.shopping.desc, images: [portfolioBride, portfolioDecor, portfolioCouple], icon: 'shopping_bag' },
    { id: 'timeline', number: '15', title: t.services.list.timeline.title, description: t.services.list.timeline.desc, images: [serviceVenue, portfolioCouple, serviceDecor], icon: 'schedule' },
    { id: 'proposal', number: '16', title: t.services.list.proposal.title, description: t.services.list.proposal.desc, images: [portfolioCouple, serviceVenue, portfolioDecor], icon: 'favorite_border' },
    { id: 'transport', number: '17', title: t.services.list.transport.title, description: t.services.list.transport.desc, images: [serviceDecor, serviceVenue, portfolioDecor], icon: 'directions_car' }
  ];

  return (
    <div className="w-full relative overflow-hidden bg-background-light min-h-screen">
      <FloatingHearts />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-black/50 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${serviceVenue})` }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <span className="block text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 shadow-sm bg-black/20 px-4 py-1 rounded-full inline-block backdrop-blur-sm border border-white/10">
            {t.services.hero.badge}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8 drop-shadow-2xl">
            {t.services.hero.title}
          </h1>
          <div className="h-[1px] w-32 bg-primary mx-auto shadow-[0_0_10px_#D4AF37]"></div>
        </div>
      </div>

      {/* Intro Text */}
      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-4xl text-primary mb-6 animate-bounce">diamond</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-accent mb-8 leading-snug">
            {t.services.intro.title}
          </h2>
          <p className="text-gray-500 font-light text-xl leading-relaxed">
            {t.services.intro.desc}
          </p>
        </div>
      </section>

      {/* Main Services List - Split Layout */}
      <section className="py-12 relative z-10 bg-background-light">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {servicesList.map(service => (
            <ServiceSection key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="py-32 bg-accent relative overflow-hidden text-white">
        {/* Background Texture or Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-10">{t.services.cta.title}</h2>
          <p className="text-white/80 text-xl mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            {t.services.cta.desc}
          </p>
          <Link to="/contact" className="inline-block bg-[#D4AF37] text-white hover:bg-white hover:text-[#D4AF37] transition-all px-16 py-5 rounded-full border border-[#D4AF37] text-lg font-bold uppercase tracking-widest shadow-2xl hover:scale-105 duration-300">
            {t.services.cta.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
