import { writable } from "svelte/store";

// export const filter = writable([]);

export const filter = writable(
  typeof localStorage !== 'undefined'
    ? JSON.parse(localStorage.getItem('filter'))
      ? JSON.parse(localStorage.getItem('filter'))
      : {
        amCheck: true,
        itCheck: true,
        sinCheck: true,
        tbCheck: true,
        inCheck: true,
        mmCheck: true,
        tekCheck: true,
        qpCheck: true,
        vbCheck: false,
        hbCheck: false,
      }
  : {}
);

// check for localStorage, this won't run on SSR
if (typeof localStorage !== 'undefined') {
  filter.subscribe(value => localStorage.setItem('filter', JSON.stringify(value)));
};

// Store a Boolean:
// export const enabled = writable<boolean>(localStorage.enabled === 'true');
// enabled.subscribe((value) => localStorage.enabled = String(value));
