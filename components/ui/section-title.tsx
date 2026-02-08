export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-gray-600">{subtitle}</p>
      ) : null}
    </div>
  );
}
