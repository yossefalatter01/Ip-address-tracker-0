<template>
  <div>
    <div class="container-fluid p-0">
      <div id="map_container"></div>
    </div>
  </div>
</template>
<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
var map;
var myIcon;
export default {
  name: "Map",
  props: ["lat", "lng"],
  mounted() {
    map = L.map("map_container", { zoomControl: false });
    map.setView([`${this.lat}`, `${this.lng}`], 16.8);
    L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
      maxZoom: 20,
      zIndex: 908,
    }).addTo(map);
    myIcon = L.icon({
      iconUrl: require("./../assets/icon-location.svg"),
      iconSize: [49, 55],
    });
    L.marker([`${this.lat}`, `${this.lng}`], { icon: myIcon }).addTo(map);
  },
  watch: {
    lat() {
      map.setView([`${this.lat}`, `${this.lng}`], 17);
      L.marker([`${this.lat}`, `${this.lng}`], { icon: myIcon }).addTo(map);
    },
  },
};
</script>
<style scoped>
#map_container {
  width: 100vw;
  height: 61vh;
}
  </style>
