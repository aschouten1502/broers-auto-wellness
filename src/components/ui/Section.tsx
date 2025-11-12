import React from 'react'
import { Container } from './Container'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'primary'
  noPadding?: boolean
  id?: string
}

export function Section({ children, className, background = 'white', noPadding = false, id }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-neutral-50',
    primary: 'bg-primary-50',
  }

  return (
    <section
      id={id}
      className={cn(
        !noPadding && 'section-padding',
        backgrounds[background],
        className
      )}
    >
      <Container>
        {children}
      </Container>
    </section>
  )
}
