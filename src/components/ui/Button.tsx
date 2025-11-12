import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonPropsBase {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

interface ButtonPropsWithHref extends ButtonPropsBase, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  href: string
}

interface ButtonPropsWithoutHref extends ButtonPropsBase, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  href?: never
}

type ButtonProps = ButtonPropsWithHref | ButtonPropsWithoutHref

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-primary-400 text-neutral-900 hover:bg-primary-500 focus:ring-primary-400 shadow-sm hover:shadow-md',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500 shadow-sm hover:shadow-md',
    outline: 'border-2 border-neutral-300 text-neutral-700 hover:border-primary-400 hover:text-primary-600 focus:ring-primary-400',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
