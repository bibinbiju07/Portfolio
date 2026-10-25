interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-muted-foreground">{subtitle}</p> : null}
    </div>
  );
}
