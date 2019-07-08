<template>
    <div class="head">
        <div class="wrap">
            <div class="logo">
                <a @click="jump"><img src="../../assets/imgs/head/logo.png" alt=""></a>
                <span>{{text}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:{
        text:{type:String,default:"登录"}
    },
    methods:{
        jump(){
            this.$router.push("/index");
        }
    }
}
</script>

<style scoped>
    .head>.wrap>img{
        margin-top:20px;
    }
    .head>.wrap>.logo{
        position:relative;
        cursor: pointer;
    }
    .head>.wrap>.logo img{
        position:absolute;
        top:20px;
    }
    .head>.wrap>.logo span{
        position:absolute;
        color:#008842;
        font:28px/1 Microsoft YaHei;
        left:240px;
        top:25px;
    }
</style>

