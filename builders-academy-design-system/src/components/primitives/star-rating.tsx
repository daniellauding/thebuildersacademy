import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface StarRatingProps {
  value: number
  showCount?: boolean
  count?: number
  variant?: "compact" | "full" | "minimal"
  className?: string
}

export function StarRating({
  value,
  showCount = false,
  count,
  variant = "compact",
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(value)
  const hasHalf = value - fullStars >= 0.5

  if (variant === "minimal") {
    return (
      <span className={cn("inline-flex items-center gap-1 text-sm", className)}>
        <Star className="size-4 fill-warning text-warning" aria-hidden="true" />
        <span className="font-semibold">{value}</span>
      </span>
    )
  }

  if (variant === "compact") {
    return (
      <span className={cn("inline-flex items-center gap-1 text-sm", className)}>
        <Star className="size-4 fill-warning text-warning" aria-hidden="true" />
        <span className="font-semibold">{value}</span>
        {showCount && count && (
          <span className="text-muted-foreground">({count.toLocaleString()})</span>
        )}
      </span>
    )
  }

  return (
    <div className={cn("inline-flex items-center gap-1", className)} role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i < fullStars
              ? "fill-warning text-warning"
              : i === fullStars && hasHalf
                ? "fill-warning/50 text-warning"
                : "fill-muted text-muted"
          )}
          aria-hidden="true"
        />
      ))}
      <span className="ml-1 text-sm font-semibold">{value}/5</span>
      {showCount && count && (
        <span className="text-sm text-muted-foreground">({count.toLocaleString()})</span>
      )}
    </div>
  )
}
