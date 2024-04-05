import React from 'react'

import { cn } from '~/libs/utils'

interface HeaderProps extends React.ComponentProps<'th'> {}

export const Header: React.FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <th
      className={cn('px-4 py-3 text-left text-sm font-semibold', className)}
      {...props}
    />
  )
}
