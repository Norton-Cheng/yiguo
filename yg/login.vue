<template>
    <div>
        <head_login></head_login>
        <body_login></body_login>
        <footer1></footer1>
    </div>
</template>

<script>
import head_login from "./common/head_login.vue"
import body_login from "./common/body_login.vue"
import footer1 from "./common/footer.vue"
export default {
    data(){
        return {
            
        }
    },
    components:{
        head_login,
        body_login,
        footer1
    }
}
</script>

<style>
    
</style>
