interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return <div className={className}>{children}</div>;
}
