<template>
  <section id="live" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 live-side-image">
          <div class="btn btn-light btn-rounded live-btn">
            <i class="fas fa-play"></i>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 text-left">
          <h3>GOTTESDIENST</h3>
          <h1 class="section-header">JEDEN SONNTAG</h1>
          <p class="paragraph-faded">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <div class="btn btn-light btn-rounded">
            <i class="fas fa-play live-btn-lg"></i>
            LIVE
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Live'
  }
</script>

<style>
  #live {
    background-color: #ad1818;
    padding: 8em 0;
  }
  
  #live h2 {
    color: white;
  }
  
  #live h3 {
    color: black;
  }
  
  .live-side-text {
    margin: 0 0 20px 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
  }
  
  .live-side-image {
    width: 100px;
    height: 250px;
    position: relative;
    background: url('/static/images/banner/live.jpg') 0 0 no-repeat / cover;
  }
  
  .live-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .live-btn-lg {
    margin-right: 1em;
  }
</style>
