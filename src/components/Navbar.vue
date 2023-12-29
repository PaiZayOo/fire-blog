<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3">
            <div class="container">
                <a class="navbar-brand font-weight-bold" href="#">Fire blog</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end mx-3 " id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class=" nav-link hover " :to="{name : 'Home'}">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class=" nav-link" to="#">
                                Blogs
                            </router-link>
                        </li>
                        <li class="nav-item">
                                <router-link class=" nav-link" to="#">
                                    Create Post
                                </router-link>
                            </li>
                        <li class="nav-item">
                            <router-link class=" nav-link" to="#">
                                LogIn/Register
                            </router-link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>


export default {
    name: 'FireBlogNavbar',
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