<template>
        <section class="search-page"> 
            <header >
                <HeaderBar another />
            </header>

            <main>
                <h2>ПОИСК ПО БАЗЕ ГЕРОЕВ</h2>
                <div class="container"> 
                    <input type="search" name="" id="" placeholder="Кого вы ищите?">
                    <button type="submit"><img src="/src/components/icons/lens white.svg"></button>
                </div>
                <div class="bottom">
                <router-link to="/"><button class="main">НА ГЛАВНУЮ</button></router-link>
                </div>
            </main>
        </section>
</template>

<script>
import HeaderBar from './HeaderBar.vue'

export default{
  components: { HeaderBar }
}
</script>

<style scoped>
    .search-page {
        background: linear-gradient(180deg, rgba(50, 50, 50, 1) 0%, rgba(0, 0, 0, 0.3) 100%);
        margin-top: -80px;
        margin-left: -80px;
        padding: 80px;
        min-height: 100vh;
    }
    
    h2{
        margin-top: 125px;
        margin-bottom: 50px;
        font-size: 40px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container input{
        width: 872px;
        height: 80px;
        background: none;
        border: none;
        border-bottom: 2px solid #F2E5CC;
        font-size: 32px;
        padding-left: 30px;
        outline: none;
    }

    .container button{
        background: none;
        border: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        position: relative;
        right: 65px;
    }

    .main{
        margin-top: 100px;
        background: none;
        cursor: pointer;
        border: 1px solid #FFFFFF;
        width: 576px;
        height: 69px;
        color: #FFFFFF;
        font-size: 18px;
    }

    .bottom{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    input::-webkit-search-cancel-button{
        display: none;
    }

    ::-webkit-input-placeholder{
        color:    #FFFFFF;
        font-style: italic;
    }
</style>