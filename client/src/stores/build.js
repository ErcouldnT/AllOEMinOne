import { writable } from "svelte/store";

export const build = writable([]);

// build.set([{cpu}, {motherboard}, {ssd}, ...])

// {title: "ryzen", price: "300", url: "/hb", source: "hepsiburada"},
// {title: "ssd", price: "600", url: "/amz", source: "amazon"}
