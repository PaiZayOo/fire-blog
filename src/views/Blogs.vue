<template>
    <div class="blog-card-wrap">
        <div class="blog-cards container">
            <div class="toggle-edit">
                <span>Toggle Editing Post</span>
                <input type="checkbox" v-model="editPost" />
            </div>
            <BlogCard/>
        </div>
    </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue';
export default {
    name: 'FireBlogBlogs',
    components: {
        BlogCard
    },
    data() {
        return {

        };
    },
    computed: {
        editPost: {
            get() {
                return this.$store.state.editPost;
            },
            set(payload) {
                return this.$store.commit("toggleEditPost", payload);
            }
        },
         beforeDestroy() {
           return this.$store.commit("toggleEditPost", false);
        },
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.blog-cards {
    position: relative;

    .toggle-edit {
        display: flex;
        align-items: center;
        position: absolute;
        top: -17px;
        right: -31px;

        span {
            margin-right: 16px;
        }

        input[type="checkbox"] {
            position: relative;
            border: none;
            background: #fff;
            -webkit-appearance: none;

            outline: none;
            width: 80px;
            height: 30px;
            border-radius: 20px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        input[type="checkbox"]:before {
            content: "";
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 20px;
            top: 0;
            left: 0;
            background: #303030;
            transform: scale(1.1);
            transition: 750ms ease all;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        input:checked[type="checkbox"]:before {
            background: #fff;
            left: 52px;
        }
    }
}
</style>