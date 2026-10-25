interface GradientButtonProps {
  children: React.ReactNode;
}

export function GradientButton({ children }: GradientButtonProps) {
  return <button className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white">{children}</button>;
}
