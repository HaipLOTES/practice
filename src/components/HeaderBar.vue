<template>
    <header :class="{ 'header-font-color': another }">
        <img src="/src/assets/logo.png" alt="">
        <div>
            <h1>Музей Боевой и Трудовой Славы </h1>
            <h2>город Александров</h2>
        </div>
    </header>
</template>

<script>
    export default {
    props: {
        another: {
            type: Boolean,
            default: false
            }
        }
    }
</script>

<style scoped>
    header{
        display: flex;
    }

    img{
        width: 86px;
        height: 180px;
        margin-right: 40px;
        position: relative;
        top: -30px;
    }

    h1{
        color: #2B2A29;
        font-size: 64px;
    }

    h2{
        color: #514F4D;
        font-size: 58px;
    }

    .header-font-color h1 {
        color: rgba(255, 255, 255, 1);
    }

    .header-font-color h2 {
        color: rgba(211, 211, 211, 1);
    }
</style>
