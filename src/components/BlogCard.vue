<template>
    <div>
        <h1 class="  my-4 text-center font-weight-bolder  text-decoration-underline">View Recent Posts</h1>
        <div class="container">
            <div class="row flex justify-content-around mb-5">

                <div class="card   hover-effect col-md-3 mt-2 " style="width: 18rem;">
                    <img :src="require('../assets/blogCards/stock-1.jpg')" class="card-img-ce" alt="...">
                    <div class="card-body">
                         <div  class=" d-flex justify-content-between">
                            <div>
                                <h5 class="card-title">Card title</h5>
                            </div>
                            <div class=" d-flex" v-if="editPost">
                                <div class="  me-2 text-primary font-weight-bold">
                                    <i class="bi bi-pencil-square"></i>
                                </div>
                                <div class=" text-danger font-weight-bold">
                                     <i class="bi bi-trash"></i>
                                </div>
                            </div>
                         </div>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <router-link :to="{ name: 'post', params: { postId: 1 } }" class="text-decoration-none">
                            VIEW THE POST <i class="bi bi-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
        

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FireBlogBlogPost',

    data() {
        return {

        };
    },
    computed: {
        editPost() {
            return this.$store.state.editPost;
        }
    },

    mounted() {

    },

    methods: {

    },
};
</script>


<style scoped>
/* Add Bootstrap hover effect class */
.hover-effect:hover {
    transform: scale(1.05);
    /* Adjust the scale factor based on your preference */
    transition: transform 0.3s ease;
    /* Add a transition for a smoother effect */
}
</style>