<template>
    <div class="w-100 ">
        <div class="info-sec container w-lg-75 shadow">
            <div class="d-flex justify-content-lg-between items-container flex-column flex-lg-row justify-content-center">
                <div class="item text-center text-lg-left">
                <span>{{ itemHeads[0] }}</span>
                <h3>{{ ipAdress }}</h3>
            </div>
            <div class="item text-center text-lg-left ">
                <span>{{ itemHeads[1] }}</span>
                <h3>{{ myRegion }}, {{ country }} <br/>
                   <span>{{ postalCode }}</span>
                </h3>
            </div>
            <div class="item text-center text-lg-left ">
                <span>{{ itemHeads[2] }}</span>
                <h3>UTC{{ timezone }}</h3>
            </div>
            <div class="item text-center text-lg-left " style="border:none">
                <span>{{ itemHeads[3] }}</span>
                <h3>{{ isp }}</h3>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "InfoSec",
    props: ["ipAdress","myRegion","country","postalCode","timezone","isp"],
    data () {
        return{
            itemHeads: ["IP Address","Location","TimeZone","ISP"],
        }
    },
}
</script>
<style scoped>
    .info-sec{
        background-color: white;
        border-radius: 10px;
    }
    .items-container{
        padding: 38px;
    }
    .item{
        padding-left: 20px;
        width: 25%;
        border: 1px solid transparent;
        
    }
    .item >span{
        color: var(--color2);
        padding-bottom: 21px;
        text-transform: uppercase;
        font-size: 0.8em;
       
    }
    .item >h3{
        color: var(--color1);
        font-size: 1.1em;
    }
    @media screen and (min-width: 990px){
        .item{
            border-right-color: var(--color2);
        }
        
    }
    @media screen and (max-width: 990px){
        .info-sec{
            min-width: 86%;
            max-width: 86%;
        }
        .items-container{
        padding: 8px;
        }
        .item{
            min-width: 100%;
            padding: 0;
            margin: 0;
        }
        .item >h3{
        font-size: 0.8em;
    }
    .item >span{
        font-size: 0.5em;
    }
    }
</style>