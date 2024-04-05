import React from 'react'

import Link, { type LinkProps } from 'next/link'

import { cn } from '~/libs/utils'

interface NavLinkProps extends React.ComponentProps<typeof Link> {}

export const NavLink: React.FC<NavLinkProps> = ({ className, ...props }) => {
  return <Link className={cn('text-sm font-medium', className)} {...props} />
}
