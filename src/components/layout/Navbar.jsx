import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const isActive = (path) =>
    location.pathname === path
      ? 'text-primary'
      : 'text-primary hover:text-primary';

  const navLinks = [
    { name: t.navbar.home, path: '/' },
    { name: t.navbar.about, path: '/about' },
    { name: t.navbar.services, path: '/services' },
    { name: t.navbar.testimonials, path: '/testimonials' },
    { name: t.navbar.contact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/10 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center justify-between py-2">

          {/* LEFT : LOGO */}
          <div>
            <div className="mx-auto w-20 h-20 border-2 border-primary rounded-full flex items-center justify-center mb-2 relative">
              <span className="absolute -top-3 text-primary text-sm">✦</span>
              <span className="text-primary text-2xl font-serif font-bold">
                MB
              </span>
            </div>

            <h2 className="text-primary text-xs tracking-widest uppercase mb-4 text-center">
              {t.navbar.brand_subtitle}
            </h2>

            <div className="flex justify-center gap-4 text-xl text-primary">
              <i className="fa-brands fa-facebook-f cursor-pointer" />
              <i className="fa-brands fa-youtube cursor-pointer" />
              <i className="fa-brands fa-instagram cursor-pointer" />
            </div>
          </div>

          {/* CENTER NAV */}
          <nav className="flex items-center gap-10">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${isActive(link.path)} text-2xl font-serif transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT NAV + LANGUAGE */}
          <div className="flex items-center gap-10">
            <Link
              to="/contact"
              className={`${isActive('/contact')} text-2xl font-serif transition-colors`}
            >
              {t.navbar.contact}
            </Link>

            <div className="text-primary flex gap-2 text-sm font-bold border border-primary/30 px-3 py-1 rounded-full">
              <button
                onClick={() => toggleLanguage('en')}
                className={language === 'en' ? 'text-primary' : 'hover:opacity-80'}
              >
                {t.navbar.switch_en}
              </button>
              <span>|</span>
              <button
                onClick={() => toggleLanguage('hi')}
                className={language === 'hi' ? 'text-primary' : 'hover:opacity-80'}
              >
                {t.navbar.switch_hi}
              </button>
            </div>
          </div>
        </div>

        {/* ================= MOBILE HEADER ================= */}
        <div className="lg:hidden flex items-center justify-between py-4">
          
          {/* Brand */}
          <Link to="/" className="text-primary text-xl font-serif tracking-wide">
            {t.navbar.brand_name}
          </Link>

          {/* Right Side (Language + Menu) */}
          <div className="flex items-center gap-3">

            {/* Language Switch */}
            <div className="text-primary flex gap-1 text-xs font-bold border border-primary/30 px-3 py-1 rounded-full">
              <button
                onClick={() => toggleLanguage('en')}
                className={language === 'en' ? 'text-primary' : 'hover:opacity-80'}
              >
                {t.navbar.switch_en}
              </button>
              <span>|</span>
              <button
                onClick={() => toggleLanguage('hi')}
                className={language === 'hi' ? 'text-primary' : 'hover:opacity-80'}
              >
                {t.navbar.switch_hi}
              </button>
            </div>

            {/* Menu Button */}
            <button
              className="text-primary"
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
        <div className="lg:hidden bg-white border-t border-black/10 px-6 py-6 flex flex-col gap-6 absolute w-full left-0 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-primary text-2xl font-serif text-center hover:text-primary transition-colors"
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