import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface ProgressStepsProps {
  steps: string[]
  currentStep: number
  className?: string
}

export function ProgressSteps({ steps, currentStep, className }: ProgressStepsProps) {
  return (
    <div className={cn("flex items-center justify-between", className)} role="navigation" aria-label="Checkout progress">
      {steps.map((label, index) => {
        const stepNum = index + 1
        const isCompleted = stepNum < currentStep
        const isActive = stepNum === currentStep

        return (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "flex size-8 items-center justify-center rounded-full text-sm font-semibold transition-colors",
                  isCompleted && "bg-success text-white",
                  isActive && "bg-primary text-primary-foreground",
                  !isCompleted && !isActive && "bg-muted text-muted-foreground"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {isCompleted ? (
                  <Check className="size-4" aria-hidden="true" />
                ) : (
                  stepNum
                )}
              </div>
              <span
                className={cn(
                  "text-xs font-medium",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "mx-2 h-0.5 w-12 sm:w-20",
                  isCompleted ? "bg-success" : "bg-border"
                )}
                aria-hidden="true"
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
