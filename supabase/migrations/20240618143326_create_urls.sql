create table if not exists urls (
    id bigint primary key generated always as identity,
    folder_id uuid,
    title text,
    url_entry text,
    tags text,

    foreign key (folder_id) references folders (id) on delete cascade
);
