import React from 'react'

import { cn } from '~/libs/utils'

interface RowProps extends React.ComponentProps<'tr'> {}

export const Row: React.FC<RowProps> = ({ className, ...props }) => {
  return (
    <tr
      className={cn('border-b border-white/10 hover:bg-white/5', className)}
      {...props}
    />
  )
}
