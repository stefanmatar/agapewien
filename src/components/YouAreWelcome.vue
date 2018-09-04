<template>
  <section id="you">
    <div class="container">
      <div class="row">
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
          <div class="btn btn-danger btn-rounded">
            MEHR DAZU
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'YouAreWelcome'
  }
</script>

<style>
  .you-side-text {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
  }
  
  #you {
    background-color: #2c2c2c;
    padding: 8em 0;
  }
  
  #you hr,
  #you p,
  #you h1,
  #you h2,
  #you h3 {
    color: white;
  }
  
  .you-header {
    text-align: left;
  }

</style>
