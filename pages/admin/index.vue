<template>
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <main class="mdl-layout__content">
            <!-- Simple Textfield -->
            <div class="mdl-grid portfolio-max-width">
                <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
                    <div class="mdl-card__title">
                        <h2 class="mdl-card__title-text">Admin template</h2>
                    </div>
                    <div class="mdl-cell mdl-cell--6-col mdl-card__supporting-text no-padding">

                        <!-- Simple Textfield -->
                        <form action="#">
                            <div class="mdl-textfield mdl-js-textfield">
                                <input class="mdl-textfield__input" type="text" id="sample1">
                                <label class="mdl-textfield__label" for="sample1">Text...</label>
                            </div>
                        </form>

                        <!-- Numeric Textfield -->
                        <form action="#">
                            <div class="mdl-textfield mdl-js-textfield">
                                <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2">
                                <label class="mdl-textfield__label" for="sample2">Number...</label>
                                <span class="mdl-textfield__error">Input is not a number!</span>
                            </div>
                        </form>

                        <!-- file input -->
                        <form action="#">
                            <div class="mdl-textfield mdl-js-textfield mdl-textfield--file">
                                <input v-model="filename" class="mdl-textfield__input" placeholder="No file chosen" type="text" id="TEXT_ID" readonly />
                                <div class="mdl-button mdl-button--icon mdl-button--file">
                                    <i class="material-icons">attach_file</i>
                                    <input  type="file" name="NAME" id="ID" @change="upload"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>

</template>

<script>
//    onchange="document.getElementById('TEXT_ID').value=this.files[0].name;"
    import MyHeader from '~/components/Header.vue'
    import MyHdrawer from '~/components/Hdrawer.vue'
    import MyFooter from '~/components/Footer.vue'
    import axios from '~/plugins/axios'

    export default {
        data(){
            return{
                filename:''
            }
        },
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
            upload (event){
                let vm = this
                let file = event.target.files[0].name
                console.log(file)
                vm.filename = file
            }
        }
    }
</script>

<style scoped>
    .mdl-button--file input {
        cursor: pointer;
        height: 100%;
        right: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        width: 300px;
        z-index: 4;
    }
    .mdl-textfield--file .mdl-textfield__input {
        box-sizing: border-box;
        width: calc(100% - 32px);
    }
    .mdl-textfield--file .mdl-button--file {
        right: 0;
    }
</style>
