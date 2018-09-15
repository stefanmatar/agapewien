<template>
  <section id="live" class="section red-bg text-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-sm-12 live-side-image">
          <div class="btn btn-light btn-rounded live-btn">
            <i class="fas fa-play"></i>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12">
          <h2 class="text-left">Jeden Sonntag morgen & abend</h2>
          <h3 class="text-left">Gottesdienst online sehen</h3>
          <p class="section-text-heading live-times">
            9:30-12:00<br>
            17:30-19:00
          </p>
          <div class="btn btn-light btn-rounded section-btn-primary">
            Ansehen
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
  .live-side-image {
    margin: 0 40px;
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
  
  .live-times {
    letter-spacing: 2px;
  }
</style>
