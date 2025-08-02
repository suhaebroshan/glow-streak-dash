import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-semibold",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:from-primary-glow hover:to-primary hover:scale-105 shadow-lg glow-primary",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary/30 bg-transparent text-primary hover:bg-primary/10 backdrop-blur-sm",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary-glow text-secondary-foreground hover:from-secondary-glow hover:to-secondary hover:scale-105 shadow-lg glow-secondary",
        accent:
          "bg-gradient-to-r from-accent to-accent-glow text-accent-foreground hover:from-accent-glow hover:to-accent hover:scale-105 shadow-lg glow-accent",
        glass: "glass-button text-primary hover:scale-105 hover:text-primary-glow",
        ghost: "hover:bg-accent/20 hover:text-accent text-muted-foreground backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
