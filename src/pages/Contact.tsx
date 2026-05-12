import { Mail, MessageCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_NUMBER } from '../constants';
import LeadForm from '../components/LeadForm';

export default function Contact() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like to book a strategy session.`;

  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <section className="px-6 mb-20 relative">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] font-mono text-sm leading-none">Contact Us</h4>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight tracking-tighter">Let's Build Your <span className="text-gradient italic">Dominant Future</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
            Ready to stop guessing and start growing? Reach out today for a free digital audit of your brand.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-6">
               <motion.div 
                 whileHover={{ y: -5, borderColor: 'rgba(255, 107, 0, 0.3)' }}
                 className="p-8 glass rounded-3xl border-white/5 space-y-4 transition-all"
               >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-1 italic">Email Us</h4>
                    <p className="text-slate-400 text-sm break-all">{CONTACT_EMAIL}</p>
                  </div>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -5, borderColor: 'rgba(255, 107, 0, 0.3)' }}
                 className="p-8 glass rounded-3xl border-white/5 space-y-4 transition-all"
               >
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white mb-1 italic">Call Us</h4>
                    <p className="text-slate-400 text-sm">{CONTACT_PHONE}</p>
                  </div>
               </motion.div>
               <motion.a 
                 href={whatsappUrl} 
                 target="_blank" 
                 rel="noopener"
                 whileHover={{ scale: 1.02, backgroundColor: 'rgba(37, 211, 102, 0.15)' }}
                 whileTap={{ scale: 0.98 }}
                 className="p-8 glass rounded-3xl border-[#25D366]/20 bg-[#25D366]/5 space-y-4 transition-all sm:col-span-2 group block"
               >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center text-[#25D366]">
                          <MessageCircle className="w-6 h-6 fill-current" />
                       </div>
                       <div>
                          <h4 className="font-display font-bold text-white mb-1 italic">WhatsApp Strategy Session</h4>
                          <p className="text-[#25D366] text-sm font-bold uppercase tracking-widest font-mono">Immediate Response</p>
                       </div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#25D366] group-hover:translate-x-2 transition-transform" />
                  </div>
               </motion.a>
            </div>

            <div className="space-y-8">
               <div className="flex items-center gap-6">
                  <div className="w-1 relative flex items-center h-20">
                    <div className="absolute inset-0 bg-brand-primary rounded-full blur-sm" />
                    <div className="absolute inset-0 bg-brand-primary rounded-full" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white italic">Visit Our Headquarters</h3>
               </div>
               <div className="glass rounded-[2rem] p-8 space-y-4 border-white/5">
                  <div className="flex items-center gap-4 text-slate-300">
                    <MapPin className="w-6 h-6 text-brand-primary flex-shrink-0" />
                    <p className="text-lg font-medium italic">Chennai, Tamil Nadu, India — Digital Square</p>
                  </div>
                  <div className="aspect-video w-full glass rounded-2xl overflow-hidden grayscale brightness-50 contrast-125 opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 bg-slate-800 flex items-center justify-center border border-white/10">
                     <p className="text-xs uppercase tracking-[0.5em] font-mono font-black text-slate-600">MAP PLACEHOLDER</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h4 className="text-brand-primary font-bold uppercase tracking-widest text-xs mb-2">Lead Generator</h4>
              <h2 className="text-3xl font-display font-bold text-white italic">Book Your Audit</h2>
            </div>
            <LeadForm />
          </div>
        </div>
      </section>
    </div>
  );
}
