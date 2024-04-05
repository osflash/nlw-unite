import React from 'react'

import { Icons } from './Icons'
import { NavLink } from './nav-link'

export const Header: React.FC = () => {
  return (
    <div className="flex items-center gap-5 py-2">
      <Icons.nlwUnite />

      <nav className="flex items-center gap-5">
        <NavLink href="events">Eventos</NavLink>
        <NavLink href="participants">Participantes</NavLink>
      </nav>
    </div>
  )
}
