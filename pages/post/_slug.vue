<template>
  <div>
    <link
      rel="stylesheet"
      href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.16.2/build/styles/vs.min.css"
    />
    <v-container fluid>
      <v-img max-height="32rem" :src=post.coverImage></v-img>
      <v-col md="8" offset-md="2">
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
      slug: this.$route.params.slug
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
    let splitSlug = this.slug.split('-')
    let lastSlugCuid = splitSlug[splitSlug.length - 1]
    let d = {
      cuid: lastSlugCuid
    }
    this.$store.dispatch("getPosts/fetchSinglePostDetail", d).then(() => {
      eventBus.$emit("toggle-loader");
    });    
  },
  mounted(){
    let splitSlug = this.slug.split('-')
    let lastSlugCuid = splitSlug[splitSlug.length - 1]
    let d = {
      cuid: lastSlugCuid
    }
    this.$store.dispatch("getPosts/fetchSinglePostDetail", d).then(() => {
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
    padding-left: 10px;
  }
}

.v-application {
  code {
    width: 100% !important;
    overflow: scroll;
    padding-left: 10px;
  }
}
</style>
