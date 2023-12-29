<template>
    <div>
        <HeroSection />
        <hr>
        <Content/>
        <hr>
        <BlogPost/>

    </div>
</template>

<script>
 import HeroSection from '@/components/HeroSection.vue';
import Content from '@/components/Content.vue';
import BlogPost from '@/components/BlogPost.vue';

export default {
    name: 'FireBlogHome',
    components: {
        HeroSection,
        Content,
        BlogPost
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