import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Star } from "lucide-react"

type BadgeType = "cpd" | "citb" | "iosh" | "trustpilot" | "secure" | "popular"

interface TrustBadgeProps {
  type: BadgeType
  size?: "sm" | "md" | "lg"
  className?: string
}

const BADGE_CONFIG: Record<BadgeType, { label: string; icon: React.ReactNode; colorClass: string }> = {
  cpd: {
    label: "CPD Accredited",
    icon: <CheckCircle className="size-3" />,
    colorClass: "border-success/30 bg-success/10 text-success",
  },
  citb: {
    label: "CITB Approved",
    icon: <Shield className="size-3" />,
    colorClass: "border-primary/30 bg-primary/10 text-primary",
  },
  iosh: {
    label: "IOSH Certified",
    icon: <CheckCircle className="size-3" />,
    colorClass: "border-info/30 bg-info/10 text-info",
  },
  trustpilot: {
    label: "Trustpilot",
    icon: <Star className="size-3 fill-current" />,
    colorClass: "border-[#00B67A]/30 bg-[#00B67A]/10 text-[#00B67A]",
  },
  secure: {
    label: "Secure Checkout",
    icon: <Shield className="size-3" />,
    colorClass: "border-success/30 bg-success/10 text-success",
  },
  popular: {
    label: "Most Popular",
    icon: <Star className="size-3 fill-current" />,
    colorClass: "border-warning/30 bg-warning/10 text-warning",
  },
}

const SIZE_CLASSES = {
  sm: "text-[11px] px-1.5 py-0",
  md: "text-xs px-2 py-0.5",
  lg: "text-sm px-2.5 py-1",
}

export function TrustBadge({ type, size = "md", className }: TrustBadgeProps) {
  const config = BADGE_CONFIG[type]

  return (
    <Badge
      variant="outline"
      className={cn(
        "gap-1 font-medium",
        config.colorClass,
        SIZE_CLASSES[size],
        className
      )}
    >
      {config.icon}
      <span>{config.label}</span>
    </Badge>
  )
}
