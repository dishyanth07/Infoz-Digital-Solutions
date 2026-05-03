import { ArrowRight, CheckCircle2, Shield, Target, Trophy, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { BRAND_NAME } from '../constants';

export default function About() {
  const values = [
    { icon: Target, title: "Mission", desc: "To empower businesses with high-converting digital strategies that drive sustainable growth." },
    { icon: Zap, title: "Vision", desc: "To be the world's most trusted partner for brands seeking measurable digital excellence." },
    { icon: Shield, title: "Transparency", desc: "We believe in 100% honest reporting and data-backed decision making." },
    { icon: Trophy, title: "Excellence", desc: "Good is enough for the competition. We deliver premium, world-class results only." }
  ];

  return (
    <div className="pt-32 pb-20">
      <section className="px-6 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] font-mono text-sm leading-none">Who We Are</h4>
              <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight tracking-tighter">Your Digital <br/><span className="text-gradient italic">Growth Engine</span></h1>
              <p className="text-xl text-slate-400 leading-relaxed font-medium italic">
                At {BRAND_NAME}, we don't just 'manage' accounts. We build market dominance. Founded with the vision of bridging the gap between digital spend and real ROI.
              </p>
              <div className="flex items-center gap-12 pt-4">
                 <div className="space-y-1">
                   <p className="text-4xl font-display font-bold text-white">5+</p>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Years of Excellence</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-4xl font-display font-bold text-brand-primary italic">500+</p>
                   <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Successful Projects</p>
                 </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-orange-500/20 blur-3xl opacity-50" />
              <div className="relative glass rounded-[3rem] p-12 border-white/20 aspect-video flex flex-col justify-center space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <p className="text-lg font-bold text-white italic">Lead Generation Experts</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <p className="text-lg font-bold text-white italic">Conversion Rate Optimization</p>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <p className="text-lg font-bold text-white italic">Data-Driven Paid Ads</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 glass rounded-3xl border-white/5 space-y-4 hover:border-brand-primary/30 transition-all">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white italic">{v.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Infoz */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
           <div className="relative order-2 md:order-1">
              <div className="glass rounded-[3rem] aspect-square flex flex-col justify-center p-12 space-y-12 border-white/20">
                 <div className="p-8 border border-white/10 rounded-3xl bg-brand-primary/5">
                    <h4 className="text-white font-bold text-xl mb-4 italic italic">The Infoz Standard</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                       We operate on a philosophy of "Growth First". Every design choice, every keyword target, and every ad copy is written with one goal: To convert your audience into loyal customers.
                    </p>
                 </div>
                 <div className="grid grid-cols-2 gap-8 divide-x divide-white/10">
                    <div className="text-center">
                       <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2 font-mono">Performance</p>
                       <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-brand-primary" />
                       </div>
                    </div>
                    <div className="text-center pl-8">
                       <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2 font-mono">Integrity</p>
                       <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-orange-500" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="space-y-10 order-1 md:order-2">
             <div className="space-y-6">
                <h4 className="text-orange-500 font-bold uppercase tracking-[0.3em] font-mono text-sm leading-none">Why Choose Us</h4>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight tracking-tighter italic">We Treat Your Business <br/><span className="text-gradient">As Our Own</span></h2>
             </div>
             
             <ul className="space-y-6 italic font-medium text-slate-300">
               <li className="flex items-center gap-4">
                 <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                 Custom strategy for every single client. No templates.
               </li>
               <li className="flex items-center gap-4">
                 <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                 Direct access to your account managers (no middlemen).
               </li>
               <li className="flex items-center gap-4">
                 <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                 Predictability in lead volume and growth forecasting.
               </li>
               <li className="flex items-center gap-4">
                 <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                 Premium UI/UX that sets you apart from industry noise.
               </li>
             </ul>

             <a href="/contact" className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-brand-primary/20">
               Join the Growth Circle <ArrowRight className="w-5 h-5" />
             </a>
           </div>
        </div>
      </section>
    </div>
  );
}
