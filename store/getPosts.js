const { createApolloFetch } = require("apollo-fetch");

const fetch = createApolloFetch({
  uri: "https://api.hashnode.com"
});

fetch.use(({ request, options }, next) => {
  options.headers = {
    Authorization: "xxxxxx"
  };
  next();
});

const state = () => ({
  posts: [],
  singlePost: {}
});

const getters = {
  getPosts(state) {
    return state.posts;
  },
  getSinglePost(state) {
    return state.singlePost;
  }
};

const actions = {
  fetchPosts(context) {
    fetch({
      query:
        '{ user(username: "titanium"){publication{posts {title,cuid,coverImage,brief,slug}}} }'
    }).then(res => {
      context.commit("setPosts", res.data.user.publication.posts);
    });
  },
  fetchSinglePostDetail(context, data) {
    fetch({
      query: `{post(cuid: "${data.cuid}") {title,content, coverImage,slug}}`
    }).then(res => {
      context.commit("setSinglePost", res.data.post);
    });
  }
};

const mutations = {
  setPosts(state, data) {
    state.posts = data;
  },
  setSinglePost(state, data) {
    state.singlePost = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
