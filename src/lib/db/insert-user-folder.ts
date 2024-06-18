'use server'

import { createServerClient } from '@/utils/supabase'
import { cookies } from 'next/headers'
import { Folder } from '../schemas'

export async function insertUserFolder(folder: Folder) {
  const supabase = createServerClient(cookies())

  await supabase.from('folders').insert({
    title: folder.title,
    folder_description: folder.folder_description,
    public_folder: folder.public_folder,
    icon: folder.icon,
  })
}

// id uuid default gen_random_uuid() primary key,
// user_id uuid references auth.users default auth.uid(),
// title text,
// folder_size bigint default 100,
// folder_description text,
// public_folder boolean default false,
// icon text,
// tags text [] default default_tags ()

// title: folder.folder.folderName,
// used_quota: 420,
// user_qouta: 420,
// bucket_quota: 42069,
// description: "testing a insert",
// public_folder: false,
//tags: ["Testing", "Private"]

// -- create table if not exists folders (
//   --     id uuid primary key,
//   --     user_id uuid references auth.users,
//   --     title text,
//   --     used_quota bigint default 0,
//   --     user_quota bigint default 1000,
//   --     bucket_quota bigint default 100,
//   --     description text,
//   --     public_folder boolean default FALSE,
//   --     tags text []
//   -- );
