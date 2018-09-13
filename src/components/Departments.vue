<template>
  <single-section id="agapesocial">
    <div class="col-lg-6 text-left">
      <h3 class="text-white">AGAPE - SOCIAL</h3>
      <h2>Du willst auch unter der Woche Agape?</h2>
    </div>
    <div class="col-lg-5 text-left">
      <p class="text-faded text-white">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </p>
    </div>
  </single-section>
</template>

<script>
  import SingleSection from '@/components/layout/SingleSection'
  
  export default {
    components: {
      SingleSection
    }
  }
</script>

<style>
  #agapesocial {
    background-color: #ad1818;
    padding: 8em 0;
  }
  
  #agapesocial h3 {
    color: rgba(0, 0, 0);
  }
  
  #agapesocial h2 {
    color: white;
  }
  
  #agapesocial p {
    color: rgb(0, 0, 0);
    margin-top: 25px;
  }
</style>
