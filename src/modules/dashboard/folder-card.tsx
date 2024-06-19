'use client'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import Link from 'next/link'
import { urlPaths } from '@/utils/paths'
import { FolderProps } from '@/lib/schemas'
import { motion } from 'framer-motion'
export const FolderCard = ({
  id,
  title,
  icon,
  public_folder: publicFolder,
  folder_description: description,
  tags,
}: FolderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: -5 }}
      exit={{ opacity: 0 }}
    >
      <Link
        href={`${urlPaths.FOLDER}${encodeURIComponent(id)}`}
        className="h-full"
      >
        <Card className="flex h-full flex-col justify-between rounded-t-2xl hover:bg-green-50/30">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div className="flex gap-1 text-xl">
                <p>{icon ? icon : '📁'}&nbsp;</p>
                <h3>{title}</h3>
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
    </motion.div>
  )
}
