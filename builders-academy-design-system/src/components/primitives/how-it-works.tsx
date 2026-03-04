import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface Step {
  number: number
  title: string
  description: string
  icon?: React.ReactNode
}

interface HowItWorksProps {
  steps: Step[]
  variant?: "horizontal" | "vertical"
  className?: string
}

export function HowItWorks({
  steps,
  variant = "horizontal",
  className,
}: HowItWorksProps) {
  return (
    <div
      className={cn(
        variant === "horizontal"
          ? "flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6"
          : "flex flex-col gap-6",
        className
      )}
    >
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
              {step.icon || step.number}
            </div>
            <h3 className="mt-3 text-h5 font-bold">{step.title}</h3>
            <p className="mt-1 max-w-[200px] text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
          {index < steps.length - 1 && variant === "horizontal" && (
            <ArrowRight
              className="hidden size-5 text-muted-foreground md:block"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  )
}
