<template>
    <div>
        <div class="head-app">
            <h2 class="head-text">{{ headText }}</h2>
            <div class="search-box container ">
                <input type="text" :placeholder="inputPlaceholder" v-model="inputValue">
                <button @click="fetchfun(inputValue)">
                    <img src="./../assets/icon-arrow.svg" alt="icon-arrow">
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "HeadApp",
    props: ["fetchfun"],
    data(){
        return {
            headText: "IP Address Tracker",
            inputPlaceholder: "Search for any IP address or domain",
            inputValue: "",
        }
    }
}
</script>
<style scoped>
.head-app{
    background-image: url("./../assets/pattern-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 39vh;
}
.head-text{
    color: white;
    text-align: center;
    padding-top: 34px;
    padding-bottom: 34px;
}
.search-box{
    position: relative;
    width: 561px;
    height: 62px;
    overflow: hidden;
    border-radius: 8px;
    margin: auto;
}
.search-box input {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    border-radius: 8px;
    padding: 15px;
}
.search-box input:focus{
    border: none;
    outline: none;
}
.search-box button{
    display: block;
    border: none;
    outline: none;
    background-color: var(--color1);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    width: 63px;
    height: 63px;
}
.search-box button:focus{
    border: none;
    outline: none;
}
@media screen and (max-width: 990px){
    .head-text{
        padding-top: 20px;
        padding-bottom: 20px;
        margin: 0;
    }
    .search-box{
       min-width: 86%;
       max-width: 86%;
       padding: 0;
    }
    .search-box input{
        font-size: 0.8em;
    }
}
@media screen and (min-height: 811.987px){
    .head-text{
        padding-top: 30px;
        padding-bottom: 30px;
        margin: 0;
    }
}
</style>