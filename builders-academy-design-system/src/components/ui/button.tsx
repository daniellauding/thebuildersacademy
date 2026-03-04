import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-level-1 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-level-2 active:translate-y-0 active:scale-[0.98]",
        secondary: "bg-secondary text-secondary-foreground shadow-level-1 hover:bg-secondary/90 hover:-translate-y-0.5 hover:shadow-level-2 active:translate-y-0 active:scale-[0.98]",
        destructive:
          "bg-destructive text-white shadow-level-1 hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm",
        xs: "h-7 gap-1 px-2.5 text-xs",
        sm: "h-8 gap-1.5 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "size-10",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
