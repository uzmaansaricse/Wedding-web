import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import FloatingHearts from '../components/ui/FloatingHearts';
import TestimonialCard from '../components/ui/TestimonialCard';
import { useLanguage } from '../context/LanguageContext';
import serviceVenue from '../assets/images/home/service-venue.png';
import serviceDecor from '../assets/images/home/service-decor.png';
import serviceHospitality from '../assets/images/home/service-hospitality.png';
import portfolioBride from '../assets/images/home/portfolio-bride.png';
import portfolioDecor from '../assets/images/home/portfolio-decor.png';
import portfolioCouple from '../assets/images/home/portfolio-couple.png';
import portfolioCultural from '../assets/images/home/portfolio-cultural.png';
import anni1 from '../assets/images/home/anni1.jpg'
import food1 from '../assets/images/home/food4.jpg'
import ring1 from '../assets/images/home/ring1.jpg'
import bday1 from '../assets/images/home/bday1.jpg'


// Service Card Component for Marquee
const ServiceCard = ({ number, title, description, image, icon }) => (
    <div className="flex-shrink-0 w-[300px] md:w-[350px] h-[450px] relative rounded-sm overflow-hidden group cursor-pointer mx-4 shadow-xl border border-white/10">
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
            <div className="absolute top-4 left-4">
                <span className="text-4xl font-serif text-primary/30 font-bold group-hover:text-primary transition-colors">{number}</span>
            </div>
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="material-symbols-outlined text-3xl text-primary mb-2">{icon}</span>
                <h3 className="text-2xl font-serif text-white uppercase tracking-wide leading-tight mb-2">{title}</h3>
                <div className="h-[1px] w-12 bg-primary mb-3 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-300 text-xs leading-relaxed mb-4 font-light line-clamp-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{description}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                    <span>Explore</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>
        </div>
        <div className="absolute inset-0 border border-white/20 m-2 pointer-events-none group-hover:m-0 transition-all duration-500"></div>
    </div>
);

