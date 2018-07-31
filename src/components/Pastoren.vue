<template>
  <section id="pastoren">
    <div class="container">
      <div class="row">
        <div class= "col-12">
        <h1>Pastoren</h1>
        <h3><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small></h3>
        </div>
        <div class="images">
        <img src="static/Images/Pesel.jpg" class="rounded-0 float-left" alt="Agape">
        <img src="static/Images/Peter.jpg" class="rounded-0 float-right" alt="Agape">
        <img src="static/Images/Onisor.JPG" class="rounded-0 float-center" alt="Agape">      
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pastoren'
}
</script>

<style>
#pastoren{
    padding: 8em;
    margin: 1em;
}
.rounded-0 {
    width: 30%;
    height: 100%; 
}
#pastoren h3{
    margin-bottom: 3em;
}
</style>
