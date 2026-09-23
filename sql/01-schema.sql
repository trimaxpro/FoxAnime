drop table if exists anime_sites;

create table anime_sites (
  id integer primary key autoincrement,
  name text not null,
  url text not null unique,
  description text not null
);

create index idx_anime_sites_name on anime_sites(name);