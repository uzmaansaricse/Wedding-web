import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const isActive = (path) =>
    location.pathname === path
      ? 'text-white'
      : 'text-[#D4AF37] hover:text-white';

  const navLinks = [
    { name: t.navbar.home, path: '/' },
    { name: t.navbar.about, path: '/about' },
    { name: t.navbar.services, path: '/services' },
    // { name: 'Gallery', path: '/portfolio' },
    { name: t.navbar.testimonials, path: '/testimonials' },
    { name: t.navbar.contact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1a0b0b]/95 backdrop-blur-md border-b border-white/10 shadow-xl">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center justify-between py-3">

          {/* LEFT : LOGO */}
          <div>
            <div className="mx-auto w-20 h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-2 relative">
              <span className="absolute -top-3 text-[#D4AF37] text-sm">✦</span>
              <span className="text-[#D4AF37] text-2xl font-serif font-bold">
                MB
              </span>
            </div>

            <h2 className="text-[#D4AF37] text-sm tracking-widest uppercase mb-4">
              {t.navbar.brand_subtitle}
            </h2>

            <div className="flex justify-center gap-4 text-xl">
              <i className="fa-brands fa-facebook-f cursor-pointer" />
              <i className="fa-brands fa-youtube cursor-pointer" />
              <i className="fa-brands fa-instagram cursor-pointer" />
            </div>
          </div>

          {/* CENTER : LEFT NAV LINKS */}
          <nav className="flex items-center gap-10">
            <Link to="/" className={`${isActive('/')} text-3xl font-script transition-all`}>
              {t.navbar.home}
            </Link>
            <Link to="/about" className={`${isActive('/about')} text-3xl font-script transition-all`}>
              {t.navbar.about}
            </Link>
            <Link to="/services" className={`${isActive('/services')} text-3xl font-script transition-all`}>
              {t.navbar.services}
            </Link>
            {/* <Link to="/portfolio" className={`${isActive('/portfolio')} text-3xl font-script transition-all`}>
              Gallery
            </Link> */}
            <Link to="/testimonials" className={`${isActive('/testimonials')} text-3xl font-script transition-all`}>
              {t.navbar.testimonials}
            </Link>
          </nav>

          {/* RIGHT : RIGHT NAV LINKS & LANG SWITCHER */}
          <div className="flex items-center gap-10">
            <nav className="flex items-center gap-10">
              <Link to="/contact" className={`${isActive('/contact')} text-3xl font-script transition-all`}>
                {t.navbar.contact}
              </Link>
            </nav>

            {/* Language Switcher */}
            <div className="text-[#D4AF37] flex gap-2 text-sm font-bold border border-[#D4AF37]/30 px-3 py-1 rounded-full">
              <button
                onClick={() => toggleLanguage('en')}
                className={`${language === 'en' ? 'text-white' : 'hover:text-white transition-colors'}`}
              >
                {t.navbar.switch_en}
              </button>
              <span>|</span>
              <button
                onClick={() => toggleLanguage('hi')}
                className={`${language === 'hi' ? 'text-white' : 'hover:text-white transition-colors'}`}
              >
                {t.navbar.switch_hi}
              </button>
            </div>
          </div>

        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div className="lg:hidden flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 text-[#D4AF37]">
            <span className="material-symbols-outlined text-3xl">favorite</span>
            <span className="text-2xl font-script tracking-wide">
              {t.navbar.brand_name}
            </span>

          </Link>

          <div className="flex items-center gap-4">
            {/* Mobile Language Switcher */}
            <div className="text-[#D4AF37] flex gap-2 text-xs font-bold border border-[#D4AF37]/30 px-2 py-1 rounded-full">
              <button
                onClick={() => toggleLanguage('en')}
                className={`${language === 'en' ? 'text-white' : 'hover:text-white transition-colors'}`}
              >
                {t.navbar.switch_en}
              </button>
              <span>|</span>
              <button
                onClick={() => toggleLanguage('hi')}
                className={`${language === 'hi' ? 'text-white' : 'hover:text-white transition-colors'}`}
              >
                {t.navbar.switch_hi}
              </button>
            </div>

            <button
              className="text-[#D4AF37]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1a0b0b] border-t border-white/10 px-6 py-6 flex flex-col gap-6 absolute w-full left-0 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[#D4AF37] text-2xl font-script hover:text-white transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;

