<template>
  <section id="ThisIsAgape">
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
            <div class="column Row1">
              <img src="static/Images/Agape11.jpg" style="width:300px">
              <img src="static/Images/Agape12.jpg" style="width:300px">
              <img src="static/Images/Agape5.jpg" style="width:300px">
              <img src="static/Images/Agape8.jpg" style="width:300px">
            </div>
            <div class="column Row2">
              <img src="static/Images/Agape1.jpg" style="width:300px">
              <img src="static/Images/Agape6.jpg" style="width:300px">
              <img src="static/Images/Agape2.jpg" style="width:300px">
            </div>
            <div class="column Row3">
              <img src="static/Images/Agape9.jpg" style="width:300px">
              <img src="static/Images/Agape4.jpg" style="width:300px">
              <img src="static/Images/Agape3.jpg" style="width:300px">
              <img src="static/Images/Agape10.jpg" style="width:300px">
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
  #ThisIsAgape {
    width: 100%;
    padding: 4em 18em 4em 18em;
  }
  #ThisIsUs h3 {
    margin-bottom: 10px;
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
  @media screen and (max-width: 1000px) {
  #ThisIsAgape{
    padding: 0;
  }
  .Row1,.Row3{
    display: none;
  }
  .column{
    max-width: 100%;
  }
  }
</style>
