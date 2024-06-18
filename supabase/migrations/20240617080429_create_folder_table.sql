create table if not exists folders (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users default auth.uid(),
    title text,
    folder_description text,
    public_folder boolean default false,
    icon text
);
