import { writable } from "svelte/store";

// Store an Array or Object:
export const result = writable(
  typeof localStorage !== 'undefined' ? JSON.parse(
    localStorage.getItem('result') ? localStorage.getItem('result') : "[]"
  ) : []
);
// result.subscribe(value => localStorage.setItem('result', JSON.stringify(value)));

// check for localStorage, this won't run on SSR
if (typeof localStorage !== 'undefined') {
  result.subscribe(value => localStorage.setItem('result', JSON.stringify(value)));
};

// Store a String:
// const stored = localStorage.result;
// export const result = writable(stored || []);
// result.subscribe(value => localStorage.result = value);


// import { browser } from '$app/env'
// import { get } from 'svelte/store'

// const a = writable(browser ? localStorage.get('token') || null : null)
