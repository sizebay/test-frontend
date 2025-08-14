type BadgeProps = {
  label: string;
  value: string | number;
  className?: string;
};

export function Badge({ label, value, className = "" }: BadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-sm text-[#E3B873] ring-1 ring-white/10 ${className}`}
    >
      <span className="font-semibold">{value}</span>
      <span>{label}</span>
    </div>
  );
}
