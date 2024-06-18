create table public.profiles (
  id uuid not null references auth.users on delete cascade,
  mail_username text,
  username text unique,
  is_premium boolean default false,
  followed_folders_quota bigint default 3,
  public_folders_quota bigint default 3,

  primary key (id)
);

alter table public.profiles enable row level security;

-- inserts a row into public.profiles
create function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, mail_username)
  values (new.id, new.raw_user_meta_data ->> 'mail_username');
  return new;
end;
$$;

-- trigger the function every time a user is created
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();