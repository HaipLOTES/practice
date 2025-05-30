<template>
    <div className="container">
        <button className="searce"><img src="/src/components/icons/lens white.svg">Поиск героя</button>
        <button className="filter"><img src="/src/components/icons/favourites.svg">Фильтр</button>
        <h2>СТЕНА ПАМЯТИ</h2>
    </div>
    
</template>

<script >

</script>

<style scoped>
    .container{
        display: flex;
        gap: 20px;
        align-items: center;
    }

    .searce{
        height: 69px;
        width: 280px;
        background-color: #CF3337;
        color: #FFFFFF;
        font-size: 18px;
        border: 0;
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
    }

    .searce img{
        height: 26.73px;
        width: 26.73px;
        margin-right: 15px;
    }

    .filter img{
        height: 25.5px;
        width: 27px;
        margin-right: 15px;
    }

    h2{
        font-size: 40px;
        color: #514F4D;
    }
</style>