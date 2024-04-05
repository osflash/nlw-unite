import React from 'react'

import { cn } from '~/libs/utils'

interface IconButtonProps extends React.ComponentProps<'button'> {
  transparent?: boolean
}

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  transparent,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-md border border-white/10 p-1.5',
        transparent ? 'bg-black/20' : 'bg-white/10',
        disabled ? 'opacity-50' : null,
        className
      )}
      {...props}
    />
  )
}
