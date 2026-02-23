import React from 'react';
import FloatingHearts from '../components/ui/FloatingHearts';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const formRef = useRef(null);

  const faqs = [
    {
      question: t.contact.faq.q1,
      answer: t.contact.faq.a1
    },
    {
      question: t.contact.faq.q2,
      answer: t.contact.faq.a2
    },
    {
      question: t.contact.faq.q3,
      answer: t.contact.faq.a3
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_30cmpd6',
        'template_75bpbfj',
        formRef.current,
        'kH6H-ih3Ia-NGRrJY'
      )
      .then(
        () => {
          alert('Thank you! Your message has been sent.');
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };


  return (
    <div className="w-full relative bg-background-light">
      <FloatingHearts />
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] flex items-center justify-center bg-black/50 overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: 'linear-gradient(rgba(26, 11, 11, 0.4) 0%, rgba(26, 11, 11, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgjQEl9FleGtbUkDe_PfX_IoRuaGsTMUaJ6duDIepQQUU0i-Rok4W45gBsEUYvY153w-UZx_6yKnYIcyE_5q-v1nA7o7gBcdoiD-wDOHiYhx1Bjse2om16veabxuQDfeJCaxocStLUyHdMpE4YBLRXXngsbFXhCX7BMmVK8Ym_3kaT_SMGANheEChFTPg7oWAcpEcTihnd0UUfpngAykyFktnmUzLCLfWJNcS0UW35KAjS91naW7qqcZInArmqLV5rTt6FDFv1-SLG")' }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 animate-fade-in-up">
          <span className="block text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
            {t.contact.hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-medium mb-6">
            {t.contact.hero.title}
          </h1>
          <div className="h-[2px] w-24 bg-primary mx-auto"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="flex justify-center py-24 px-4 md:px-10 lg:px-20 relative z-10">
        <div className="flex flex-col max-w-[1200px] flex-1 gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Inquiry Form */}
            <div className="lg:col-span-7 flex flex-col gap-8 animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-serif text-accent mb-4">{t.contact.form.title}</h2>
                <p className="text-gray-500 font-light text-lg">{t.contact.form.desc}</p>
              </div>
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="flex flex-col gap-6 bg-white p-8 md:p-10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-accent text-sm font-bold uppercase tracking-wide">
                      {t.contact.form.full_name}
                    </span>
                    <input
                      name="full_name"
                      className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 bg-transparent transition-colors placeholder:font-light"
                      placeholder="Enter your name"
                    />
                  </label>

                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-accent text-sm font-bold uppercase tracking-wide">
                      {t.contact.form.phone}
                    </span>
                    <input
                      name="phone"
                      className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 bg-transparent transition-colors placeholder:font-light"
                      placeholder="+91 98765 43210"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-accent text-sm font-bold uppercase tracking-wide">
                      {t.contact.form.email}
                    </span>
                    <input
                      name="email"
                      type="email"
                      className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 bg-transparent transition-colors placeholder:font-light"
                      placeholder="you@example.com"
                    />
                  </label>

                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-accent text-sm font-bold uppercase tracking-wide">
                      {t.contact.form.date}
                    </span>
                    <input
                      name="event_date"
                      type="date"
                      className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 bg-transparent transition-colors placeholder:font-light"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-accent text-sm font-bold uppercase tracking-wide">
                      {t.contact.form.budget}
                    </span>
                    <input
                      name="budget"
                      type="text"
                      className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 bg-transparent transition-colors placeholder:font-light"
                      placeholder="e.g. ₹5-8 Lakh "
                    />
                  </label>

                  <label className="flex flex-col flex-1 gap-2">
                    <span className="text-accent text-sm font-bold uppercase tracking-wide">
                      {t.contact.form.event_type}
                    </span>
                    <input
                      name="event_type"
                      type="text"
                      className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 bg-transparent transition-colors placeholder:font-light"
                      placeholder="Wedding / Engagement / Reception"
                    />
                  </label>
                </div>

                <label className="flex flex-col flex-1 gap-2">
                  <span className="text-accent text-sm font-bold uppercase tracking-wide">
                    {t.contact.form.message}
                  </span>
                  <textarea
                    name="message"
                    className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 bg-transparent transition-colors min-h-[100px] placeholder:font-light"
                    placeholder={t.contact.form.message_placeholder}
                  />
                </label>

                <button
                  type="submit"
                  className="self-start mt-4 px-10 py-3 bg-accent text-white font-bold uppercase tracking-widest hover:bg-white hover:text-accent border border-accent transition-all shadow-lg"
                >
                  {t.contact.form.submit}
                </button>
              </form>

            </div>

            {/* Right Column: Contact Info & Map */}
            <div className="lg:col-span-5 flex flex-col gap-8 animate-fade-in-up delay-100">
              {/* Contact Details Card */}
              <div className="bg-primary text-white p-8 md:p-10 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <span className="material-symbols-outlined text-9xl">contacts</span>
                </div>
                <h3 className="text-3xl font-serif mb-8 relative z-10">{t.contact.info.title}</h3>
                <div className="flex flex-col gap-8 relative z-10">
                  <a href="tel:9414147250" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{t.contact.info.call}</p>
                      <p className="text-lg font-serif text-accent">+91 94141 47250</p>
                    </div>
                  </a>

                  <a href="https://wa.me/9414147250" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 grayscale group-hover:grayscale-0 group-hover:invert-0" alt="WhatsApp" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{t.contact.info.whatsapp}</p>
                      <p className="text-lg font-serif text-accent">Chat on WhatsApp</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-2xl mt-1">mail</span>
                    <div>
                      <p className="text-sm uppercase tracking-widest opacity-70 mb-1">{t.contact.info.email}</p>
                      <p className="text-xl font-serif">contact@mbeventmanagement.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-2xl mt-1">schedule</span>
                    <div>
                      <p className="text-sm uppercase tracking-widest opacity-70 mb-1">{t.contact.info.office_hours}</p>
                      <p className="text-xl font-serif">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
         {/* Location Card */}
<div className="bg-white p-2 shadow-xl">
  <div className="h-[300px] w-full bg-gray-100 relative overflow-hidden group">
    
    <iframe
      src="https://www.google.com/maps?q=27.5548345,73.4771529&z=15&output=embed"
      className="w-full h-full border-0"
      allowFullScreen=""
      loading="lazy"
    ></iframe>

    {/*  Optional: यदि आप location icon चाहते हैं */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-bounce shadow-lg">
        <span className="material-symbols-outlined text-white">location_on</span>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full bg-white/90 p-4">
      <h4 className="font-serif text-accent text-lg">{t.contact.info.studio}</h4>
      <p className="text-sm text-gray-500">
        Tehsil Road, Nokha<br />
        Bikaner, Rajasthan
      </p>
    </div>
  </div>
</div>
            </div>
          </div>

      
        </div>
      </div>
    </div>
  );
};

export default Contact;

