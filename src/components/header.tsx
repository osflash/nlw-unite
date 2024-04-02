import React from 'react'

import Link from 'next/link'

import { Icons } from './Icons'

export const Header: React.FC = () => {
  return (
    <div className="flex items-center gap-5 py-2">
      <Icons.nlwUnite />

      <nav className="flex items-center gap-5">
        <Link className="text-sm font-medium text-zinc-300" href="events">
          Eventos
        </Link>
        <Link className="text-sm font-medium" href="participants">
          Participantes
        </Link>
      </nav>
    </div>
  )
}
