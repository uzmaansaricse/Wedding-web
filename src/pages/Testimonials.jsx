import React from 'react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/ui/FloatingHearts';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
    const { t } = useLanguage();

    const testimonials = [
        {
            id: 1,
            title: "A Dream Destination Wedding",
            quote: "We were worried about managing a destination wedding from the US, but the team handled everything flawlessly. The decor at the Sangeet was exactly what I envisioned—vibrant and elegant.",
            image: "https://plus.unsplash.com/premium_photo-1682092632793-c7d75b23718e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFyd2FyaSUyMHdlZGRpbmd8ZW58MHwwfDB8fHww",
            name: "Priya & Arjun",
            location: "Udaipur",
            date: "Dec 2023",
            stars: 5
        },
        {
            id: 2,
            title: "Budget-Friendly yet Luxurious",
            quote: "We had a strict budget for our reception, but didn't want to compromise on the food or the look. They suggested amazing alternatives that looked premium but cost half the price.",
            image: "https://images.unsplash.com/photo-1738408993680-812d3937b7a2?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG1hcndhcmklMjB3ZWRkaW5nfGVufDB8MHwwfHx8MA%3D%3D",
            name: "Neha & Rohan",
            location: "Bikaner",
            date: "Jan 2024",
            stars: 4
        },
        {
            id: 3,
            title: "Perfect Traditional Ceremony",
            quote: "The attention to ritual detail was impressive. They understood the importance of the muhurtham timing and ensured everything flowed smoothly. My parents were so relieved.",
            image: "https://images.unsplash.com/photo-1645856052472-95fe99103c11?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxtYXJ3YXJpJTIwd2VkZGluZ3xlbnwwfDB8MHx8fDA%3D",
            name: "Lakshmi & Karthik",
            location: "Jodhpur",
            date: "Nov 2023",
            stars: 5
        },
        {
            id: 4,
            title: "Perfect Traditional Ceremony",
            quote: "The attention to ritual detail was impressive. They understood the importance of the muhurtham timing and ensured everything flowed smoothly. My parents were so relieved.",
            image: "https://images.unsplash.com/photo-1634992449982-2ca553fa118a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hcndhcmklMjB3ZWRkaW5nfGVufDB8MHwwfHx8MA%3D%3D",
            name: "Lakshmi & Karthik",
            location: "Jodhpur",
            date: "Nov 2023",
            stars: 5
        },
    ];

    const videos = [
        {
            id: 1,
            title: "Royal Palace Highlights",
            meta: "Riya & Amit • Udaipur",
            thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS0i6l7uoPdxdTsX_V9-5jlmLJsvmFrjrBiYiwi8dwMoJILiSxusd38dijG4y1-11rIdbdAVlSciT9_uQg4n13cds5qnWA8MBCEZ89FB9WDIL2n8N_u5hDIFtQ1n8W319zxdjKzfLX-xBnwHYppny-xqtMJ7_xpjvYVqh7zIhlazoUi3Bx5LlFm8wb91seJ07pyGXECenqvrH4GSUL0_HXV_lKhPkCeLVS1toG8pFADdzdrlY0yNVfnzhu2Bl-D6ml2DzuYEGuZZKH"
        },
        {
            id: 2,
            title: "Lakeside Sangeet",
            meta: "Tara & Vihaan • Udaipur",
            thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH_o_p2XiYdIIpulwYZ3gek2AsHOt2uIMTLSV9Hcl-b4GYps8E3DMB2qgVS_iT9wsOUQn-FKxXr9Pos4gh3eYKWktnWGouH5nwZBxquPOJsuIA95a_EBUYaE8VcC9Ti5LdbbcmMe06WMmnhChvaf85f4-uIv5d2DMb7-CLTD6G498fh7tXJfh8snlBe5vPQtRXJ0o-POTMR3u8LgZ3RyA1icLWU3dnuJJ2qOJlzr15kQJlvPu-cQDaq1NSiiup_rw5X60QmBKxo3uG"
        },
        {
            id: 3,
            title: "Haldi Fun Moments",
            meta: "Kavya & Sam • Jaipur",
            thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7EyX-ukodzFljS6p1kl1YzK1A6dMjSKqEOy2cy18nAKXRgMmI4GpKp6NWAg1txV06xFDIQ_LL2Bpu0ILg-y1EXbEEXbyF2tz4H2yraCWA3otwuiC1kN6hWb7vY5HkKh98wtbaEbBpYLzr1pjhLDsuVhD0OW0Qz8aStoctLQZSDId7UEcho8BckcET0Es3R2DdY72nzQfMaqaUIaYby3F9xzIJ361Tkpi_nyf7sqTPr3GgVi5-KkMGD44XTN_zNQX8w-yEwQsBf59F"
        }
    ];

    return (
        <div className="w-full relative bg-background-light">
            <FloatingHearts />
            {/* Hero Section */}
            <div className="relative w-full h-[50vh] flex items-center justify-center bg-black/50 overflow-hidden">
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
                    style={{ backgroundImage: 'linear-gradient(rgba(26, 11, 11, 0.4) 0%, rgba(26, 11, 11, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD10N603r50gn32LMlLMlRG77jCbS82WPCz1Gfh1bBzpd7VJq7k9I800zC6r35a5L10mLAFf9rVA651mrq13VHRYblG4QUyQMd1oJqLL4OeVLWh7g3HE63SnMbg9if55F4NPYvtWFWaaab8fVZcVpj2RFFXUzoosb5so6i4Q0GTcYQTVdbHc18c9WTohsCmLTY4N6p6d0otGkkpaimQQMOBklRicrPMM4xYDVsDdsSBKeD54vncI1yt8I9uIMuts1Q7LT0q7_moE_oR")' }}
                >
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
                    <span className="block text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
                        {t.testimonials.hero.badge}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
                        {t.testimonials.hero.title}
                    </h1>
                    <div className="h-[2px] w-24 bg-primary mx-auto"></div>
                </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white py-12 border-b border-primary/10 relative z-10">
                <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-12 px-6 md:gap-24">
                    {[
                        { icon: 'verified', val: t.testimonials.stats.rating.val, label: t.testimonials.stats.rating.label },
                        { icon: 'groups', val: t.testimonials.stats.years.val, label: t.testimonials.stats.years.label },
                        { icon: 'award_star', val: t.testimonials.stats.ranking.val, label: t.testimonials.stats.ranking.label }
                    ].map((stat, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                            <span className="material-symbols-outlined text-5xl text-primary/80 group-hover:scale-110 transition-transform">{stat.icon}</span>
                            <div className="flex flex-col">
                                <span className="text-3xl font-serif font-bold text-accent">{stat.val}</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            {/* Story Style Testimonials – Reduced Height */}
            <section className="bg-[#1a0b0b]">
                {testimonials.map((testimonial, index) => {
                    const isReverse = index % 2 !== 0;

                    return (
                        <div
                            key={testimonial.id}
                            className="grid grid-cols-1 md:grid-cols-2 items-stretch"
                        >
                            {/* Image */}
                            <div className={`${isReverse ? 'md:order-2' : 'md:order-1'}`}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-full h-[320px] md:h-[420px] object-cover"
                                />
                            </div>

                            {/* Text */}
                            <div
                                className={`px-8 md:px-14 py-12 md:py-16 flex flex-col justify-center text-white ${isReverse ? 'md:order-1' : 'md:order-2'
                                    }`}
                            >
                                <h3 className="text-2xl md:text-3xl font-serif mb-4 text-[#d4af37]">
                                    {testimonial.title}
                                </h3>

                                <p className="text-base md:text-lg leading-relaxed mb-6 font-light italic text-white/80">
                                    “{testimonial.quote}”
                                </p>

                                <p className="font-serif text-lg text-[#d4af37]">
                                    {testimonial.name}
                                </p>
                                <p className="text-xs uppercase tracking-widest opacity-70 mt-1">
                                    {testimonial.location} • {testimonial.date}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </section>


            {/* Video Testimonials */}


            {/* CTA Section */}
            <div className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-accent mb-8">{t.testimonials.cta.title}</h2>
                    <p className="text-gray-500 text-lg mb-12 font-light">
                        {t.testimonials.cta.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="bg-primary text-white hover:bg-primary-dark transition-all px-12 py-4 rounded-none text-lg font-bold uppercase tracking-wider shadow-xl shadow-primary/20">
                            {t.testimonials.cta.book_consult}
                        </Link>
                        <Link to="/portfolio" className="bg-white text-accent border border-accent hover:bg-accent hover:text-white transition-all px-12 py-4 rounded-none text-lg font-bold uppercase tracking-wider">
                            {t.testimonials.cta.view_gallery}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

