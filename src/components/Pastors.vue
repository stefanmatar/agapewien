<template>
  <section id="pastoren">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Pastoren</h1>
          <h3>
            <small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </small>
          </h3>
        </div>

        <div class="col-3 ImageHover1">

            <img src="static/Images/Pesel.jpg" alt="agape" class="image">
              <div class="overlay">
              <div class="card">
              <div class="card-body">
              <h5 class="card-title">Stefan Pesel</h5>
              <p class="card-text font-weight-light">Pastor</p>
              </div>
              </div>
              </div>

        </div>

        <div class="col-3 ImageHover1">
            <img src="static/Images/Peter.jpg" alt="agape" class="image">
              <div class="overlay">
              <div class="card">
              <div class="card-body">
              <h5 class="card-title">Samuel Peter</h5>
              <p class="card-text font-weight-light">Pastor</p>
              </div>
              </div>
              </div>
        </div>
        
        <div class="col-3 ImageHover1">
            <img src="static/Images/Onisor.JPG" alt="agape" class="image">
              <div class="overlay">
              <div class="card">
              <div class="card-body">
              <h5 class="card-title">Nelu Onisor</h5>
              <p class="card-text font-weight-light">Pastor</p>
              </div>
              </div>
              </div>
        </div>
        
        <div class="col-3 ImageHover1">
            <img src="static/Images/Onisor.JPG" alt="agape" class="image">
              <div class="overlay">
              <div class="card">
              <div class="card-body">
              <h5 class="card-title">Benjamin Lavu</h5>
              <p class="card-text font-weight-light">Pastor</p>
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
    name: 'Pastoren'
  }
</script>

<style>
  #pastoren {
    padding: 8em;
    padding-bottom: 16em;
  }
.image{
  width: 265px;
  height: 190px;
}

  .ImageHover1:hover .overlay{
    opacity: 1;
  }
  
  #pastoren h5 {
    margin-top: 0.5em;
    color: rgb(0, 0, 0);
  }
  
  #pastoren h3 {
    margin-bottom: 2em;
  }

.overlay {
  position: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .1s ease;
  width: 265px;
  height: 190px;
}
</style>
