'use client'

import { z } from 'zod'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import Link from 'next/link'
import { Progress } from './ui/progress'
import { useEffect, useState } from 'react'
import { urlPaths } from '@/utils/paths'
import { FolderProps } from '@/lib/schemas'

function calculatePercentage(part: number, total: number): number {
  if (total === 0) {
    throw new Error('Total cannot be zero.')
  }
  const percentage = (part / total) * 100
  return parseFloat(percentage.toFixed(1))
}

export const BookmarkFolder = ({
  id,
  title,
  icon,
  public_folder: publicFolder,
  folder_description: description,
  tags,
}: FolderProps) => {
  return (
    <>
      <Link
        href={`${urlPaths.FOLDER}${encodeURIComponent(id)}`}
        className="h-full"
      >
        <Card className="flex h-full flex-col justify-between rounded-t-2xl hover:bg-green-50/30">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div className="text-xl">
                {icon ? icon : '📁'}&nbsp;
                {title}
              </div>
              <div>{publicFolder ? <div>{'🔓'}</div> : '🔒'}</div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {description && (
              <p className="font-medium text-gray-500 ">{description}</p>
            )}
          </CardContent>
          <CardFooter>
            <div className="inset-x-0  flex h-full grow gap-2">
              {tags &&
                tags.map((t) => (
                  <div
                    className="rounded-lg bg-green-100 p-1 px-2 text-sm font-semibold text-green-800"
                    key={t}
                  >
                    {t}
                  </div>
                ))}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </>
  )
}
