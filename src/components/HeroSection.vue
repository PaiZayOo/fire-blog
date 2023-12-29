<template>
    <div>
        <div class="container-fluid">
            <div class="row h-100  flex-column-reverse flex-md-row  mt-5 justify-content-center align-items-center">
                <div class="col-md-6">
                    <div class=" text-center">
                        <h3 class="fw-bold">
                            <div>
                                DYNAMIC PAGE TITLES
                            </div>
                            <div>
                                WITH VUE ROUTER
                            </div>
                        </h3>

                        <p class="d-none d-md-block">In this video we take a look at creating...</p>
                        <router-link :to="{ name: 'post', params: { postId: 1 } }" class="text-decoration-none">
                            VIEW THE POST <i class="bi bi-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <img class="w-100 rounded" :src="require('../assets/blogPhotos/coding.jpg')" alt="">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Arrow from '../assets/Icons/arrow-right-light.svg'
export default {
    name: 'FireBlogHeroSection',
    components: {
        Arrow
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