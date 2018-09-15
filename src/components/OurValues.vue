<template>
  <section id="values" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center red">Unsere Werte</h2>
          <h3>
            Eine Kirche,<br>die Gott im Mittelpunkt hat.
          </h3>
        </div>
        <div class="values col-lg-12">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-xs-1 value">
                <i class="fas fa-dove"></i>
                <p>Hoffnung</p>
              </div>
              <div class="col-lg-4 col-xs-1 value">
                <i class="fas fa-dove"></i>
                <p>Hoffnung</p>
              </div>
              <div class="col-lg-4 col-xs-1 value">
                <i class="fas fa-dove"></i>
                <p>Hoffnung</p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-xs-3 value">
                <i class="fas fa-dove"></i>
                <p>Hoffnung</p>
              </div>
              <div class="col-lg-4 col-xs-3 value">
                <i class="fas fa-dove"></i>
                <p>Hoffnung</p>
              </div>
              <div class="col-lg-4 col-xs-3 value">
                <i class="fas fa-dove"></i>
                <p>Hoffnung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'OurValues'
  }
</script>

<style>
  .values {
    margin-top: 60px;
  }
  
  .values p {
    font-family: Montserrat-Medium;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  
  .values i {
    font-size: 25px;
  }
  
  .values .value {
    padding: 30px;
  }

  .values .value:not(:first-child) {
    border-left: 1px solid lightgrey;
  }

  .values .container:first-child {
    border-bottom: 1px solid lightgrey;
  }
</style>
