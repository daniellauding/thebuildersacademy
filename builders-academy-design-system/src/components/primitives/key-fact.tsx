import { cn } from "@/lib/utils"

interface KeyFactProps {
  icon: React.ReactNode
  label: string
  value: string
  className?: string
}

export function KeyFact({ icon, label, value, className }: KeyFactProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 rounded-lg bg-muted p-4 text-center",
        className
      )}
    >
      <span className="text-2xl" aria-hidden="true">{icon}</span>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  )
}
