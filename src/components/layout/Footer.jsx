import { Mail, Phone, MapPin, Hourglass, MessageSquare, Compass } from "lucide-react";
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#111] text-white pt-16 pb-6">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-center">

          {/* Column 1 */}
          <div>
            <Hourglass className="mx-auto mb-4" />
            <h3 className="uppercase tracking-widest text-sm mb-4">
              {t.footer.brand_name}
            </h3>
            <div className="w-6 h-[1px] bg-white mx-auto mb-4" />
            <p className="text-sm leading-7 text-white/80">
              {t.footer.brand_desc}
            </p>
            {/* <span className="text-green-500 text-sm cursor-pointer">{t.footer.more}</span> */}
          </div>

          {/* Column 2 */}
          <div>
            <MessageSquare className="mx-auto mb-4" />
            <h3 className="uppercase tracking-widest text-sm mb-4">
              {t.footer.email_title}
            </h3>
            <div className="w-6 h-[1px] bg-white mx-auto mb-4" />
            <p className="text-sm text-white/80">
              hello@marwadweddings.com
            </p>
          </div>

          {/* Column 3 (CENTER LOGO) */}
          <div>
            <div className="mx-auto w-20 h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mb-4 relative">
              <span className="absolute -top-3 text-[#D4AF37] text-sm">✦</span>
              <span className="text-[#D4AF37] text-2xl font-serif font-bold">
                MW
              </span>
            </div>

            <h2 className="text-[#D4AF37] text-sm tracking-widest uppercase mb-4">
              {t.footer.brand_name}
            </h2>

            <div className="flex justify-center gap-4 text-xl">
              <i className="fa-brands fa-facebook-f cursor-pointer" />
              <i className="fa-brands fa-youtube cursor-pointer" />
              <i className="fa-brands fa-instagram cursor-pointer" />
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <Phone className="mx-auto mb-4" />
            <h3 className="uppercase tracking-widest text-sm mb-4">
              {t.footer.call_title}
            </h3>
            <div className="w-6 h-[1px] bg-white mx-auto mb-4" />
            <p className="text-sm text-white/80">Manoj Bajaj : +91-9414147250</p>
            
            <p className="text-sm text-white/80">Ashok Malani : +91-9929138577</p>
          </div>

          {/* Column 5 */}
          <div>
            <Compass className="mx-auto mb-4" />
            <h3 className="uppercase tracking-widest text-sm mb-4">
              {t.footer.contact_title}
            </h3>
            <div className="w-6 h-[1px] bg-white mx-auto mb-4" />
            <p className="text-sm text-white/80">
              Tehsil road, Nokha <br />
           Bikaner, Rajsthan <br />
              
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-12 pt-4 text-center text-sm text-white/60">
          {t.footer.design_by}{" "}
          <span className="text-[#D4AF37]"> MB Events & Catering Services</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

