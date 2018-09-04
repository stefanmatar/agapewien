<template>
  <section id="agapesocial">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 agapesocial-header">
          <h3>AGAPE - SOCIAL</h3>
          <h2>Du willst auch unter der Woche Agape?</h2>
        </div>
        <div class="col-lg-5 agapesocial-side-text">
          <p class="text-faded">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'AgapeSocial'
  }
</script>

<style>
  .agapesocial-side-text {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
  }
  
  #agapesocial {
    background-color: #ad1818;
    padding: 8em 0;
  }
  
  #agapesocial h3 {
    color: rgba(0, 0, 0, 0.733);
  }
  
  #agapesocial h2 {
    color: white;
  }
  
  #agapesocial p {
    color: rgba(0, 0, 0, 0.733);
    padding-top: 1.5em;
  }
  
  .agapesocial-header {
    text-align: left;
  }
  
  .mapouter {
    text-align: right;
    height: 664px;
    width: 1080px;
  }
  
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 664px;
    width: 1080px;
  }
</style>
