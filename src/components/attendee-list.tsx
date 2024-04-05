'use client'

import React, { useState } from 'react'

import { useSearchParams } from 'next/navigation'

import {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  SearchIcon
} from 'lucide-react'

import { IconButton } from './icon-button'
import { Table } from './table'

type Attendee = {
  id: number
  name: string
  email: string
  createdAt: Date
  checkedInAt: Date | null
}

const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={() =>
          table.toggleAllPageRowsSelected(!table.getIsAllPageRowsSelected())
        }
        className="acc size-4 rounded border border-white/10 bg-black/20"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        onChange={() => row.toggleSelected(!row.getIsSelected())}
        className="acc size-4 rounded border border-white/10 bg-black/20"
      />
    ),
    footer: ({ column }) => column.id
  },
  {
    accessorKey: 'id',
    header: 'Código',
    cell: ({ row }) => <div>{row.original.id}</div>,
    footer: ({ column }) => column.id
  },
  {
    accessorKey: 'name',
    header: 'Participante',
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-white">{row.getValue('name')}</span>
        <span>{row.original.email}</span>
      </div>
    ),
    footer: ({ column }) => column.id
  },
  {
    accessorKey: 'createdAt',
    header: 'Data de inscrição',
    cell: ({ row }) => {
      const formatted = row.original.createdAt.toLocaleTimeString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
      })

      const formattedShort = row.original.createdAt.toLocaleTimeString(
        'pt-BR',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        }
      )

      return (
        <div title={formatted} suppressHydrationWarning>
          {formattedShort}
        </div>
      )
    },
    footer: ({ column }) => column.id
  },
  {
    accessorKey: 'checkedInAt',
    header: 'Data do check-in',
    cell: ({ row }) => {
      const formatted = row.original.checkedInAt?.toLocaleTimeString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
      })

      const formattedShort = row.original.checkedInAt?.toLocaleTimeString(
        'pt-BR',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        }
      )

      if (!formatted) {
        return <span className="text-zinc-400">Não fez check-in</span>
      }

      return (
        <div title={formatted} suppressHydrationWarning>
          {formattedShort}
        </div>
      )
    },
    footer: ({ column }) => column.id
  },
  {
    id: 'actions',
    cell: () => (
      <IconButton transparent>
        <MoreHorizontalIcon className="size-4" />
      </IconButton>
    )
  }
] satisfies ColumnDef<Attendee>[]

interface AttendeeListProps {
  data: Attendee[]
}

export const AttendeeList: React.FC<AttendeeListProps> = ({ data }) => {
  const searchParams = useSearchParams()

  const search = searchParams.get('search')

  // resolver paginação
  const [page, setPage] = useState(() => {
    if (searchParams.has('page')) {
      return Number(searchParams.get('page')) - 1
    }

    return 0
  })

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: page,
    pageSize: 10
  })

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([
    { id: 'name', value: search ?? '' }
  ])

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onStateChange(updater) {
      console.log(updater)
    },
    state: {
      columnFilters,
      pagination
    }
  })

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="flex w-72 items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5">
          <SearchIcon className="size-4 text-emerald-300" />
          <input
            className="flex-1 border-0 bg-transparent p-0 text-sm outline-none focus:ring-0"
            placeholder="Buscar participante..."
            value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
            autoFocus
            onChange={event => {
              const { value } = event.target

              const params = new URLSearchParams(searchParams.toString())

              params.set('search', value)

              window.history.pushState(null, '', `?${params.toString()}`)

              table.getColumn('name')?.setFilterValue(value)
            }}
          />
        </div>
      </div>

      <Table.Root>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Table.Header key={header.id} colSpan={header.colSpan}>
                  {!header.isPlaceholder &&
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </Table.Header>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan={columns.length} className="text-center">
                Nenhum resultado.
              </Table.Cell>
            </Table.Row>
          )}
        </tbody>

        <tfoot>
          <tr>
            <Table.Cell colSpan={3}>
              Mostrando {table.getRowModel().rows.length} de{' '}
              {table.getRowCount()} itens
            </Table.Cell>

            <Table.Cell colSpan={3} className="text-right">
              <div className="inline-flex items-center gap-8">
                <span>
                  Página {table.getState().pagination.pageIndex + 1} de{' '}
                  {table.getPageCount()}
                </span>
                <div className="flex gap-1.5">
                  <IconButton
                    onClick={() => table.firstPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <ChevronsLeftIcon className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    <ChevronLeftIcon className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    <ChevronRightIcon className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={() => table.lastPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    <ChevronsRightIcon className="size-4" />
                  </IconButton>
                </div>
              </div>
            </Table.Cell>
          </tr>
        </tfoot>
      </Table.Root>
    </div>
  )
}
