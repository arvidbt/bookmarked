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

const BookmarkFolderSchema = z.object({
  id: z.string().uuid(),
  title: z.string().max(20),
  icon: z.string().emoji().optional(),
  usedQuota: z.number().nonnegative(),
  userQuota: z.number().nonnegative(),
  bucketQuota: z.number().nonnegative(),
  publicFolder: z.boolean(),
  description: z.string().max(255).optional(),
  tags: z.array(z.string().max(12)).optional(),
})

type BookmarkProps = z.infer<typeof BookmarkFolderSchema>

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
  usedQuota,
  userQuota,
  bucketQuota,
  publicFolder,
  description,
  tags,
}: BookmarkProps) => {
  const quotaUsedPercentage = calculatePercentage(usedQuota, bucketQuota)

  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setProgress(quotaUsedPercentage), 200)
    return () => clearTimeout(timer)
  }, [quotaUsedPercentage])

  return (
    <>
      <Link href={`/folder/${encodeURIComponent(id)}`}>
        <Card className=" hover:bg-red-50/20">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>
                {icon ? icon : '📁'}&nbsp;
                {title}
              </div>
              <div>{publicFolder ? <div>{'🔓'}</div> : '🔒'}</div>
            </CardTitle>
            <Progress value={progress} className="" />
            <CardDescription>
              <span className="text-lg font-bold text-black">{usedQuota}</span>
              <span>
                &nbsp;/&nbsp;{bucketQuota}&nbsp;
                {'URLs ('}
                {quotaUsedPercentage}
                {'%)'}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>{description && <p>{description}</p>}</CardContent>
          <CardFooter className="gap-2">
            {tags &&
              tags.map((t) => (
                <div
                  className="rounded-lg bg-red-100 p-1 px-2 text-sm font-semibold text-red-800"
                  key={t}
                >
                  {t}
                </div>
              ))}
          </CardFooter>
        </Card>
      </Link>
    </>
  )
}
