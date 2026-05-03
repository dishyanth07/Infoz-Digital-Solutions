import { ArrowRight, CheckCircle2, Star, TrendingUp, Zap, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, SERVICES } from '../constants';
import { cn } from '../lib/utils';

export default function Home() {
  const testimonials = [
    { name: "Rajesh Kumar", role: "Founder, Kumaran Textiles", text: "The team at INFOZ didn't just rebuild our site, they completely redefined our sales funnel. Our conversion rate doubled in 2 months." },
    { name: "Anjali Sharma", role: "Marketing Head, Sree Dev Jewellers", text: "Best ROI we've ever seen on Google Ads. They actually care about the leads we get, not just the clicks." },
    { name: "Vikram Singh", role: "CEO, North Star Realtors", text: "Our social presence finally feels professional. The engagement we get now is organic and high-quality." },
    { name: "Priya Nair", role: "Director, Malabar Organics", text: "SEO results have been incredible. We're now ranking #1 for our main keywords and seeing consistent daily orders." }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div className="max-w-7xl mx-auto w-full relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto space-y-10"
          >
            <div className="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full border-brand-primary/20 shadow-lg shadow-brand-primary/5">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-300 uppercase tracking-widest font-mono">India's Leading Digital Growth Partner</span>
            </div>
            
            <h1 className="text-6xl md:text-[92px] font-display font-bold leading-[1] tracking-tighter text-white">
              Grow Your Business with <span className="text-gradient drop-shadow-2xl italic leading-[1.3] pb-2 inline-block">Powerful Digital Marketing</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed italic">
              We don't just sell services. We deliver growth systems that capture leads and scale your revenue predictably.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <Link 
                to="/contact" 
                className="group bg-brand-primary hover:bg-brand-secondary text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-2xl shadow-brand-primary/40 flex items-center gap-3"
              >
                 Get Leads Now
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="glass hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-3 border-white/10 shadow-xl"
              >
                 Our Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-6 max-w-2xl">
              <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] font-mono text-sm">Strategic Solutions</h4>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter">Everything You Need to <span className="text-gradient italic">Dominate Your Market</span></h2>
            </div>
            <Link to="/services" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group border-b-2 border-brand-primary/20 pb-2">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  whileHover={{ y: -10 }}
                  className="group relative h-full"
                >
                  <Link to={`/${service.slug}`} className="block h-full p-10 glass rounded-[2.5rem] space-y-8 border-white/5 hover:border-brand-primary/30 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] group-hover:bg-brand-primary/10 transition-colors" />
                    <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform shadow-lg shadow-brand-primary/5">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-primary transition-colors">{service.title}</h3>
                      <p className="text-slate-400 leading-relaxed font-medium">{service.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-brand-primary uppercase tracking-widest pt-4">
                      Learn More <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-6 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
             <div className="space-y-6">
                <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] font-mono text-sm leading-none">The INFOZ Advantage</h4>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter italic">Why Top Brands <br/><span className="text-gradient">Choose Us</span></h2>
             </div>
             
             <div className="grid gap-8">
                {[
                  { icon: TrendingUp, title: "ROI Focused Strategy", desc: "We don't track vanity metrics. We track sales and conversions." },
                  { icon: Zap, title: "Rapid Execution", desc: "We move fast so you see results in weeks, not months." },
                  { icon: Shield, title: "Complete Transparency", desc: "Honest reporting and direct communication every step of the way." },
                  { icon: Users, title: "Dedicated Growth Team", desc: "Experts assigned to your brand 24/7." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="mt-1 w-12 h-12 rounded-xl glass border-brand-primary/20 flex items-center justify-center flex-shrink-0 text-brand-primary italic font-black text-xl shadow-lg shadow-brand-primary/5 font-display italic">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                       <h4 className="text-xl font-display font-bold text-white">{item.title}</h4>
                       <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
           </div>

           <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-orange-500/20 blur-[100px] opacity-50" />
              <div className="relative glass rounded-[3rem] p-12 border-white/20 aspect-square flex flex-col justify-center space-y-12">
                 <div className="text-center space-y-2">
                    <div className="text-7xl font-display font-bold text-white italic tracking-tighter">4.8<span className="text-brand-primary text-4xl">/5</span></div>
                    <div className="flex justify-center gap-1 text-orange-500">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
                    </div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm pt-2">Average Client Rating</p>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-8 divide-x divide-white/10">
                    <div className="text-center space-y-1">
                       <p className="text-4xl font-display font-bold text-brand-primary italic">100+</p>
                       <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Active Brands</p>
                    </div>
                    <div className="text-center space-y-1">
                       <p className="text-4xl font-display font-bold text-orange-500 italic">5M+</p>
                       <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Leads Generated</p>
                    </div>
                 </div>

                 <div className="bg-brand-primary/5 rounded-3xl p-6 border border-brand-primary/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                       <TrendingUp className="w-20 h-20" />
                    </div>
                    <p className="text-sm italic text-slate-300 leading-relaxed relative z-10">
                      "Since joining INFOZ, our digital presence is on another level. They truly understand what it takes to grow a brand in 2024."
                    </p>
                    <p className="text-xs font-bold text-white mt-4 relative z-10 uppercase tracking-widest">— Digital Head, Global Retail</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] font-mono text-sm leading-none">Success Stories</h4>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight tracking-tighter italic">What Our <span className="text-gradient">Partners Say</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 glass rounded-[2rem] border-white/5 space-y-6 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Users className="w-32 h-32" />
                </div>
                <div className="flex gap-1 text-orange-500">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xl text-slate-300 leading-relaxed italic font-medium">"{t.text}"</p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                   <div>
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mt-1">{t.role}</p>
                   </div>
                   <div className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-orange-500" />
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative glass rounded-[4rem] px-8 py-24 text-center space-y-12 border-brand-primary/20 bg-gradient-to-br from-brand-primary/10 to-transparent">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mesh opacity-20 pointer-events-none" />
           <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-7xl font-display font-bold leading-[1.1] tracking-tighter">Ready to Scale Your <br/><span className="text-gradient italic">Business to New Heights?</span></h2>
              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Start your journey towards market dominance today. Book your free digital strategy audit.
              </p>
           </div>
           <div className="relative z-10 flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-white text-brand-dark px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl shadow-white/5 items-center flex gap-3">
                 Claim Your Free Strategy Audit <ArrowRight className="w-6 h-6" />
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
