<template>
  <div>
    <v-col md="2"></v-col>
    <div class="intro">{{intro}}</div>
    <div class="stack">
      <span class="text-green">I write:</span>
      {{stacks}}
      <v-btn large>
        <a href="cv.pdf" download>Download my CV</a>
      </v-btn>
    </div>
    <div class="stack">
      <span class="text-green">I've Used:</span>
      {{otherTech}}
    </div>

    <v-col md="4"></v-col>
    <v-row>
      <a href="https://github.com/IDTitanium" class="move-down mr-10">
        <v-img max-height="6rem" max-width="6rem" src="github-512.png" />
      </a>
      <a href="https://twitter.com/oluwaseunmi" class="move-down mr-10">
        <v-img max-height="5rem" max-width="5rem" src="twitter.png" />
      </a>
      <a href="https://linkedin.com/in/idris-lawal-oluwaseun" class="move-down">
        <v-img max-height="5rem" max-width="5rem" src="LinkedIn.png" />
      </a>
      <!-- <div class="move-down stack">
        <span class="text-green">Email:</span>
        {{email}}
      </div>-->
      <v-spacer />
      <v-img
        max-height="15rem"
        class="move-down ml-6 mr-10"
        max-width="15rem"
        style="border:solid;border-radius:50%"
        src="me.jpg"
      />
    </v-row>
    <v-img max-height="3rem" class="move-down" src="wood.png" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: "Hi, I  am Idris, I am a Software developer",
      stacks: "Laravel, Vue JS, Express JS, Nuxt JS",
      email: "idriseun222@gmail.com",
      otherTech: "MongoDB, MySQL, Cypress, PHPUnit"
    };
  }
};
</script>

<style scoped>
.intro {
  font-size: 5rem;
  font-family: cursive;
}

.stack {
  margin-top: 2rem;
  font-size: 3rem;
  font-family: cursive;
}

.text-green {
  color: green;
}

.move-down {
  margin-top: 7rem;
  align-self: center;
}

.icon-size {
  width: 4rem;
  height: 4rem;
}
a {
  text-decoration: none;
  color: white !important;
}
</style>