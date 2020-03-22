<template>
  <div>
    <v-container fluid>
      <div class="cursive-font">My Blog Posts</div>
      <v-row>
        <v-col md="4" v-for="(post, index) in posts" :key="index">
          <nuxt-link :to="'post/' +post.slug + '-'+ post.cuid">
            <PostCard
              :postTitle="post.title"
              :postImage="post.coverImage ? post.coverImage : defaultImage"
              :postBrief="post.brief"
            />
          </nuxt-link>
          
        </v-col>
      </v-row>
    </v-container>
    <Loader />
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import Loader from "@/components/Loader";
import { eventBus } from "@/eventBus";

export default {
  components: {
    PostCard,
    Loader
  },
  data() {
    return {
      defaultImage: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    };
  },
  computed: {
    posts() {
      return this.$store.state.getPosts.posts;
    }
  },
  created() {
    this.$store
      .dispatch("getPosts/fetchPosts")
      .then(() => eventBus.$emit("toggle-loader"));
  },
};
</script>

<style lang="scss" scoped>
.cursive-font {
  font-size: 3rem;
  font-family: cursive;
}
.flex {
  display: flex;
  flex-direction: row;
  margin: 20px;
}
</style>
