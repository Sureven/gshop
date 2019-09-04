<template>
    <div>
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.Ft"></FooterGuide>
    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  import {reqCategorys} from "./api"
    export default {
        name: "App",
         async mounted() {
          const result= await reqCategorys()
           console.log(result)
        },
        components: {
          FooterGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
