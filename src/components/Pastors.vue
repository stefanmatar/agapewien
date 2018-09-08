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
              <div class="overlay border-left border-bottom border-right rounded-bottom">
              <h5>Stefan Pesel</h5>
              <p class="font-weight-light">Pastor</p>
              </div>
        </div>

        <div class="col-3 ImageHover1">
            <img src="static/Images/Peter.jpg" alt="agape" class="image">
              <div class="overlay border-left border-bottom border-right rounded-bottom">
              <h5>Samuel Peter</h5>
              <p class="font-weight-light">Pastor</p>
              </div>
        </div>
        
        <div class="col-3 ImageHover1">
            <img src="static/Images/Onisor.JPG" alt="agape" class="image">
              <div class="overlay border-left border-bottom border-right rounded-bottom">
              <h5>Nelu Onisor</h5>
              <p class="font-weight-light">Pastor</p>
              </div>
        </div>
        
        <div class="col-3 ImageHover1">
            <img src="static/Images/Onisor.JPG" alt="agape" class="image">
              <div class="overlay border-left border-bottom border-right rounded-bottom">
              <h5>Benjamin Lavu</h5>
              <p class="font-weight-light">Diakon</p>
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
    padding-bottom: 1em;
  }
.image{
  width: 265px;
  height: 190px;
}

  .ImageHover1:hover .overlay{
    opacity: 1;
  }
  
  #pastoren h5 {
    color: rgb(0, 0, 0);
    padding-top: 21px;
  }
  
  #pastoren h3 {
    margin-bottom: 10px;
  }

.overlay {
  position: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.25s ease;
  width: 265px;
  height: 100px;
}
.ImageHover1{
  padding-top: 2em;
}

</style>
