import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import FloatingHearts from '../components/ui/FloatingHearts';
import { useLanguage } from '../context/LanguageContext';
import serviceVenue from '../assets/images/home/service-venue.png';
import serviceDecor from '../assets/images/home/service-decor.png';
import serviceHospitality from '../assets/images/home/service-hospitality.png';
import portfolioBride from '../assets/images/home/portfolio-bride.png';
import portfolioDecor from '../assets/images/home/portfolio-decor.png';
import portfolioCouple from '../assets/images/home/portfolio-couple.png';
import portfolioCultural from '../assets/images/home/portfolio-cultural.png';



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
        { value: '100+', label: 'Happy Couples' },
        { value: '50+', label: 'Luxury Venues' },
        { value: '25+', label: 'Awards Won' },
    ];

    const testimonials = t.testimonials.items;

const [activeIndex, setActiveIndex] = useState(0);
const [paused, setPaused] = useState(false);

useEffect(() => {
  if (paused || testimonials.length <= 1) return;

  const interval = setInterval(() => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [paused, testimonials.length]);

    // Map services array using translations
    // Full Services List for Marquee
    const services = [
        { id: 'venues', number: '01', title: t.services.list.venues.title, description: t.services.list.venues.desc, image: serviceVenue, icon: 'castle' },
        { id: 'decor', number: '02', title: t.services.list.decor.title, description: t.services.list.decor.desc, image: serviceDecor, icon: 'yard' },
        { id: 'food', number: '03', title: t.services.list.catering.title, description: t.services.list.catering.desc, image: serviceHospitality, icon: 'restaurant_menu' },
        { id: 'photography', number: '04', title: t.services.list.cinematography.title, description: t.services.list.cinematography.desc, image: portfolioCouple, icon: 'photo_camera' },
        { id: 'makeup', number: '05', title: t.services.list.styling.title, description: t.services.list.styling.desc, image: portfolioBride, icon: 'brush' },
        { id: 'budget', number: '06', title: t.services.list.budget.title, description: t.services.list.budget.desc, image: portfolioDecor, icon: 'account_balance_wallet' },
        { id: 'vendor', number: '07', title: t.services.list.vendor.title, description: t.services.list.vendor.desc, image: serviceHospitality, icon: 'groups' },
        { id: 'invites', number: '08', title: t.services.list.invites.title, description: t.services.list.invites.desc, image: serviceDecor, icon: 'mail' },
        { id: 'entertainment', number: '09', title: t.services.list.entertainment.title, description: t.services.list.entertainment.desc, image: portfolioCultural, icon: 'celebration' },
        { id: 'destination', number: '10', title: t.services.list.destination.title, description: t.services.list.destination.desc, image: serviceVenue, icon: 'public' },
        { id: 'prewedding', number: '11', title: t.services.list.prewedding.title, description: t.services.list.prewedding.desc, image: portfolioCouple, icon: 'favorite' },
        { id: 'rituals', number: '12', title: t.services.list.rituals.title, description: t.services.list.rituals.desc, image: portfolioDecor, icon: 'auto_awesome' },
        { id: 'coordination', number: '13', title: t.services.list.coordination.title, description: t.services.list.coordination.desc, image: serviceHospitality, icon: 'event_available' },
        { id: 'shopping', number: '14', title: t.services.list.shopping.title, description: t.services.list.shopping.desc, image: portfolioBride, icon: 'shopping_bag' },
        { id: 'timeline', number: '15', title: t.services.list.timeline.title, description: t.services.list.timeline.desc, image: serviceVenue, icon: 'schedule' },
        { id: 'proposal', number: '16', title: t.services.list.proposal.title, description: t.services.list.proposal.desc, image: portfolioCouple, icon: 'favorite_border' },
        { id: 'transport', number: '17', title: t.services.list.transport.title, description: t.services.list.transport.desc, image: serviceDecor, icon: 'directions_car' }
    ];

    // Duplicate for infinite scroll
    const marqueeServices = [...services, ...services];

    return (
        <div className="w-full relative overflow-hidden">
            <FloatingHearts />

            {/* Hero Section */}
            <div className="relative flex min-h-[100vh] flex-col items-center justify-center gap-8 p-8 text-center overflow-hidden">

                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full z-0 bg-black">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                        poster="https://images.unsplash.com/photo-1596395817838-3482386db8fe?q=80&w=2070&auto=format&fit=crop"
                    >
                        <source src="https://static.videezy.com/system/resources/previews/000/004/938/original/Golden_Particles_Falling.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
                </div>

                <div className="flex flex-col gap-6 max-w-[900px] relative z-10 animate-fade-in-up mt-20">
                    <span className="text-white uppercase tracking-[0.3em] text-sm md:text-base font-bold drop-shadow-md border border-white/30 px-6 py-2 rounded-full inline-block mx-auto mb-4 bg-white/10 backdrop-blur-md">
                        {t.home.hero.badge}
                    </span>
                    <h1 className="text-white text-6xl md:text-8xl font-serif font-medium leading-tight drop-shadow-2xl">
                        {t.home.hero.title_start} <br /> <span className="text-[#D4AF37] italic font-script pr-2">{t.home.hero.title_royalty}</span>
                    </h1>
                    <p className="text-gray-100 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-serif italic">
                        {t.home.hero.subtitle}
                    </p>

                    <div className="mt-8 flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link to="/contact" className="bg-[#D4AF37] hover:bg-white hover:text-[#D4AF37] text-white text-lg font-bold uppercase tracking-wider px-12 py-4 rounded-full border border-[#D4AF37] transition-all duration-300 shadow-xl w-full md:w-auto transform hover:scale-105">
                            {t.home.hero.cta_plan}
                        </Link>
                        <Link to="/services" className="group flex items-center gap-3 text-white text-lg font-medium tracking-wide hover:text-[#D4AF37] transition-colors cursor-pointer w-full md:w-auto justify-center">
                            <span className="border-b border-white/50 group-hover:border-[#D4AF37] pb-1 transition-all">{t.home.hero.cta_portfolio}</span>
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>
                </div>

                {/* Scroll Down Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/70 flex flex-col items-center gap-2 z-10">
                    <span className="text-xs uppercase tracking-widest">{t.home.hero.scroll}</span>
                    <span className="material-symbols-outlined">expand_more</span>
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
                            <h2 className="text-5xl md:text-6xl font-serif text-accent mb-8 leading-tight">
                                {t.home.philosophy.title_start} <br />
                                <span className="italic text-primary font-script text-6xl md:text-7xl">{t.home.philosophy.title_end}</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-loose font-light mb-8 text-justify">
                                {t.home.philosophy.desc}
                            </p>

                            <div className="flex items-center gap-8">
                                <Link to="/about" className="group inline-flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-none text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300">
                                    <span>{t.home.philosophy.cta}</span>
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                                <div className="hidden md:flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"><img src={portfolioCouple} className="w-full h-full object-cover" /></div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"><img src={portfolioBride} className="w-full h-full object-cover" /></div>
                                        <div className="w-12 h-12 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">+500</div>
                                    </div>
                                    <span className="text-sm font-serif italic text-gray-500">Happy Couples</span>
                                </div>
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

            {/* Why Choose Us Section - Split Layout (Text Left, Image Right) */}
            <section className="py-24 bg-background-light relative z-10">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Side - Content */}
                        <div className="w-full lg:w-1/2 text-left animate-fade-in-up order-2 lg:order-1">
                            <span className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4 block flex items-center gap-2">
                                <span className="w-8 h-[1px] bg-primary"></span>
                                Why Choose Us
                            </span>
                            <h2 className="text-5xl md:text-6xl font-serif text-accent mb-8 leading-tight">
                                Creating Timeless <br />
                                <span className="italic text-primary font-script text-6xl md:text-7xl">Memories</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-loose font-light mb-8 text-justify">
                                We prefer quality over quantity. Our team is dedicated to making your special day truly unforgettable with personalized attention to every detail. From royal decor to seamless execution, we ensure perfection.
                            </p>

                            <ul className="space-y-6 mb-10">
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-2xl mt-1">verified</span>
                                    <div>
                                        <h4 className="text-xl font-serif text-accent font-bold">Files Personalized Approach</h4>
                                        <p className="text-gray-500 font-light text-sm">Every wedding is unique, and so are our designs.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-2xl mt-1">groups</span>
                                    <div>
                                        <h4 className="text-xl font-serif text-accent font-bold">Experienced Team</h4>
                                        <p className="text-gray-500 font-light text-sm">Over a decade of expertise in luxury events.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary text-2xl mt-1">diamond</span>
                                    <div>
                                        <h4 className="text-xl font-serif text-accent font-bold">Exclusive Vendors</h4>
                                        <p className="text-gray-500 font-light text-sm">Access to the best artisans and venues in Rajasthan.</p>
                                    </div>
                                </li>
                            </ul>

                            <Link to="/contact" className="group inline-flex items-center gap-3 bg-accent text-white px-10 py-4 rounded-none text-sm font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300">
                                <span>Start Planning</span>
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Right Side - Image */}
                        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 p-8">
                            {/* Offset decorative border */}
                            <div className="absolute top-0 left-12 w-full h-full border-2 border-primary/30 rounded-t-full rounded-b-full -z-10 hidden md:block transform translate-x-4 translate-y-4"></div>

                            <div className="relative h-[600px] w-full rounded-t-full rounded-b-full overflow-hidden border-8 border-white shadow-2xl shadow-primary/20">
                                <img
                                    src={portfolioBride}
                                    alt="Why Choose Us"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                                {/* Floating Badge */}
                                <div className="absolute bottom-12 right-0 md:-right-6 bg-white/90 backdrop-blur-md p-6 rounded-none shadow-xl max-w-[200px] border-l-4 border-primary animate-fade-in-up">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="material-symbols-outlined text-primary filled">verified</span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-accent">Premium Quality</span>
                                    </div>
                                    <p className="text-xs text-gray-500 font-light leading-relaxed">Recognized as the top wedding styling agency in Rajasthan.</p>
                                </div>
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                        </div>

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

            {/* Gallery Preview - Masonry Style */}
            <section className="py-24 bg-background-light relative z-10">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{t.home.portfolio.badge}</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-accent mb-6">{t.home.portfolio.title}</h2>
                        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto">{t.home.portfolio.desc}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[800px]">
                        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-sm group">
                            <img src={portfolioBride} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Bride" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                        </div>
                        <div className="col-span-1 row-span-1 relative overflow-hidden rounded-sm group">
                            <img src={portfolioDecor} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Decor" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                        </div>
                        <div className="col-span-1 row-span-2 relative overflow-hidden rounded-sm group">
                            <img src={portfolioCouple} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Couple" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                        </div>
                        <div className="col-span-1 row-span-1 relative overflow-hidden rounded-sm group">
                            <img src={portfolioCultural} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Flowers" />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/contact" className="inline-block border border-accent text-accent hover:bg-accent hover:text-white transition-all px-10 py-3 uppercase tracking-widest text-sm font-bold">
                            {t.home.portfolio.cta}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Preview - Elegant Slider */}
<section className="py-24 text-white relative z-10 overflow-hidden group">

  {/* Soft luxury background */}
  <div className="
    absolute inset-0
    bg-gradient-to-br
    from-[#1c1a17]
    via-[#26231d]
    to-[#1c1a17]
  "></div>

  {/* Gentle warm glow */}
  <div className="
    absolute inset-0
    bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_65%)]
  "></div>

  {/* Subtle vignette for focus */}
  <div className="
    absolute inset-0
    bg-gradient-to-r
    from-black/30
    via-transparent
    to-black/30
  "></div>

  {/* Content */}
  <div className="relative z-10">

    {/* Minimal divider */}
    <div className="w-12 h-[2px] bg-primary mx-auto mb-12 opacity-70"></div>

    <div
  className="relative overflow-hidden group"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>
{/* Top Left */}
<div className="
  cracker-burst
  top-[15%] left-[10%]
  group-hover:animate-[cracker-pop_650ms_ease-out]
" 
style={{ animationDelay: "0ms" }}
/>

{/* Top Right */}
<div className="
  cracker-burst
  top-[15%] right-[10%]
  group-hover:animate-[cracker-pop_650ms_ease-out]
" 
style={{ animationDelay: "300ms" }}
/>

{/* Bottom Left */}
<div className="
  cracker-burst
  bottom-[15%] left-[10%]
  group-hover:animate-[cracker-pop_650ms_ease-out]
" 
style={{ animationDelay: "600ms" }}/>

{/* Bottom Right */}
<div className="
  cracker-burst
  bottom-[15%] right-[10%]
  group-hover:animate-[cracker-pop_650ms_ease-out]
" 
style={{ animationDelay: "900ms" }}/>


        
      <div
        className="flex transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-full flex justify-center px-4"
          >
            <div className="max-w-[680px] text-center">

              <p className="text-xl md:text-3xl font-serif italic text-white/90 mb-8 leading-relaxed">
                “{item.quote}”
              </p>

              <div className="flex flex-col items-center gap-1">
                <div className="w-14 h-14 rounded-full border border-primary/60 p-1 mb-2">
                  <div className="w-full h-full rounded-full bg-primary/15" />
                </div>

                <h4 className="text-primary text-sm font-semibold tracking-widest uppercase">
                  {item.name}
                </h4>
                <span className="text-white/50 text-xs tracking-wide">
                  {item.location} · {item.date}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>



            {/* CTA Section - Minimal */}
            <div className="py-32 bg-background-light relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
                    <h2 className="text-5xl md:text-7xl font-serif text-accent mb-8">{t.home.cta_section.title}</h2>
                    <p className="text-gray-500 text-lg mb-12 font-light">{t.home.cta_section.subtitle}</p>
                    <Link to="/contact" className="bg-primary text-white hover:bg-primary-dark transition-all px-12 py-5 rounded-full text-lg font-bold uppercase tracking-wider shadow-xl shadow-primary/20">
                        {t.home.cta_section.button}
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Home;

