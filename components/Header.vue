<script>

    export default {

        data () {
            return {
                title: 'header'
            }
        }
    }
</script>

<template>
    <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
        <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div class="portfolio-logo"></div>
                    <span class="mdl-layout__title">Simple portfolio website</span>
                </span>
        </div>
        <div class="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <nav class="mdl-navigation mdl-typography--body-1-force-preferred-font">
                <a class="mdl-navigation__link" href="index.html">Portfolio</a>
                <a class="mdl-navigation__link" href="blog.html">Blog</a>
                <a class="mdl-navigation__link" href="about.html">About</a>
                <a class="mdl-navigation__link" href="contact.html">Contact</a>
            </nav>
        </div>
    </header>
</template>



<style>

</style>
