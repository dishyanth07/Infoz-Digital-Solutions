import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] font-mono text-sm leading-none">Our Expertise</h4>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight tracking-tighter">Growth <span className="text-gradient italic">Without Limits</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We provide a complete suite of performance marketing services designed to find, capture, and convert your ideal customers.
          </p>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid gap-12">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group glass rounded-[3rem] p-8 md:p-16 border-white/5 hover:border-brand-primary/20 transition-all overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-bl-[200px] blur-3xl opacity-50 group-hover:bg-brand-primary/10 transition-all pointer-events-none" />
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="space-y-8">
                    <div className="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center text-brand-primary shadow-xl shadow-brand-primary/5 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-white group-hover:text-brand-primary transition-colors italic">{service.title}</h2>
                      <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
                        {service.longDescription}
                      </p>
                    </div>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {service.benefits.slice(0, 4).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-orange-500" />
                          <span className="text-sm font-semibold">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to={`/${service.slug}`} 
                      className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-brand-primary/20"
                    >
                      More Info <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  <div className="hidden md:block">
                     <div className="aspect-video glass rounded-3xl border-white/20 p-8 flex flex-col justify-center space-y-6 relative overflow-hidden bg-slate-900/50">
                        <div className="p-4 bg-brand-primary/10 rounded-2xl border border-brand-primary/20 italic text-slate-300 font-medium">
                          Our {service.title} system focus on conversion-first strategy...
                        </div>
                        <div className="space-y-2">
                           <div className="h-4 w-3/4 bg-white/5 rounded-full" />
                           <div className="h-4 w-1/2 bg-white/5 rounded-full" />
                        </div>
                        <div className="pt-4 border-t border-white/10 flex justify-between items-center italic text-xs text-slate-500 font-bold tracking-widest uppercase">
                           <span>99% Performance</span>
                           <span>0% Waste</span>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Generic Service CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 text-center space-y-10 border-white/10 bg-mesh opacity-90 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12 opacity-5 italic font-display font-black text-[200px] leading-none pointer-events-none">IZ</div>
           <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight relative z-10">Don't Know Which Service <br/>Is Right for You?</h2>
           <p className="text-xl text-slate-300 max-w-xl mx-auto relative z-10 leading-relaxed font-medium italic">
             Book a free 15-minute consultation. We'll audit your brand and give you a roadmap.
           </p>
           <div className="flex justify-center relative z-10">
              <Link to="/contact" className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-110 transition-all flex items-center gap-3">
                 Book My Strategy Session <ArrowRight className="w-6 h-6" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