const Home = () => {
    const { t } = useLanguage();
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;

        const scroll = () => {
            if (!isPaused) {
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                } else {
                    scrollContainer.scrollLeft += 1; // Speed of scroll
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const stats = [
        { value: '10+', label: 'Years Experience' },
        { value: '100+', label: 'Happy Events' },
      
    ];

    const testimonials = t.home.testimonials.items;



    // Map services array using translations
    // Full Services List for Marquee
    const services = [
        { id: 'wedding', number: '01', title: t.services.list.wedding.title, description: t.services.list.wedding.desc, image: serviceVenue, icon: 'favorite' },
        { id: 'catering', number: '02', title: t.services.list.catering.title, description: t.services.list.catering.desc, image: food1, icon: 'restaurant_menu' },
        { id: 'decor', number: '03', title: t.services.list.decor.title, description: t.services.list.decor.desc, image: serviceDecor, icon: 'yard' },
        { id: 'ring_ceremony', number: '04', title: t.services.list.ring_ceremony.title, description: t.services.list.ring_ceremony.desc, image: ring1, icon: 'diamond' },
        { id: 'birthday', number: '05', title: t.services.list.birthday.title, description: t.services.list.birthday.desc, image: bday1, icon: 'celebration' },
        { id: 'anniversary', number: '06', title: t.services.list.anniversary.title, description: t.services.list.anniversary.desc, image: anni1, icon: 'auto_awesome' },
        // { id: 'celebrations', number: '07', title: t.services.list.celebrations.title, description: t.services.list.celebrations.desc, image: serviceDecor, icon: 'event' }
    ];

    // Duplicate for infinite scroll
    const marqueeServices = [...services, ...services];

    return (
        <div className="w-full relative overflow-hidden">
            <FloatingHearts />

            {/* Hero Section */}
            <div className="relative flex min-h-[100vh] flex-col items-center justify-center gap-8 p-8 text-center overflow-hidden">

                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
                    <iframe
                        className="absolute top-1/2 left-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                        src="https://www.youtube-nocookie.com/embed/-Rr7H-FHvI0?autoplay=1&mute=1&loop=1&controls=0&rel=0&playsinline=1&playlist=-Rr7H-FHvI0"
                        title="Background video"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                    ></iframe>


                    {/* Dark overlays */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
                </div>


                <div className="flex flex-col gap-6 max-w-[900px] relative z-10 animate-fade-in-up mt-20">
                    <span className="text-white uppercase tracking-[0.2em] text-sm md:text-base font-bold drop-shadow-md px-6 py-2 rounded-full inline-block mx-auto mb-4 bg-primary/20 backdrop-blur-md">
                        {t.home.hero.badge}
                    </span>
                    <h1 className="text-white text-6xl md:text-5xl font-serif font-medium leading-tight drop-shadow-2xl">
                        {t.home.hero.title_start} <br /> <span className="text-primary italic font-script pr-2">{t.home.hero.title_royalty}</span>
                    </h1>
                    <p className="text-gray-100 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-serif">
                        {t.home.hero.subtitle}
                    </p>

                   
                </div>

            
            </div>

            {/* Brand Story Section - Split Layout */}
            <section className="py-24 bg-background-light relative z-10">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Side - Image */}
                        <div className="w-full lg:w-1/2 relative">
                            <div className="relative h-[600px] w-full rounded-t-full overflow-hidden border-[10px] border-white shadow-2xl">
                                <img
                                    src={portfolioCultural}
                                    alt="Marwadi Wedding Philosophy"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-primary/20 rounded-full animate-spin-slow hidden md:block"></div>
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl hidden md:block"></div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="w-full lg:w-1/2 text-left animate-fade-in-up">
                            <span className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4 block flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-primary"></span>
                                {t.home.philosophy.badge}
                            </span>
                            <h2 className="text-5xl md:text-4xl font-serif text-accent mb-8 leading-tight">
                                {t.home.philosophy.title_start} <br />
                                <span className="italic text-primary font-script text-4xl md:text-4xl">{t.home.philosophy.title_end}</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-loose font-light mb-8 text-justify">
                                {t.home.philosophy.desc}
                            </p>

                            <div className="flex items-center gap-8">
                                <Link to="/about" className="group inline-flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-none text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300">
                                    <span>{t.home.philosophy.cta}</span>
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Key Stats Section - Sliding Marquee */}
            <section className="py-8 bg-accent text-white relative z-20 -mt-12 mx-6 rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="w-full relative z-10 overflow-hidden">
                    <div className="flex w-max animate-scroll">
                        {[...stats, ...stats, ...stats, ...stats].map((stat, index) => (
                            <div key={index} className="flex-shrink-0 w-[300px] text-center px-8 cursor-default group hover:scale-110 transition-transform duration-300">
                                <span className="block text-5xl md:text-6xl font-serif font-bold text-primary mb-2 drop-shadow-lg">{stat.value}</span>
                                <span className="text-sm md:text-base uppercase tracking-widest font-light text-white/80 group-hover:text-white transition-colors">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

         

            {/* Highlighted Services - Marquee Style */}
            <section className="py-24 bg-background-light relative z-10 overflow-hidden">
                <div className="text-center mb-16 px-6">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{t.home.services.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-accent mb-4">{t.home.services.title}</h2>
                    <Link to="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                        {t.home.services.view_all} <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                </div>

                {/* Marquee Container */}
                <div
                    className="relative w-full overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
                >
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto hide-scrollbar w-full py-8 gap-4"
                        style={{ scrollBehavior: 'auto' }} // Ensure immediate scroll for JS
                    >
                        {marqueeServices.map((service, index) => (
                            <div key={`${service.id}-${index}`}>
                                <ServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


           
            {/* <section className="py-24 bg-background-light text-accent relative z-10 overflow-hidden">
               
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#F9F5F0]/50 to-transparent"></div>

                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{t.home.testimonials.badge}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-accent mb-6">{t.home.testimonials.title}</h2>
                    </div>

                    <div
                        className="w-full relative overflow-hidden"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
                    >
                        <div className={`flex w-max gap-8 animate-scroll ${isPaused ? 'pause' : ''}`}>
                            {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                                <div key={index} className="w-[400px] flex-shrink-0">
                                    <TestimonialCard
                                        {...item}
                                        stars={5}
                                        image={[portfolioBride, portfolioCouple, portfolioCultural, serviceDecor][index % 4]}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section> */}




        </div>
    );
};

export default Home;

