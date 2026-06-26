export default function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl">
        {children}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}
