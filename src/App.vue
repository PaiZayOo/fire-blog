<template>
  <div>
    <Navbar v-if="showNavFooter" />
    <router-view />
    <Footer v-if="showNavFooter" />




  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import 'firebase/auth'
import firebase from 'firebase/app'

export default {
  name: 'FireBlogApp',
  components: {
    Navbar,
    Footer

  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
         console.log(this.$store.state.profileEmail);
      }
    });

    this.routeCheck();
  },

  data() {
    return {
      showNavFooter: null
    };
  },


  methods: {
    routeCheck() {
      if (this.$route.name === 'Register' ||
        this.$route.name === 'ForgetPw' ||
        this.$route.name === 'LogIn') {
        this.showNavFooter = false;
      } else if (
        this.$route.name === 'Home' ||
        this.$route.name === 'Blogs'
      ) {
        this.showNavFooter = true;
      }
    }
  },
  watch: {
    $route() {
      this.routeCheck()
    }
  }
}
</script>

<style lang="scss" scoped></style>