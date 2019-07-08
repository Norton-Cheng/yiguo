<template>
    <div>
        <head_login :text="text"></head_login>
        <body_register></body_register>
        <footer1></footer1>
    </div>
</template>

<script>
import head_login from "./common/head_login.vue";
import body_register from "./common/body_register";
import footer1 from "./common/footer";
export default {
    data(){
        return {
            text:"注册"
        }
    },
    components:{
        head_login,
        body_register,
        footer1
    }
}
</script>

<style scoped>

</style>
