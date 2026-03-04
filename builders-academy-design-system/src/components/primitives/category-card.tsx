import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Shield, Building2 } from "lucide-react"

interface CategoryCardProps {
  title: string
  subtitle?: string
  priceFrom?: number
  cta?: string
  icon?: "cscs" | "safety" | "employer"
  className?: string
}

const ICON_MAP = {
  cscs: BookOpen,
  safety: Shield,
  employer: Building2,
}

export function CategoryCard({
  title,
  subtitle,
  priceFrom,
  cta,
  icon = "cscs",
  className,
}: CategoryCardProps) {
  const Icon = ICON_MAP[icon]

  return (
    <Card
      className={cn(
        "group cursor-pointer transition-all hover:shadow-level-2 hover:-translate-y-1 hover:border-primary/30",
        className
      )}
    >
      <CardContent className="p-6 text-center">
        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-accent">
          <Icon className="size-7 text-primary" aria-hidden="true" />
        </div>
        <h3 className="font-bold text-h4">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
        )}
        {priceFrom && (
          <p className="mt-2 text-sm font-semibold text-primary">
            from £{priceFrom}
          </p>
        )}
        <Button
          variant={cta ? "secondary" : "default"}
          className="mt-4 w-full"
        >
          {cta || "Browse Courses"}
        </Button>
      </CardContent>
    </Card>
  )
}
