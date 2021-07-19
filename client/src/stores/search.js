import { writable } from "svelte/store";

export const search = writable(
  typeof localStorage !== 'undefined'
    ? JSON.parse(localStorage.getItem('search'))
      ? JSON.parse(localStorage.getItem('search'))
      : ""
  : {}
);

if (typeof localStorage !== 'undefined') {
  search.subscribe(value => localStorage.setItem('search', JSON.stringify(value)));
};
