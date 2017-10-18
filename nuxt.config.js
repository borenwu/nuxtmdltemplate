module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],

        // script: [
        //     { src: 'assets/js/material.min.js' }
        // ],


        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto'},
            {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ],
    },

    /*
    ** plugins
    */
    plugins: [
        { src: '~plugins/material', ssr: false }
    ],

    /*
     ** Global CSS
     */
    css: ['~/assets/css/material.min.css', '~/assets/css/main.css'],
    /*
     ** Add axios globally
     */
    build: {
        vendor: ['axios'],
        /*
         ** Run ESLINT on save
         */
        // extend (config, ctx) {
        //     if (ctx.isClient) {
        //         config.module.rules.push({
        //             enforce: 'pre',
        //             test: /\.(js|vue)$/,
        //             loader: 'eslint-loader',
        //             exclude: /(node_modules)/
        //         })
        //     }
        // }
    }
}
