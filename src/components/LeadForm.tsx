import { GOOGLE_FORM_URL } from '../constants';
import { cn } from '../lib/utils';

export default function LeadForm({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full glass rounded-3xl overflow-hidden border border-white/10 shadow-2xl", className)}>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary via-purple-500 to-orange-500 animate-gradient" />
      <iframe
        src={GOOGLE_FORM_URL}
        className="w-full h-[800px] border-none"
        title="Lead Generation Form"
      >
        Loading...
      </iframe>
    </div>
  );
}
