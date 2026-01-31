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

const ServiceSection = ({ id, number, title, description, images, isReversed, icon }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
      <div className={`lg:pr-12 ${isReversed ? 'lg:col-start-2' : ''} animate-fade-in-up`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-6xl font-serif text-primary/20 font-bold">{number}</span>
          <div className="h-[1px] flex-1 bg-primary/20"></div>
        </div>
        <h3 className="text-4xl font-serif text-accent uppercase tracking-wide mb-6 leading-tight">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
          {description}
        </p>
        <Link to="/contact" className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-sm hover:underline underline-offset-8 decoration-primary transition-all">
          <span>{t.services.inquire} {title}</span>
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      </div>

      <div className={`relative h-[500px] w-full rounded-none overflow-hidden shadow-2xl group ${isReversed ? 'lg:col-start-1' : ''}`}>
        <div className="absolute inset-0 border-[1px] border-white/20 z-10 m-4 pointer-events-none"></div>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} - ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-105 ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
          />
        ))}
        {/* Badge/Icon Overlay */}
        <div className="absolute bottom-0 right-0 bg-white p-6 shadow-lg z-20">
          <span className="material-symbols-outlined text-primary text-4xl">{icon}</span>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'venues',
      number: '01',
      title: t.services.list.venues.title,
      description: t.services.list.venues.desc,
      images: [
        serviceVenue,
        serviceDecor,
        portfolioCouple
      ],
      icon: 'location_city',
      isReversed: false
    },

    {
      id: 'decor',
      number: '02',
      title: t.services.list.decor.title,
      description: t.services.list.decor.desc,
      images: [
        serviceDecor,
        serviceVenue,
        portfolioDecor
      ],
      icon: 'local_florist',
      isReversed: true
    },

    {
      id: 'food',
      number: '03',
      title: t.services.list.catering.title,
      description: t.services.list.catering.desc,
      images: [
        serviceHospitality,
        serviceVenue,
        portfolioDecor
      ],
      icon: 'restaurant_menu',
      isReversed: false
    },

    {
      id: 'photography',
      number: '04',
      title: t.services.list.cinematography.title,
      description: t.services.list.cinematography.desc,
      images: [
        portfolioCouple,
        portfolioBride,
        serviceVenue
      ],
      icon: 'photo_camera',
      isReversed: true
    },

    {
      id: 'makeup',
      number: '05',
      title: t.services.list.styling.title,
      description: t.services.list.styling.desc,
      images: [
        portfolioBride,
        portfolioDecor,
        serviceVenue
      ],
      icon: 'brush',
      isReversed: false
    },

    {
      id: 'budget',
      number: '06',
      title: t.services.list.budget.title,
      description: t.services.list.budget.desc,
      images: [
        serviceVenue,
        serviceDecor,
        portfolioDecor
      ],
      icon: 'account_balance_wallet',
      isReversed: true
    },

    {
      id: 'vendor',
      number: '07',
      title: t.services.list.vendor.title,
      description: t.services.list.vendor.desc,
      images: [
        serviceHospitality,
        serviceVenue,
        portfolioDecor
      ],
      icon: 'groups',
      isReversed: false
    },

    {
      id: 'invites',
      number: '08',
      title: t.services.list.invites.title,
      description: t.services.list.invites.desc,
      images: [
        portfolioDecor,
        portfolioBride,
        serviceDecor
      ],
      icon: 'mail',
      isReversed: true
    },

    {
      id: 'entertainment',
      number: '09',
      title: t.services.list.entertainment.title,
      description: t.services.list.entertainment.desc,
      images: [
        serviceHospitality,
        portfolioCouple,
        serviceVenue
      ],
      icon: 'celebration',
      isReversed: false
    },

    {
      id: 'destination',
      number: '10',
      title: t.services.list.destination.title,
      description: t.services.list.destination.desc,
      images: [
        serviceVenue,
        portfolioCouple,
        portfolioDecor
      ],
      icon: 'public',
      isReversed: true
    },

    {
      id: 'prewedding',
      number: '11',
      title: t.services.list.prewedding.title,
      description: t.services.list.prewedding.desc,
      images: [
        portfolioCouple,
        portfolioBride,
        serviceVenue
      ],
      icon: 'favorite',
      isReversed: false
    },

    {
      id: 'rituals',
      number: '12',
      title: t.services.list.rituals.title,
      description: t.services.list.rituals.desc,
      images: [
        portfolioBride,
        portfolioDecor,
        serviceDecor
      ],
      icon: 'auto_awesome',
      isReversed: true
    },

    {
      id: 'coordination',
      number: '13',
      title: t.services.list.coordination.title,
      description: t.services.list.coordination.desc,
      images: [
        serviceHospitality,
        serviceVenue,
        portfolioCouple
      ],
      icon: 'event_available',
      isReversed: false
    },

    {
      id: 'shopping',
      number: '14',
      title: t.services.list.shopping.title,
      description: t.services.list.shopping.desc,
      images: [
        portfolioBride,
        portfolioDecor,
        portfolioCouple
      ],
      icon: 'shopping_bag',
      isReversed: true
    },

    {
      id: 'timeline',
      number: '15',
      title: t.services.list.timeline.title,
      description: t.services.list.timeline.desc,
      images: [
        serviceVenue,
        portfolioCouple,
        serviceDecor
      ],
      icon: 'schedule',
      isReversed: false
    },

    {
      id: 'proposal',
      number: '16',
      title: t.services.list.proposal.title,
      description: t.services.list.proposal.desc,
      images: [
        portfolioCouple,
        serviceVenue,
        portfolioDecor
      ],
      icon: 'favorite_border',
      isReversed: true
    },

    {
      id: 'transport',
      number: '17',
      title: t.services.list.transport.title,
      description: t.services.list.transport.desc,
      images: [
        serviceVenue,
        serviceDecor,
        portfolioDecor
      ],
      icon: 'directions_car',
      isReversed: false
    }

  ];


  return (
    <div className="w-full relative overflow-hidden bg-background-light">
      <FloatingHearts />

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] flex items-center justify-center bg-black/50 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(${serviceVenue})` }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <span className="block text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
            {t.services.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
            {t.services.hero.title}
          </h1>
          <div className="h-[2px] w-24 bg-primary mx-auto"></div>
        </div>
      </div>

      {/* Main Services List */}
      <section className="py-24 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-accent mb-6 leading-relaxed">
              {t.services.intro.title}
            </h2>
            <p className="text-gray-500 font-light text-lg">
              {t.services.intro.desc}
            </p>
          </div>

          {services.map(service => (
            <ServiceSection key={service.id} {...service} />
          ))}

        </div>
      </section>

      {/* CTA Section - Minimal */}
      <div className="py-24 bg-accent relative overflow-hidden text-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">{t.services.cta.title}</h2>
          <p className="text-white/70 text-lg mb-12 font-light max-w-2xl mx-auto">
            {t.services.cta.desc}
          </p>
          <Link to="/contact" className="inline-block bg-primary text-white hover:bg-white hover:text-accent transition-all px-12 py-4 rounded-none border border-primary text-lg font-bold uppercase tracking-wider">
            {t.services.cta.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

