'use client'

import * as React from 'react'
import { Root as AspectRatioRoot } from '@radix-ui/react-aspect-ratio'

import { cn } from '@/lib/utils'

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioRoot>,
  React.ComponentPropsWithoutRef<typeof AspectRatioRoot>
>(({ className, ...props }, ref) => (
  <AspectRatioRoot ref={ref} className={cn(className)} {...props} />
))

AspectRatio.displayName = 'AspectRatio'

export { AspectRatio }
