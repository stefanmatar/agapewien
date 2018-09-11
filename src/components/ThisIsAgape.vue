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
      </div>
      <div class="row">
        <div class="column">
            <img src="static/Images/Agape11.jpg" style="width:100%">
            <img src="static/Images/Agape12.jpg" style="width:100%">
            <img src="static/Images/Agape5.jpg" style="width:100%">
            <img src="static/Images/Agape8.jpg" style="width:100%">
        </div>
        <div class="column">
          <img src="static/Images/Agape1.jpg" style="width:100%">
          <img src="static/Images/Agape6.jpg" style="width:100%">
          <img src="static/Images/Agape2.jpg" style="width:100%">
        </div>
        <div class="column">
        <img src="static/Images/Agape9.jpg" style="width:100%">
        <img src="static/Images/Agape4.jpg" style="width:100%">
        <img src="static/Images/Agape3.jpg" style="width:100%">
        <img src="static/Images/Agape10.jpg" style="width:100%">
      </div>
        <div class="column">
          <img src="static/Images/Agape9.jpg" style="width:100%">
          <img src="static/Images/Agape4.jpg" style="width:100%">
          <img src="static/Images/Agape3.jpg" style="width:100%">
          <img src="static/Images/Agape10.jpg" style="width:100%">
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
  .column {
    box-sizing: border-box;
  }
  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
  }

  /* Create four equal columns that sits next to each other */
  .column {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
  }

  .column img {
    margin-top: 8px;
    vertical-align: middle;
  }
  /* Responsive layout - makes a two column-layout instead of four columns */
  @media screen and (max-width: 1200px) {
    .column {
      -ms-flex: 50%;
      flex: 50%;
      max-width: 50%;
    }
  }
  /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
  @media screen and (max-width: 1000px) {
    .column {
      -ms-flex: 100%;
      flex: 100%;
      max-width: 100%;
    }
  }
</style>
