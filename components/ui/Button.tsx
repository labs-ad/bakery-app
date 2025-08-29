import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'rounded-2xl bg-secondary-600 text-white shadow-soft hover:bg-secondary-700 hover:shadow-medium hover:scale-95 active:scale-90',
        secondary:
          'rounded-2xl border-2 border-primary-400 bg-transparent text-primary-600 shadow-soft hover:bg-primary-400 hover:text-white hover:shadow-medium hover:scale-95 active:scale-90',
        ghost:
          'rounded-lg hover:bg-primary-50 hover:text-primary-700 text-primary-600',
        link: 'text-primary-600 underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-8 py-3 text-sm',
        sm: 'px-3 py-2 text-xs',
        lg: 'px-10 py-4 text-base',
        icon: 'p-3',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
