import { writable } from "svelte/store";

export default writable({
  pokemon: [],
  pagination: {},
  sidebar_index: 0,
  flat: true,
  sidebar_padding: "roomy",
});
