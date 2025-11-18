import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-amethyst-500 text-white hover:bg-amethyst-600",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-amethyst-500 to-rose-400 text-white hover:from-amethyst-600 hover:to-rose-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300",
        glass: "glass-effect text-amethyst-700 hover:bg-white/60 backdrop-blur-lg border border-white/30"
      },
      size: {
        default: "h-10 sm:h-10 px-4 py-2 min-h-[44px] sm:min-h-[40px]",
        sm: "h-9 sm:h-9 rounded-md px-3 min-h-[44px] sm:min-h-[36px]",
        lg: "h-11 sm:h-11 rounded-md px-6 sm:px-8 min-h-[48px] sm:min-h-[44px] text-sm sm:text-base",
        xl: "h-14 sm:h-14 rounded-2xl px-6 sm:px-12 text-base sm:text-lg font-semibold min-h-[56px] sm:min-h-[56px]",
        icon: "h-10 w-10 sm:h-10 sm:w-10 min-h-[44px] min-w-[44px] sm:min-h-[40px] sm:min-w-[40px]",
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