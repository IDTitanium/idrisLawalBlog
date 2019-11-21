<template>
  <v-overlay :value="overlay">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>

<script>
import { eventBus } from "@/eventBus";
export default {
  data() {
    return {
      overlay: "true"
    };
  },
  created() {
    eventBus.$on("toggle-loader", () => {
      this.overlay = false;
    });
  }
};
</script>
