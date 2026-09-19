import type { ReactNode } from 'react';

interface AiGlowProps {
  children: ReactNode;
  className?: string;
}

export function AiGlow({ children, className = '' }: AiGlowProps) {
  return (
    <div className={`relative inline-flex ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-full pointer-events-none animate-spin"
        style={{
          background:
            'conic-gradient(from 0deg, #e8a94a, #57d9aa, #e8a94a, #4a90e2, #e8a94a)',
          filter: 'blur(10px)',
          opacity: 0.55,
          animationDuration: '6s',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
