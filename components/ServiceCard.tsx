type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-2xl bg-card p-6 shadow-[0_8px_24px_rgba(43,43,43,0.08)]">
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}
