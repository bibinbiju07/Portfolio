interface GradientButtonProps {
  children: React.ReactNode;
}

export function GradientButton({ children }: GradientButtonProps) {
  return <button className="rounded-full theme-accent-gradient px-6 py-3 text-white">{children}</button>;
}
