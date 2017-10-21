<template>
    <main class="mdl-layout__content">
        <div v-for="(blog, index) in blogs" :key="index" class="mdl-grid portfolio-max-width">
            <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
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
                    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href="portfolio-example01.html">Read more</a>
                </div>
            </div>

            <!--<div class="mdl-cell mdl-card mdl-shadow&#45;&#45;4dp portfolio-card">-->
                <!--<div class="mdl-card__media">-->
                    <!--<img class="article-image" src="~assets/img/example-work07.jpg" border="0" alt="">-->
                <!--</div>-->
                <!--<div class="mdl-card__title">-->
                    <!--<h2 class="mdl-card__title-text">Sunt nulla</h2>-->
                <!--</div>-->
                <!--<div class="mdl-card__supporting-text">-->
                    <!--Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.-->
                <!--</div>-->
                <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                    <!--<a class="mdl-button mdl-button&#45;&#45;colored mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;accent" href="portfolio-example01.html">Read more</a>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="mdl-cell mdl-card mdl-shadow&#45;&#45;4dp portfolio-card">-->
                <!--<div class="mdl-card__media">-->
                    <!--<img class="article-image" src="~assets/img/example-work02.jpg" border="0" alt="">-->
                <!--</div>-->
                <!--<div class="mdl-card__title">-->
                    <!--<h2 class="mdl-card__title-text">Android.com website</h2>-->
                <!--</div>-->
                <!--<div class="mdl-card__supporting-text">-->
                    <!--Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.-->
                <!--</div>-->
                <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                    <!--<a class="mdl-button mdl-button&#45;&#45;colored mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;accent" href="portfolio-example01.html">Read more</a>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="mdl-cell mdl-card mdl-shadow&#45;&#45;4dp portfolio-card">-->
                <!--<div class="mdl-card__media">-->
                    <!--<img class="article-image" src="~assets/img/example-work03.jpg" border="0" alt="">-->
                <!--</div>-->
                <!--<div class="mdl-card__title">-->
                    <!--<h2 class="mdl-card__title-text">Dashboard template</h2>-->
                <!--</div>-->
                <!--<div class="mdl-card__supporting-text">-->
                    <!--Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.-->
                <!--</div>-->
                <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                    <!--<a class="mdl-button mdl-button&#45;&#45;colored mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;accent" href="portfolio-example01.html">Read more</a>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="mdl-cell mdl-card mdl-shadow&#45;&#45;4dp portfolio-card">-->
                <!--<div class="mdl-card__media">-->
                    <!--<img class="article-image" src="~assets/img/example-work04.jpg" border="0" alt="">-->
                <!--</div>-->
                <!--<div class="mdl-card__title">-->
                    <!--<h2 class="mdl-card__title-text">Text-heavy website</h2>-->
                <!--</div>-->
                <!--<div class="mdl-card__supporting-text">-->
                    <!--Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.-->
                <!--</div>-->
                <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                    <!--<a class="mdl-button mdl-button&#45;&#45;colored mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;accent" href="portfolio-example01.html">Read more</a>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="mdl-cell mdl-card mdl-shadow&#45;&#45;4dp portfolio-card">-->
                <!--<div class="mdl-card__media">-->
                    <!--<img class="article-image" src="~assets/img/example-work08.jpg" border="0" alt="">-->
                <!--</div>-->
                <!--<div class="mdl-card__title">-->
                    <!--<h2 class="mdl-card__title-text">Ex officia laborum</h2>-->
                <!--</div>-->
                <!--<div class="mdl-card__supporting-text">-->
                    <!--Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.-->
                <!--</div>-->
                <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                    <!--<a class="mdl-button mdl-button&#45;&#45;colored mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;accent" href="portfolio-example01.html">Read more</a>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="mdl-cell mdl-card mdl-shadow&#45;&#45;4dp portfolio-card">-->
                <!--<div class="mdl-card__media">-->
                    <!--<img class="article-image" src="~assets/img/example-work05.jpg" border="0" alt="">-->
                <!--</div>-->
                <!--<div class="mdl-card__title">-->
                    <!--<h2 class="mdl-card__title-text">Stand-alone article</h2>-->
                <!--</div>-->
                <!--<div class="mdl-card__supporting-text">-->
                    <!--Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.-->
                <!--</div>-->
                <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                    <!--<a class="mdl-button mdl-button&#45;&#45;colored mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;accent" href="portfolio-example01.html">Read more</a>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="mdl-cell mdl-card mdl-shadow&#45;&#45;4dp portfolio-card">-->
                <!--<div class="mdl-card__media">-->
                    <!--<img class="article-image" src="~assets/img/example-work06.jpg" border="0" alt="">-->
                <!--</div>-->
                <!--<div class="mdl-card__title">-->
                    <!--<h2 class="mdl-card__title-text">MDL website</h2>-->
                <!--</div>-->
                <!--<div class="mdl-card__supporting-text">-->
                    <!--Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.-->
                <!--</div>-->
                <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                    <!--<a class="mdl-button mdl-button&#45;&#45;colored mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;accent" href="portfolio-example01.html">Read more</a>-->
                <!--</div>-->
            <!--</div>-->

            <!--<div class="mdl-cell mdl-card mdl-shadow&#45;&#45;4dp portfolio-card">-->
                <!--<div class="mdl-card__media">-->
                    <!--<img class="article-image" src="~assets/img/example-work09.jpg" border="0" alt="">-->
                <!--</div>-->
                <!--<div class="mdl-card__title">-->
                    <!--<h2 class="mdl-card__title-text">Consequat ut quis</h2>-->
                <!--</div>-->
                <!--<div class="mdl-card__supporting-text">-->
                    <!--Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.-->
                <!--</div>-->
                <!--<div class="mdl-card__actions mdl-card&#45;&#45;border">-->
                    <!--<a class="mdl-button mdl-button&#45;&#45;colored mdl-js-button mdl-js-ripple-effect mdl-button&#45;&#45;accent" href="portfolio-example01.html">Read more</a>-->
                <!--</div>-->
            <!--</div>-->
        </div>
        <my-footer></my-footer>
    </main>
</template>

<script>
    import MyFooter from '~/components/Footer.vue'
    import axios from '~/plugins/axios'

    export default {
        components: {
            MyFooter
        },

        async asyncData () {
            let { data } = await axios.get('/api/blogs')
            return { blogs: data }
        },

        data(){
            return{
                img1:''
            }
        },


        methods:{

        }
    }
</script>
