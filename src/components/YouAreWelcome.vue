<template>
  <single-section id="you">
    <div class="col-lg-6 you-header">
      <h4>DU BIST WILLKOMMMEN</h4>
      <h2>Zum ersten Mal hier?</h2>
    </div>
    <div class="col-lg-5 you-side-text">
      <p class="paragraph-faded">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua.
      </p>
      <div class="btn btn-rounded btn-outline-light youButton">
        MEHR DAZU
      </div>
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
  #you {
    background-color: #2c2c2c;
    padding: 8em 0;
    color: white;
  }
  
  .you-side-text {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
  }
  
  .you-header {
    text-align: left;
  }
  
  .youButton {
    background: #ad1818;
  }
</style>
