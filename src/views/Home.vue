<template>
    <div>
        <HeroSection />
        <hr>
        <Content/>
        <hr>
        <BlogCard/>
        

    </div>
</template>

<script>
 import HeroSection from '@/components/HeroSection.vue';
import Content from '@/components/Content.vue';
import BlogCard from '@/components/BlogCard.vue';


export default {
    name: 'FireBlogHome',
    components: {
        HeroSection,
        Content,
        BlogCard,
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