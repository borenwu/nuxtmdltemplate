<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <my-header></my-header>
        <my-hdrawer></my-hdrawer>
        <main class="mdl-layout__content">
            <div class="mdl-grid portfolio-max-width">
                <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Blog template</h2>
                    </div>
                    <div class="mdl-card__media">
                        <img class="article-image" src="~assets/img/portfolio-example-01.jpg" border="0" alt="">
                    </div>
                    <div class="mdl-card__supporting-text">
                        <strong>Includes</strong>
                        <span>Design, UX and Frontend Development</span>
                    </div>
                    <div class="mdl-grid portfolio-copy">
                        <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Introduction</h3>
                        <div class="mdl-cell mdl-cell--6-col mdl-card__supporting-text no-padding">
                            <p>
                                Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                            </p>
                        </div>
                        <div class="mdl-cell mdl-cell--6-col">
                            <img class="article-image" src="~assets/img/portfolio-example-02.jpg" border="0" alt="">
                        </div>
                        <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Initial Ideas</h3>
                        <div class="mdl-cell mdl-cell--6-col">
                            <img class="article-image" src="~assets/img/portfolio-example-03.jpg" border="0" alt="">
                        </div>
                        <div class="mdl-cell mdl-cell--6-col mdl-card__supporting-text no-padding ">
                            <p>
                                Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                            </p>
                        </div>
                        <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Final Concept</h3>
                        <div class="mdl-cell mdl-cell--6-col">
                            <img class="article-image" src="~assets/img/portfolio-example-05.jpg" border="0" alt="">
                        </div>
                        <div class="mdl-cell mdl-cell--6-col">
                            <img class="article-image" src="~assets/img/portfolio-example-06.jpg" border="0" alt="">
                        </div>
                        <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                            <p>
                                Excepteur reprehenderit sint exercitation ipsum consequat qui sit id velit elit. Velit anim eiusmod labore sit amet. Voluptate voluptate irure occaecat deserunt incididunt esse in. Sunt velit aliquip sunt elit ex nulla reprehenderit qui ut eiusmod ipsum do. Duis veniam reprehenderit laborum occaecat id proident nulla veniam. Duis enim deserunt voluptate aute veniam sint pariatur exercitation. Irure mollit est sit labore est deserunt pariatur duis aute laboris cupidatat. Consectetur consequat esse est sit veniam adipisicing ipsum enim irure.
                            </p>
                        </div>
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

//        async asyncData () {
//            let { data } = await axios.get('/api/blogs')
//            return { blogs: data }
//        },

        methods:{

        }
    }
</script>
