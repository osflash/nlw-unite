import React from 'react'

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  SearchIcon
} from 'lucide-react'

export const AttendeeList: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5">
          <SearchIcon className="size-4 text-emerald-300" />
          <input
            placeholder="Buscar participante..."
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none ring-0"
          />
        </div>
      </div>

      <div className="roun rounded-lg border border-white/10">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="w-12 px-4 py-3 text-left text-sm font-semibold">
                <input
                  type="checkbox"
                  className="acc size-4 rounded border border-white/10 bg-black/20"
                />
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Código
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Participante
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Data de inscrição
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold">
                Data do check-in
              </th>
              <th className="w-16 px-4 py-3 text-left text-sm font-semibold"></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 8 }).map((_, i) => (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <input
                    type="checkbox"
                    className="acc size-4 rounded border border-white/10 bg-black/20"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">12383</td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">OsFlash</span>
                    <span>osflash@gmail.com</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  7 dias atrás
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  3 dias atrás
                </td>
                <td className="px-4 py-3 text-sm text-zinc-300">
                  <button className="rounded-md border border-white/10 bg-black/20 p-1.5">
                    <MoreHorizontalIcon className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={3} className="px-4 py-3 text-sm text-zinc-300">
                Mostrando 10 de 228 itens
              </td>
              <td
                colSpan={3}
                className="px-4 py-3 text-right text-sm text-zinc-300"
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5">
                      <ChevronsLeftIcon className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5">
                      <ChevronLeftIcon className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5">
                      <ChevronRightIcon className="size-4" />
                    </button>
                    <button className="rounded-md border border-white/10 bg-white/10 p-1.5">
                      <ChevronsRightIcon className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
