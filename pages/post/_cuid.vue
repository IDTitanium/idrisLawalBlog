<template>
  <div>
    <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/vs.min.css"
    />
    <v-container fluid>
      <v-col md="8">
        <div class="text-center">
          <h1>{{ post.title }}</h1>
          <div class="content">
            <div v-html="post.content"></div>
          </div>
        </div>
      </v-col>
    </v-container>
    <Loader />
  </div>
</template>


<script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/highlight.min.js"></script>

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
  img {
    width: 100% !important;
    height: auto !important;
  }
  code {
    width: 100% !important;
    overflow: scroll !important;
  }
}

.v-application {
  code {
    width: 100% !important;
    overflow: scroll;
  }
}
</style>
