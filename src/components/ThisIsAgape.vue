<template>
  <section id="this-is-agape">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>Das sind wir</h1>
          <h3>
            <small class="text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor.
            </small>
          </h3>
        </div>
        <div class="row">
          <div class="column row1">
            <img src="static/images/people/1.jpg" class="people-image">
            <img src="static/images/people/2.jpg" class="people-image">
            <img src="static/images/people/3.jpg" class="people-image">
            <img src="static/images/people/4.jpg" class="people-image">
          </div>
          <div class="column row2">
            <img src="static/images/people/5.jpg" class="people-image">
            <img src="static/images/people/6.jpg" class="people-image">
            <img src="static/images/people/7.jpg" class="people-image">
            <img src="static/images/people/8.jpg" class="people-image">
          </div>
          <div class="column row3">
            <img src="static/images/people/9.jpg" class="people-image">
            <img src="static/images/people/10.jpg" class="people-image">
            <img src="static/images/people/11.jpg" class="people-image">
            <img src="static/images/people/12.jpg" class="people-image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ThisIsAgape'
  }
</script>

<style>
  #this-is-agape {
    padding: 4em 18em 4em 18em;
  }
  
  #ThisIsUs h3 {
    margin-bottom: 10px;
  }
  
  .people-image {
    width: 300px;
    margin: 0.5em;
  }
  
  .column img {
    margin-top: 20px;
  }
  
  @media screen and (max-width: 1000px) {
    #this-is-agape {
      padding: 0;
    }
    
    .row1, .row3 {
      display: none;
    }
    
    .column {
      max-width: 100%;
    }
  }
</style>
