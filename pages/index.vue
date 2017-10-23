<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <my-header></my-header>
        <my-hdrawer></my-hdrawer>
        <main class="mdl-layout__content">
            <div class="mdl-grid portfolio-max-width">
                <div v-for="(blog, index) in blogs" :key="index"  class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                    <div class="mdl-card__media">
                        <img class="article-image" :src='blog.img' border="0" alt="">
                    </div>
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">{{blog.title}}</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        {{blog.shortContent}}
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <nuxt-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" :to="'/blogs/'+index">
                            Read more
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <my-footer></my-footer>
        </main>
    </div>

</template>

<script>
    import MyHeader from '~/components/Header.vue'
    import MyHdrawer from '~/components/Hdrawer.vue'
    import MyFooter from '~/components/Footer.vue'
    import axios from '~/plugins/axios'

    export default {
        components: {
            MyHeader,
            MyHdrawer,
            MyFooter
        },

        async asyncData () {
            let { data } = await axios.get('/api/blogs')
            return { blogs: data }
        },

        methods:{

        }
    }
</script>
