<template>
  <div id="app">
    <error-msg  id="myerror"/>
    <div class="head-container">
      <head-app :fetchfun="fetchIpAddress" />
    </div>
    <div class="control-position">
      <div class="info-sec-container w-100">
        <info-sec
          :ipAdress="geo.ip?geo.ip:''"
          :myRegion="geo.location?geo.location.region:''"
          :country="geo.location?geo.location.country:''"
          :postalCode="geo.location?geo.location.postalCode:''"
          :timezone="geo.location?geo.location.timezone:''"
          :isp="geo.isp"
        />
      </div>
      <div class="map-container">
        <Map :lat="geo.location?geo.location.lat:''" :lng="geo.location?geo.location.lng:''" />
      </div>
    </div>
  </div>
</template>

<script>
import ErrorMsg from './components/ErrorMsg.vue';
//==import my component==//
import HeadApp from "./components/HeadApp.vue";
import InfoSec from "./components/InfoSec.vue";
import Map from "./components/Map.vue";

export default {
  components: { HeadApp, Map, InfoSec, ErrorMsg },
  name: "App",
  data() {
    return {
      base_url: "https://geo.ipify.org/api/v1",
      api_key: "at_Wrr2MPExvyzX1fWJc1g00n6JiEb93",
      geo: {},
    };
  },
  methods: {
    fetchIpAddress(ip) {
      try{
      if(ip == ""){
        this.controlMessage("empty");
      }else{
        fetch(`${this.base_url}?ipAddress=${ip}&apiKey=${this.api_key}`)
        .then(this.responseFun, this.failCase)
        .then(this.SetResult)
      }
      }catch(rx){
        console.log(rx);
      }
    },
    SetResult(result) {
      if(result){
        this.geo = result;
      }
    },
    failCase() {
      console.log("your request fail");
    },
    responseFun(response) {
      try{
      if (response.ok) {
        return response.json();
      } else{
        this.controlMessage("wrong ip");
      }
      }catch(er){
        console.log(er);
      }
    },
    controlMessage(er){
        var myerror = document.getElementById("myerror");
        myerror.style.display="flex";
        var myerrorbox = document.getElementById("msg_con");
        if(er == "empty"){
          myerrorbox.innerHTML = `
          <p class="text-center">Ip Address can't be empty
            </p>
            <p class="text-center mb-2"></p>
        `
        }else if(er == "wrong ip"){
          myerrorbox.innerHTML = `
          <p class="text-center">Please, Enter a coorect ip address<br/>
                Such as : 192.212.174.101 or 8.8.8.8
            </p>
            <p class="text-center mb-2"></p>
        `
        }else{
          myerrorbox.innerHTML = `
          <p class="text-center">There is undefined error please refresh the page then try again
            </p>
            <p class="text-center mb-2"></p>
        `
        }
    }
  },
  mounted() {
    this.fetchIpAddress("191.121.117.103");
  },
};
</script>

<style>
.control-position {
  position: relative;
  padding: 0;
  width: 100vw;
}
.info-sec-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 990;
}
#myerror{
  display: none;
}
@media screen and (max-height: 680px){
  .info-sec-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 990;
}
}
@media screen and (min-height: 680px){
  .info-sec-container{
    display: block;
  }

}
</style>
