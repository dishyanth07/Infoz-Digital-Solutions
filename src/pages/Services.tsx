import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(SERVICES.map(s => s.category)))];

  const filteredServices = activeCategory === "All" 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

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

      {/* Filter Section */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-3 text-slate-400 font-mono text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Filter className="w-3 h-3" />
              Filter by Category
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 p-2 glass rounded-3xl border-white/5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-3 rounded-2xl text-sm font-bold transition-all relative overflow-hidden",
                    activeCategory === cat 
                      ? "text-white" 
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-brand-primary"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid gap-12">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group glass rounded-[3rem] p-8 md:p-16 border-white/5 hover:border-brand-primary/20 transition-all overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-bl-[200px] blur-3xl opacity-50 group-hover:bg-brand-primary/10 transition-all pointer-events-none" />
                  
                  <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                      <div className="w-20 h-20 bg-brand-primary/10 rounded-3xl flex items-center justify-center text-brand-primary shadow-xl shadow-brand-primary/5 group-hover:scale-110 transition-transform">
                        <Icon className="w-10 h-10" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 mb-2">
                           <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full border border-brand-primary/20">
                             {service.category}
                           </span>
                        </div>
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

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                        <Link 
                          to={`/${service.slug}`} 
                          className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-brand-primary/20 group/btn"
                        >
                          More Info <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>

                    <div className="hidden md:block">
                       <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl group/img">
                          <img 
                            src={service.imageUrl} 
                            alt={service.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                          <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border-white/10 backdrop-blur-md">
                            <p className="text-xs font-bold text-brand-primary uppercase tracking-widest mb-1">Our Approach</p>
                            <p className="text-sm text-white font-medium italic">Conversion-first strategy for maximum ROI.</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
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
           <motion.div 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="flex justify-center relative z-10"
           >
              <Link to="/contact" className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-3 group">
                 Book My Strategy Session <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
