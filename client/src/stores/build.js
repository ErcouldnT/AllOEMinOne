import { writable } from "svelte/store";

export const build = writable(
  typeof window !== 'undefined' ? JSON.parse(
    localStorage.getItem('build') ? localStorage.getItem('build') : "[]"
  ) : []
);

if (typeof window !== 'undefined') {
  build.subscribe(value => localStorage.setItem('build', JSON.stringify(value)));
};
