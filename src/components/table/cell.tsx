import React from 'react'

import { cn } from '~/libs/utils'

interface CellProps extends React.ComponentProps<'td'> {}

export const Cell: React.FC<CellProps> = ({ className, ...props }) => {
  return (
    <td
      className={cn('px-4 py-3 text-sm text-zinc-300', className)}
      {...props}
    />
  )
}
