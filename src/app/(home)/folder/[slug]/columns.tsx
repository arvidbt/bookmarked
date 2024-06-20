'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ColumnDef } from '@tanstack/react-table'
import { URL } from 'fm/types'
import { MoreHorizontal } from 'lucide-react'
import Link from 'next/link'
import { z } from 'zod'

export const columns: ColumnDef<URL>[] = [
  {
    accessorKey: 'title',
    header: () => <div className="text-left">Title</div>,
    cell: ({ row }) => {
      const value = z.string().parse(row.getValue('title'))
      return <div className="text-left font-medium">{value}</div>
    },
  },
  {
    accessorKey: 'url_entry',
    header: () => <div className="text-left">URL</div>,
    cell: ({ row }) => {
      const value = z.string().url().parse(row.getValue('url_entry'))

      return (
        <div className="flex items-center justify-between">
          <Link href={value} target="_blank">
            <div className="max-w-lg items-center justify-center truncate text-left font-medium decoration-green-500 decoration-2 underline-offset-4 hover:underline">
              {value}
            </div>
          </Link>
        </div>
      )
    },
  },
  // {
  //   accessorKey: 'tags',
  //   header: () => <div className="text-left">Tags</div>,
  //   cell: ({ row }) => {
  //     const value = z.string().parse(row.getValue('tags'))
  //     return (
  //       <div className="flex flex-wrap gap-2 text-left font-medium">
  //         {value.length > 0 &&
  //           value.split(',').map((t, i) => (
  //             <div
  //               className="rounded-lg bg-black p-1 px-2 text-sm font-semibold "
  //               key={i}
  //             >
  //               {t.trim()}
  //             </div>
  //           ))}
  //       </div>
  //     )
  //   },
  // },
  {
    accessorKey: 'id',
    header: () => <div className="rounded-lg text-right font-medium"></div>,
    cell: ({ row }) => {
      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText('hej')}
              >
                📋 Copy URL
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>✍️ Edit URL</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>🚨 Delete URL</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )
    },
  },
]
