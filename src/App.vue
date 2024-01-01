<template>
  <div>
    <Navbar />
   <router-view />
    <Footer/>

   


  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'FireBlogApp',
  components: {
    Navbar,
    Footer

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