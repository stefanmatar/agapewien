<template>
  <section id="ThisIsUs">
    <div class="container">
      <div class="row">
        <div class= "col-12">
        <h1>Das sind wir</h1>
        <h3><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small></h3>
<div class="row"> 
  <div class="column">
    <img src="static/Images/Agape7.jpg" style="width:100%">
    <img src="static/Images/Agape12.jpg" style="width:100%">
    <img src="static/Images/Agape1.jpg" style="width:100%">
  </div>
  <div class="column">
    <img src="static/Images/Agape1.jpg" style="width:100%">
    <img src="static/Images/Agape2.jpg" style="width:100%">
    <img src="static/Images/Agape4.jpg" style="width:100%">
    <img src="static/Images/Agape8.jpg" style="width:100%">
  </div>
    <div class="column">
    <img src="static/Images/Agape9.jpg" style="width:100%">
    <img src="static/Images/Agape6.jpg" style="width:100%">
    <img src="static/Images/Agape3.jpg" style="width:100%">
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
#ThisIsUs h3{
    padding-bottom: 1em;
    padding-left: 16em;
    padding-right: 16em;
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
