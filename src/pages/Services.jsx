import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/ui/FloatingHearts';
import { useLanguage } from '../context/LanguageContext';
import serviceVenue from '../assets/images/home/service-venue.png';
import serviceDecor from '../assets/images/home/service-decor.png';
import ring1 from '../assets/images/home/ring1.jpg';
import ring2 from '../assets/images/home/ring2.jpg';
import ring3 from '../assets/images/home/ring3.jpg';
import bday1 from '../assets/images/home/bday1.jpg';
import bday2 from '../assets/images/home/bday2.jpg';
import bday3 from '../assets/images/home/bday3.jpg';
import venue1 from '../assets/images/home/venue1.jpg';
import venue2 from '../assets/images/home/venue2.jpg';
import venue3 from '../assets/images/home/venue3.jpg'; 
import food1 from '../assets/images/home/food1.jpg';
import food2 from '../assets/images/home/food2.jpeg';
import food3 from '../assets/images/home/food4.jpg';
import anni1 from '../assets/images/home/anni1.jpg';
import anni2 from '../assets/images/home/anni2.jpg';
import anni3 from '../assets/images/home/anni3.jpg';
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
    { id: 'wedding', number: '01', title: t.services.list.wedding.title, description: t.services.list.wedding.desc, images: [serviceVenue, portfolioCouple, serviceDecor], icon: 'favorite' },
    { id: 'catering', number: '02', title: t.services.list.catering.title, description: t.services.list.catering.desc, images: [food1,food2,food3], icon: 'restaurant_menu' },
    { id: 'decor', number: '03', title: t.services.list.decor.title, description: t.services.list.decor.desc, images: [serviceDecor, portfolioDecor, serviceVenue], icon: 'yard' },
    { id: 'ring_ceremony', number: '04', title: t.services.list.ring_ceremony.title, description: t.services.list.ring_ceremony.desc, images: [ring1,ring2,ring3], icon: 'diamond' },
    { id: 'birthday', number: '05', title: t.services.list.birthday.title, description: t.services.list.birthday.desc, images: [bday1,bday2,bday3], icon: 'celebration' },
    { id: 'anniversary', number: '06', title: t.services.list.anniversary.title, description: t.services.list.anniversary.desc, images: [anni1,anni2,anni3], icon: 'auto_awesome' },
    
    { id: 'venues', number: '07', title: t.services.list.venues.title, description: t.services.list.venues.desc, images: [venue1,venue2,venue3], icon: 'apartment' },
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
          <div className="h-[1px] w-32 bg-primary mx-auto shadow-[0_0_10px_var(--color-primary)]"></div>
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

      
    </div>
  );
};

export default Services;
