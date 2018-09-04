<template>
  <section id="ThisIsUs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Das sind wir</h1>
          <h3>
            <small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor.
            </small>
          </h3>
          <div class="row">
            <div class="column">
              <img src="static/Images/Agape11.jpg" style="width:300px">
              <img src="static/Images/Agape12.jpg" style="width:300px">
              <img src="static/Images/Agape5.jpg" style="width:300px">
              <img src="static/Images/Agape8.jpg" style="width:300px">
            </div>
            <div class="column">
              <img src="static/Images/Agape1.jpg" style="width:300px">
              <img src="static/Images/Agape6.jpg" style="width:300px">
              <img src="static/Images/Agape2.jpg" style="width:300px">
            </div>
            <div class="column">
              <img src="static/Images/Agape9.jpg" style="width:300px">
              <img src="static/Images/Agape4.jpg" style="width:300px">
              <img src="static/Images/Agape3.jpg" style="width:300px">
              <img src="static/Images/Agape10.jpg" style="width:300px">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ThisIsUs'
  }
</script>

<style>
  #ThisIsUs {
    width: 100%;
    padding-bottom: 4em;
    padding-left: 14em;
    padding-right: 14em;
  }
  
  #ThisIsUs h3 {
    padding-bottom: 1em;
    padding-left: 8em;
    padding-right: 8em;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    
  }
  
  .column {
    -ms-flex: 33%;
    flex: 33%;
    max-width: 33%;
    padding: 10px;
    
  }
  
  .column img {
    margin-top: 20px;
  }
  
  @media screen and (max-width: 800px) {
    .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }
  
  @media screen and (max-width: 600px) {
    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }
</style>
