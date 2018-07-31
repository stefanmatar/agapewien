<template>
  <section id="who">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 who-header">
          <h4>O biserica pasionata de Dumnezeu</h4>
          <h2>Cine suntem?</h2>
        </div>
        <div class="col-lg-5 who-side-text">
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <p class="paragraph-faded">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <div class="btn btn-danger btn-rounded">
           <i class="fas fa-play"></i> MAI MULTE
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhoWeAre'
}
</script>

<style>
.who-side-text {
  margin-bottom: 20px;
  font-size: 16px;
  line-height: 1.5;
  text-align: left;
}
#who {
  background-color: #2c2c2c;
  padding: 8em 0;
}

#who hr,
#who p,
#who h1,
#who h2,
#who h3 {
  color: white;
}

.who-header {
  text-align: left;
}

</style>
