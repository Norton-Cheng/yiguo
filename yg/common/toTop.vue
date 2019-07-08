<template>
    <div>
        <p class="toTop" @click="top">
            <i class="el-icon-arrow-up"></i>
            <span>Top</span>
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        top(){
            var html=document.getElementsByTagName("html")[0];
            var toTop=setInterval(()=>{
                if(html.scrollTop>0){
                    html.scrollTop-=20;
                    // console.log(html.scrollTop);
                }else if(html.scrollTop==0){
                    clearInterval(toTop)
                }
            },1);
        }
    }
}
</script>

<style>
    div p.toTop{
        position:fixed;
        width:50px;
        height:50px;
        background-color:#f1f1f1;
        right: 50px;
        bottom:50px;
        text-align: center;
        border:1px solid #ccc;
        cursor:pointer;
    }
    div p.toTop:hover{
        color:#fff;
        background:#aaa;
    }
    .el-icon-arrow-up{
        font-size: 28px;
        display: block;
    }
</style>
