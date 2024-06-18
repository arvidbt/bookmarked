create table if not exists followed_folders (
    id bigint primary key generated always identity,
    user_id uuid references auth.users default auth.uid(),
    folder_id uuid,

    foreign key (folder_id) references folders (id) on delete cascade
);
