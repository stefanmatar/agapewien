<template>
  <section id="pastoren">
    <div class="container">
      <div class="row">
        <div class= "col-12">
        <h1>Pastoren</h1>
        <h3><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small></h3>
        </div>

        <div class= "col-3">
        <figure>
        <img src="static/Images/Pesel.jpg" alt="agape" class="image" >
        <figcaption><h5>Stefan Pesel</h5></figcaption>
        <div class="font-weight-light">Pastor</div>
        </figure>
        </div>

        <div class= "col-3">
        <figure>
        <img src="static/Images/Peter.jpg" alt="agape" class="image">
        <figcaption><h5>Samuel Peter</h5></figcaption>
        <div class="font-weight-light">Pastor</div>
        </figure>
        </div>

        <div class= "col-3">
        <figure>
        <img src="static/Images/Onisor.JPG" alt="agape" class="image">
        <figcaption><h5>Nelu Onisor</h5></figcaption>
        <div class="font-weight-light">Pastor</div>
        </figure>
        </div>

        <div class= "col-3">
        <figure>
        <img src="static/Images/Pesel.jpg" alt="agape" class="image">
        <figcaption><h5>Benjamin Lavu</h5></figcaption>
        <div class="font-weight-light">Diakon</div>
        </figure> 
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
    padding: 4em;
    margin: 4em;
    padding-bottom: 12em;
}
.image {
    width: 270px;
    height: 185px;
}
#pastoren h5{
    margin-top: 0.5em;
    color: rgb(0, 0, 0);
}
#pastoren h3{
    margin-bottom: 2em;
}
</style>
