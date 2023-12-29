<template>
    <div>
        <div class="container-fluid">
                <div class=" row h-100  mt-2  justify-content-center align-items-center">
                      <div class="col-md-6 mb-3">
                            <img class="w-100 rounded" :src="require('../assets/blogPhotos/beautiful-stories.jpg')" alt="">
                        </div>
                    <div class="col-md-6">
                        <div class=" text-center">
                            <h3 class="fw-bold">
                                <div>
                                    TRYING TO LEARN
                                </div>
                                <div>
                                    EVERYTHING NEW
                                </div>
                            </h3>

                            <p class="d-none d-md-block">In this video we take a look at creating...</p>
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
    name: 'FireBlogContent',

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

<style lang="scss" scoped>

</style>