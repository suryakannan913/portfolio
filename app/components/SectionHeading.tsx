export default function SectionHeading({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs tracking-widest text-accent">{index}</p>
      <h2 className="display mt-2 text-4xl sm:text-5xl">{children}</h2>
    </div>
  );
}
