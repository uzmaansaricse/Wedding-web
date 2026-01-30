import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/ui/FloatingHearts';
import { useLanguage } from '../context/LanguageContext';

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
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAJl2-AitfK0cw4zxudnCYbLgyI13sqwJGyP7n7mb5_7pEPmvGClTli1zx_gbOqddrcBifjqCdrA3iYYHkl6zeUh4Rrjaeqh2q3ZuoYr5ZZS--O0UGsa78GT3Mw1J4PaG2eTxNHN_o-bPG7of_SBDiYpPBIylodVSUGHam9seDJIJvVesyKC00d_9KiDl_wAPEep-0wMzUI04J93WHFhzacM8PxuiZ_PvZx-PxvLBvEnz4w39MoQYxN_N7SAvkzKE2nBDezgAlSeB7-',
                'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAtGYIce2Grnb5NWT01BYg0QBON2cisMXNkInaQaqQBdcJBb20wOUizoIGMQG-CwdP8PMNLCPO0hAVuOrGg_LMnBcKv7XoTpHZCXxPA3GKda7Desgyza-EZba0JFNZNGas379Cq7Clz_xPTCV5HL-E23PxnsURcGDgHOUKaZJ5ozwiWxi-JGk8gjCUBkJj2LvigzXNebEiwNQpmfp4Uu4QTiWbPBplF6GUcmXxqBDo-OKVX1-9RIrHajQPf0mT8naPP9zlpY_0i1Owj'
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
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBiLtS26EHZZV2-hqCG3BWnwRnt-7CdbNPcW3zBmj25PhwD_AWvbsnhNI23zYe7bXn3yKGFu1-OL5iaIzK5nzOlK5X3gcldW8UdRwy9VTeQeGVfNChRYPQLpISI7EU0fvy-Vpq3YDG3K2Yqml74Dw2XT-HbTH6N9BwkDH1lOFcJ80SMoFt3N5k5jbmia5e63NqUIxn1Cfxyp7VNCjRHPq3B3B_f7UXPG7QNJ-kYOiluF0v93Am8A28af3tPUbMSDsYbemUfpkfYjZDv',
                'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=80',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuC37UkIP9MM0HTNvTayjym32plgkSV0goE_2dq96NdUzJW_Dcn10y3UmWTzv_4nl_mzwmaN8oyWhfmlK9YOSThjfk7loalUnuUzde8BgaS8UmKzTz9k3DZQkuv_jOMbABeVz9xgi4NeT5xDQRJ-j6Yctq134qskRgP7UFcT5L61J-OpXe_eTWwY8YHL8bKgdLSjeWUXpk7s_jz7UrMewOPXgXDLjuyWstlNaVAl_fErc8WhqcMP0zv9qIf-RioVHt7cUQB5BkZGN8gN'
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
                'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80',
                'https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=2000&auto=format&fit=crop'
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
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAb8CBe_P5JhPEpje7a9kmty35VuMIgEOea_rO-uVJLPaHR8bN1wxbeXELmloWJcq6bXjCxytBeGR1gWmLMh-AZOWwPUfbuBbKu_7EcMB3lCJx7tr9JTT_aXAWMesUKhSTSMdfSgQNCK2TKzJ1qHgIXmS8WsC3Ea4AVSGaw7Ug-H27_lYi3kUY_m4D7MBj9mlmrN9wUMnRmGKPjiz9bIjb898DdDKxCX2aqkF4FkWinwIGF9-3u4sWojlrRYGHBwpHoW24SYisnCifJ',
                'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuBdnCwpAwGrde1XjJpFG4dlhXwwTTdToUA94Fe2ujNMnaj2S6SjzUhDcME0aUlJcJojpk8JPsQgNL9XlDH9AdjoQnEhD9vuwRHZpc6BV7bCUCZJeBxBSmrha7ax8NvQ9ceFHnIuMh2M0eEo9A7DQLPF4y-Te-Mm6jMzD7UmA9X5xREdoBPP1Y4cGfkmyvk3wRODkvB41i2JWMfWi9iHWA-f-f5GKrIibZ3DPW5VA2pcAUXXuUvJMC3eb9mttUyEeElDvyoojz3y9ACq'
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
                'https://lh3.googleusercontent.com/aida-public/AB6AXuAPuKOPwfIh-yh5i3fqlGsEPD1EGYeS1ONtPsVnwSDWi3xkPiPLb5h3z8autxQ-NeF-gjJcDM1C6c2J9_9MIbPVrQmYaTUOpKZr-IKzg_fmsLfQYSTIo9ySz-bj8jDsLRn3rAkngMZVZruRFGN1Gng9WzMnGKOPifO0lNtMbA1B0Juvz6sf5Xd6CelsWziwVs3SiYN5AsmYiIT18BtlxX6BaR6ZBkc9VVq6M6Or8vF5vsbPvaX8PR9P21-UMAyaFkCgEvud5CNm3uXL',
                'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
                'https://images.unsplash.com/photo-1487412947132-28c53bffa326?q=80&w=1974&auto=format&fit=crop'
            ],
            icon: 'brush',
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
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2669&auto=format&fit=crop")' }}
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

