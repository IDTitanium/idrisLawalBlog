<template>
  <div>
    <v-col md="8">
      <div class="text-center">
        <h1>{{ post.title }}</h1>
        <div class="content" v-html="post.content"></div>
      </div>
    </v-col>
    <Loader />
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import { eventBus } from "@/eventBus";

export default {
  data() {
    return {
      stuf: "",
      cuid: this.$route.params.cuid
    };
  },
  components: {
    Loader
  },
  computed: {
    post() {
      return this.$store.getters["getPosts/getSinglePost"];
    }
  },
  created() {
    let data = {
      cuid: this.cuid
    };
    this.$store.dispatch("getPosts/fetchSinglePostDetail", data).then(() => {
      eventBus.$emit("toggle-loader");
    });
  }
};
</script>
<style lang="scss" scoped>
.content {
  font-size: 1.5rem;
  text-align: justify;
  justify-content: flex-start;
}
</style>
