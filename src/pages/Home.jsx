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

const Home = () => {
    const { t } = useLanguage();

    // Map services array using translations
    const services = [
        {
            title: t.home.services.venue.title,
            icon: 'castle',
            img: serviceVenue,
            desc: t.home.services.venue.desc
        },
        {
            title: t.home.services.decor.title,
            icon: 'yard',
            img: serviceDecor,
            desc: t.home.services.decor.desc
        },
        {
            title: t.home.services.hospitality.title,
            icon: 'concierge',
            img: serviceHospitality,
            desc: t.home.services.hospitality.desc
        },
    ];

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

            {/* Brand Story Section - Minimal & Elegant */}
            <section className="py-24 bg-background-light relative z-10">
                <div className="max-w-[1000px] mx-auto px-6 text-center">
                    <div className="w-[1px] h-20 bg-primary/30 mx-auto mb-8"></div>
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">{t.home.philosophy.badge}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-accent mb-8 leading-snug">
                        {t.home.philosophy.title_start} <br /><span className="italic text-gray-500">{t.home.philosophy.title_end}</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-loose font-light max-w-3xl mx-auto">
                        {t.home.philosophy.desc}
                    </p>
                    <div className="mt-12">
                        <Link to="/about" className="text-accent border-b border-accent/20 pb-1 hover:border-primary hover:text-primary transition-all text-sm uppercase tracking-widest">{t.home.philosophy.cta}</Link>
                    </div>
                </div>
            </section>

            {/* Highlighted Services - Visual Cards */}
            <section className="py-24 bg-white relative z-10">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                        <div>
                            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{t.home.services.badge}</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-accent">{t.home.services.title}</h2>
                        </div>
                        <Link to="/services" className="hidden md:flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                            {t.home.services.view_all} <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                        {services.map((service, i) => (
                            <div key={i} className="group relative h-[500px] overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${service.img}")` }}></div>
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500"></div>

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white transition-transform duration-500">
                                    <span className="material-symbols-outlined text-5xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500 font-light">{service.icon}</span>
                                    <h3 className="text-3xl font-serif mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{service.title}</h3>
                                    <p className="text-white/80 font-light max-w-xs opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        {service.desc}
                                    </p>
                                    <span className="mt-8 text-xs uppercase tracking-widest border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-accent transition-all opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-500 delay-200">
                                        {t.home.services.explore}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-12 md:hidden">
                        <Link to="/services" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                            {t.home.services.view_all} <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </Link>
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
            <section className="py-24 bg-accent text-white relative z-10">
                <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl font-serif">"</div>
                <div className="max-w-[1000px] mx-auto px-6 text-center relative">
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-8 block">{t.home.testimonials.badge}</span>

                    <div className="relative">
                        {/* Static Single Testimonial for Luxury Feel (Carousel logic can be complex without library) */}
                        <div className="animate-fade-in-up">
                            <p className="text-2xl md:text-4xl font-serif leading-normal italic text-white/90 mb-8">
                                {t.home.testimonials.quote}
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full border-2 border-primary p-1 mb-4">
                                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzHkqNv0rYwHrQ65Z9nRl6Ydpu6oeC3OS9gakdjM6QCdu_7O7c9nRlsLoMR7fFUOjVEU--LQitCpf4jKAJRt_eFaaT-qZe2THnfWUlhCSjlzAtKNybgsSrBhY96TEk8_YemjyN_CZGPU-1eLVy8xM8aTmbvUW4CGtcuECm01HLNvqa70t4lSw7n-Wl5Ydce1-TjMD6o9Q26-sTmFXvSWsXT4eiIMls19qMSPmj4Pc7sDAdhl82ek3woFfX56_y7787M-aAQibm3ka_" className="w-full h-full rounded-full object-cover" alt="Client" />
                                </div>
                                <h4 className="text-primary text-lg font-bold tracking-wide">{t.home.testimonials.client}</h4>
                                <span className="text-white/50 text-sm">{t.home.testimonials.location}</span>
                            </div>
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

