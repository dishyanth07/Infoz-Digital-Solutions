import { cn } from '../lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* The "i" dot (top left square) */}
        <rect x="25" y="18" width="12" height="12" />
        
        {/* The "i" stem (diagonal slash) */}
        <path
          d="M25 47 L48 31 V43 L25 82 Z"
        />
        
        {/* The "Z" (integrated geometric shape) */}
        <path
          d="M52 31 H85 V43 L52 76 H85 V88 H40 V76 L73 43 H52 V31 Z"
        />
      </svg>
    </div>
  );
}
