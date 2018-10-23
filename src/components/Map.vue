<template>
  <div class="map-container">
    <iframe class="map" src="https://maps.google.de/maps?hl=de&q=Agape+Wien%20%20Schlechtastraße+5%20Wien&t=&z=14&ie=utf8&iwloc=b&output=embed" frameborder="0" ></iframe>
  </div>
</template>

<script>
export default {
  name: 'Map'
}
</script>

<style>
  .map-container {
    height: 400px;
  }
  .map {
    height: 100%;
    width: 100%;
  }
</style>
