<template>
  <section id="live" class="section red-bg text-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 live-image text-left">
        <iframe src="https://www.youtube.com/embed/live_stream?channel=UCxBofq4UIEiwXEgp3yerJRQ" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="col-lg-6 col-sm-12 live-text">
          <h2 class="text-left">Jeden Sonntag morgen & abend</h2>
          <h3 class="text-left">Gottesdienst online sehen</h3>
          <p class="section-text-heading live-times">
            9:30-12:00<br>
            17:30-19:00
          </p>
          <div class="btn btn-light btn-rounded section-btn-primary">
            Archiv bald verfügbar
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
  #live iframe{
    width:480px;
    max-width: 100%;
    height:243px;
  }
  .live-image{
    padding:0px;
  }
  .live-text{
    padding-top: 33px;
  }
  .live-times {
    letter-spacing: 2px;
  }

</style>
