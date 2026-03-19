type StoryCardProps = {
  petName: string;
  route: string;
  description: string;
};

export default function StoryCard({
  petName,
  route,
  description,
}: StoryCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl bg-card shadow-[0_8px_24px_rgba(43,43,43,0.08)]">
      <div className="flex h-44 items-center justify-center bg-[#ede6dd] text-5xl">
        🐾
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground">{petName}</h3>
        <p className="mt-1 text-sm text-brand">{route}</p>
        <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
      </div>
    </article>
  );
}
