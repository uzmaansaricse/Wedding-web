import React from 'react';
import { Link } from 'react-router-dom';
import FloatingHearts from '../components/ui/FloatingHearts';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  // Images language-independent rahengi
  const testimonialImages = [
    "https://plus.unsplash.com/premium_photo-1682092632793-c7d75b23718e?w=1600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1738408993680-812d3937b7a2?w=1600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1645856052472-95fe99103c11?w=1600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1634992449982-2ca553fa118a?w=1600&auto=format&fit=crop&q=60"
  ];

  return (
    <div className="w-full relative bg-background-light">
      <FloatingHearts />

      {/* Hero */}
      <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(26,11,11,0.4), rgba(26,11,11,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD10N603r50gn32LMlLMlRG77jCbS82WPCz1Gfh1bBzpd7VJq7k9I800zC6r35a5L10mLAFf9rVA651mrq13VHRYblG4QUyQMd1oJqLL4OeVLWh7g3HE63SnMbg9if55F4NPYvtWFWaaab8fVZcVpj2RFFXUzoosb5so6i4Q0GTcYQTVdbHc18c9WTohsCmLTY4N6p6d0otGkkpaimQQMOBklRicrPMM4xYDVsDdsSBKeD54vncI1yt8I9uIMuts1Q7LT0q7_moE_oR")'
          }}
        />
        <div className="relative z-10 text-center text-white">
          <span className="block text-primary font-bold tracking-[0.3em] uppercase mb-4">
            {t.testimonials.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif">
            {t.testimonials.hero.title}
          </h1>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto flex justify-center gap-16">
          {Object.values(t.testimonials.stats).map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-serif text-accent">{stat.val}</div>
              <div className="text-sm uppercase tracking-widest text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews – LANGUAGE BASED */}
      <section className="bg-[#1a0b0b]">
        {t.testimonials.items.map((item, index) => {
          const reverse = index % 2 !== 0;
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              <div className={reverse ? "md:order-2" : ""}>
                <img
                  src={testimonialImages[index % testimonialImages.length]}
                  alt={item.name}
                  className="w-full h-[320px] md:h-[420px] object-cover"
                />
              </div>

              <div
                className={`px-8 md:px-14 py-12 flex flex-col justify-center text-white ${
                  reverse ? "md:order-1" : ""
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-serif text-[#d4af37] mb-4">
                  {item.title}
                </h3>

                <p className="italic text-white/80 mb-6">
                  “{item.quote}”
                </p>

                <p className="font-serif text-[#d4af37]">
                  {item.name}
                </p>
                <p className="text-xs uppercase tracking-widest opacity-70">
                  {item.location} • {item.date}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <div className="py-24 bg-white text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-accent mb-6">
          {t.testimonials.cta.title}
        </h2>
        <p className="text-gray-500 mb-10">
          {t.testimonials.cta.desc}
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="bg-primary text-white px-10 py-4 font-bold uppercase"
          >
            {t.testimonials.cta.book_consult}
          </Link>
          <Link
            to="/portfolio"
            className="border border-accent text-accent px-10 py-4 font-bold uppercase"
          >
            {t.testimonials.cta.view_gallery}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
