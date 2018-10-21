<template>
  <section id="live" class="section red-bg text-white">
    <div class="container">
      <div class="row">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCxBofq4UIEiwXEgp3yerJRQ" frameborder="0" allowfullscreen></iframe>
        <div class="col-lg-6 col-sm-12">
          <h2 class="text-left">Jeden Sonntag morgen & abend</h2>
          <h3 class="text-left">Gottesdienst online sehen</h3>
          <p class="section-text-heading live-times">
            9:30-12:00<br>
            17:30-19:00
          </p>
          <div class="btn btn-light btn-rounded section-btn-primary">
            Archiv<i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
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
