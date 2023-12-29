<template>
  <div>
    <Navbar />

    <router-view />


  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';


export default {
  name: 'FireBlogApp',
  components: {
    Navbar,

  },

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>