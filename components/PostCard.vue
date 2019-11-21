<template>
  <v-card class="mx-auto" max-width="400" height="450">
    <v-img :src="postImage" height="200px"></v-img>
    <v-card-title class="word-break">{{ postTitle }}</v-card-title>
    <v-card-text>{{ postBrief }}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <slot name="button"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
import eventBus from "@/eventBus";
export default {
  props: ["postTitle", "postBrief", "postImage"]
};
</script>
<style lang="scss" scoped>
.word-break {
  word-break: keep-all;
}
</style>
