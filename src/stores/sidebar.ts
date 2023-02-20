import { ref } from "vue";
import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", () => {
  const fold = ref(false);
  function handleFold() {
    this.fold = !this.fold;
  }

  return { fold, handleFold };
});
