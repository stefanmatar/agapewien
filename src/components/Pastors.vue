<template>
  <section id="pastors" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center red">Leiterschaft</h2>
          <h3 class="pastors-heading">Pastoren</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <img src="static/images/pastors/pesel.jpg" alt="Pastor Pesel" class="image">
          <h5 class="pastors-name">Stefan Pesel</h5>
          <p class="font-weight-light">Pastor</p>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
          <img src="static/images/pastors/peter.jpg" alt="Pastor Peter" class="image">
          <h5 class="pastors-name">Samoel Peter</h5>
          <p class="font-weight-light">Pastor</p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <img src="static/images/pastors/onisor.jpg" alt="agape" class="image">
          <h5 class="pastors-name">Nelu Onisor</h5>
          <p class="font-weight-light">Pastor</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Pastors'
  }
</script>

<style>
  .image {
    object-fit: cover;
    width: 250px;
    height: 150px;
  }
  .pastors-name {
    margin-top: 1em;
  }
  .pastors-heading {
    margin-bottom: 80px;
  }
</style>
