import { cn } from "@/lib/utils"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StarRating } from "./star-rating"
import { TrustBadge } from "./trust-badge"
import { Clock, Monitor } from "lucide-react"

interface ProductCardProps {
  title: string
  price: number
  rating: number
  reviewCount?: number
  duration?: string
  format?: string
  badges: Array<"cpd" | "citb" | "iosh">
  image?: string
  variant?: "default" | "compact" | "featured"
  className?: string
}

export function ProductCard({
  title,
  price,
  rating,
  reviewCount,
  duration,
  format = "Online",
  badges,
  image,
  variant = "default",
  className,
}: ProductCardProps) {
  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all hover:shadow-level-2 hover:-translate-y-1",
        variant === "featured" && "border-primary shadow-level-2",
        className
      )}
    >
      {image && variant !== "compact" && (
        <CardHeader className="p-0">
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </CardHeader>
      )}
      <CardContent className={cn(variant === "compact" ? "p-4" : "p-6")}>
        <h3 className="font-semibold text-h4 leading-tight">{title}</h3>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-h2 font-bold text-primary font-mono">
            £{price}
          </span>
          <StarRating value={rating} showCount={!!reviewCount} count={reviewCount} />
        </div>

        {(duration || format) && (
          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            {duration && (
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden="true" />
                {duration}
              </span>
            )}
            {format && (
              <span className="inline-flex items-center gap-1">
                <Monitor className="size-3.5" aria-hidden="true" />
                {format}
              </span>
            )}
          </div>
        )}

        {badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {badges.map((badge) => (
              <TrustBadge key={badge} type={badge} size="sm" />
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className={cn(variant === "compact" ? "p-4 pt-0" : "p-6 pt-0")}>
        <Button className="w-full" size={variant === "compact" ? "default" : "lg"}>
          Start Now
        </Button>
      </CardFooter>
    </Card>
  )
}
