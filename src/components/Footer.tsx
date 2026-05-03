import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { BRAND_NAME, CONTACT_EMAIL, CONTACT_PHONE, SERVICES } from '../constants';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white shadow-lg overflow-hidden">
              <Logo className="w-10 h-10" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              {BRAND_NAME}
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Grow your business with powerful digital marketing strategies that convert. We are lead generation experts focused on your ROI.
          </p>
          <div className="flex items-center gap-4">
            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-primary/20 transition-all hover:-translate-y-1"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-4">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/${s.slug}`} className="text-slate-400 hover:text-brand-primary text-sm transition-colors flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-slate-400 hover:text-brand-primary text-sm transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-slate-400 hover:text-brand-primary text-sm transition-colors">Contact</Link></li>
            <li><Link to="/services" className="text-slate-400 hover:text-brand-primary text-sm transition-colors">All Services</Link></li>
            <li><a href="#" className="text-slate-400 hover:text-brand-primary text-sm transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
          <div className="space-y-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-brand-primary" />
              <span className="text-sm">{CONTACT_EMAIL}</span>
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-brand-primary" />
              <span className="text-sm">{CONTACT_PHONE}</span>
            </a>
          </div>
          <div className="p-4 rounded-xl glass border border-orange-500/10">
            <p className="text-xs text-orange-500 font-bold mb-2">Ready to Grow?</p>
            <Link to="/contact" className="text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Book a Strategy Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-white/5 text-center">
        <p className="text-slate-500 text-xs italic font-mono">
          &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
