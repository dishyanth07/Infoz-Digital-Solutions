import { CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { Service, WHATSAPP_NUMBER } from '../constants';
import LeadForm from './LeadForm';
import { cn } from '../lib/utils';

export default function LandingPageLayout({ service }: { service: Service }) {
  const Icon = service.icon;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in ${service.title} services.`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mesh opacity-50 z-0" />
        <div className="max-w-7xl mx-auto w-full relative z-10 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-brand-primary font-bold text-sm">
              <Icon className="w-5 h-5" />
              {service.title} Specialist
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Scale Your Revenue with <span className="text-gradient leading-[1.3]">{service.title}</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl italic">
              {service.longDescription}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#leads" className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-brand-primary/20 flex items-center gap-2">
                Grow My Business <ArrowRight className="w-5 h-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-green-500/20 flex items-center gap-2">
                WhatsApp Us <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-orange-500/20 blur-3xl" />
            <div className="relative glass rounded-3xl p-8 border-white/20 aspect-video flex flex-col justify-center gap-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-2xl" />
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                   <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">The Problem</p>
                   <p className="text-lg font-medium text-slate-200">{service.problem}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                   <p className="text-xs text-orange-500 uppercase tracking-widest font-bold font-mono">Our Solution</p>
                   <p className="text-lg font-medium text-white">{service.solution}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter">
              Why Choose Our <span className="text-brand-primary underline decoration-orange-500/50 underline-offset-8 italic">{service.title}</span> System?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 glass rounded-3xl border-white/5 space-y-4"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-lg font-bold text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-4">
             <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tighter">Our Proven Process</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">How we take your business from where it is to where it needs to be.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 justify-between relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 z-0" />
             {service.process.map((step, i) => (
               <div key={i} className="flex-1 relative z-10 text-center space-y-4">
                 <div className="w-16 h-16 bg-brand-dark border-4 border-white/5 rounded-full mx-auto flex items-center justify-center font-display font-bold text-2xl text-brand-primary shadow-2xl">
                   {i + 1}
                 </div>
                 <p className="font-bold text-white max-w-[150px] mx-auto">{step}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Form */}
      <section id="leads" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:sticky lg:top-32 lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 italic leading-tight">Start Getting <span className="text-gradient">Qualified Leads</span> Today</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Fill out the form to book your free strategy session. We'll audit your current situation and show you exactly how to scale.
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-display font-bold text-white uppercase tracking-widest text-sm flex items-center gap-2">
                <span className="w-8 h-px bg-brand-primary" /> What you can expect:
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.results.map((res, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-slate-300">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 glass rounded-3xl border-orange-500/20 bg-orange-500/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-dark bg-slate-800" />
                  ))}
                </div>
                <div>
                   <p className="text-sm font-bold text-white">Trusted by 100+ businesses</p>
                   <p className="text-xs text-orange-400 font-mono italic">Average 4.8/5 Rating</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed italic">
                 "INFOZ transformed our lead pipeline in less than 30 days. Their {service.title} strategy is unlike anything else in the market."
                 <br />
                 <span className="text-white font-bold mt-2 inline-block">— Marketing Director, Tech Corp</span>
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto glass rounded-[3rem] p-12 text-center space-y-8 overflow-hidden relative border-white/10">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-orange-500/20 blur-3xl opacity-50" />
          <h2 className="text-4xl md:text-5xl font-display font-bold relative z-10">Stop Losing Customers to Competitors</h2>
          <p className="text-xl text-slate-300 relative z-10 font-medium">Ready to dominate Page 1 and capture every lead in your niche?</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href="#leads" className="bg-white text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-white/5">
               Claim Your Free Strategy Session
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
