<template>
    <div class="container">
        <router-link to="/Search"><button class="search"><img src="/src/components/icons/lens white.svg">Поиск героя</button></router-link>
        <button class="filter"><img src="/src/components/icons/favourites.svg">Фильтр</button>
        <h2>СТЕНА ПАМЯТИ</h2>
    </div>
    
</template>

<script>

</script>

<style scoped>
    .container{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .search{
        height: 69px;
        width: 280px;
        background-color: #CF3337;
        font-size: 18px;
        border: 0;
        text-decoration: none;
        color: #FFFFFF;
    }

    .filter{
        height: 69px;
        width: 280px;
        background: none;
        color: #514F4D;
        font-size: 18px;
        border: 1px solid #514F4D;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        text-transform: uppercase;
        text-decoration: none;
    }

    .search img{
        height: 25px;
        width: 25px;
        margin-right: 15px;
    }

    .filter img{
        height: 25px;
        width: 27px;
        margin-right: 15px;
    }

    h2{
        font-size: 40px;
        color: #514F4D;
    }
</style>