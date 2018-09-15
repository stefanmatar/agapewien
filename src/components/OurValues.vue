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
                <i class="fas fa-heart"></i>
                <p>Glaube</p>
              </div>
              <div class="col-lg-4 col-xs-1 value">
                <i class="fas fa-church"></i>
                <p>Liebe</p>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-xs-3 value">
                <i class="fas fa-book-open"></i>
                <p>Wort</p>
              </div>
              <div class="col-lg-4 col-xs-3 value">
                <i class="fas fa-hands"></i>
                <p>Gebet</p>
              </div>
              <div class="col-lg-4 col-xs-3 value">
                <i class="fas fa-music"></i>
                <p>Lobpreis</p>
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
    margin-bottom: 25px
  }
  
  .values .value {
    padding: 80px;
  }

  .values .value:not(:first-child) {
    border-left: 1px solid lightgrey;
  }

  .values .container:first-child {
    border-bottom: 1px solid lightgrey;
  }
  
  @media all and (max-width: 800px) {
    .values * {
      border: none !important;
    }
  }
</style>
