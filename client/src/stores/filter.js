import { writable } from "svelte/store";

export const filter = writable([]);


// Store a Boolean:
// export const enabled = writable<boolean>(localStorage.enabled === 'true');
// enabled.subscribe((value) => localStorage.enabled = String(value));
