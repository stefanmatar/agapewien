<template>
  <section id="welcome">
    <div class="container">
      <div class="col-12">
        <h1>Social Media</h1>
        <h4>
          <small class="text-muted col-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </small>
        </h4>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-12 row social-media-images">
          <div class="col-md-4 col-xs-12">
            <img src="static/images/social_media/3.png" class="social-media-image">
          </div>
          <div class="col-md-4 col-xs-12">
            <img src="static/images/social_media/2.png" class="social-media-image">
          </div>
          <div class="col-md-4 col-xs-12">
            <img src="static/images/social_media/1.png" class="social-media-image">
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <div class="list">
            <div class="list-item">
              <i class="social fas fa-brush red"></i>
              <div class="list-item-text">
                <h5 class="text-left font-weight-bold" style="font-size:16px">Täglich neue Designs</h5>
                <p class="text-left text-muted">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
            <div class="list-item">
              <i class="social fas fa-binoculars"></i>
              <div class="list-item-text">
                <h5 class="text-left font-weight-bold" style="font-size:16px">Entdecke die Schrift neu</h5>
                <p class="text-left text-muted">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
            <div class="list-item">
              <i class="social fas fa-book"></i>
              <div class="list-item-text">
                <h5 class="text-left font-weight-bold" style="font-size:16px">Botschaften aus Gottes Wort</h5>
                <p class="text-left text-muted">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
            <div class="list-item">
              <i class="social fas fa-couch"></i>
              <div class="list-item-text">
                <h5 class="text-left font-weight-bold" style="font-size:16px">Bequem vom Handy aus</h5>
                <p class="text-left text-muted">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style>
  #welcome {
    padding: 4em 0 0 0;
    margin-left: 0;
  }
  
  #welcome p {
    margin: 0;
    padding-bottom: 1em;
  }
  
  .social-media-image {
    margin: 0.5em;
    height: 400px;
  }
  
  #welcoem h5 {
    margin: 0;
  }
  
  .social {
    float: left;
    font-size: 30px;
    width: 58px;
    height: 58px;
    margin: 2px 0 0 22px; /*oben unten rechts links */
  }
  
  .list-item-text {
    padding-left: 6em;
    padding-bottom: 1em;
    font-size: 14px;
  }
  
  .list {
    padding-left: 10em;
    padding-top: 4em;
  }
  
  @media screen and (max-width: 1200px) {
    .image1,
    .image2 {
      display: none;
    }
    
    .image3 {
      float: right;
      margin: 0;
      padding: 0;
    }
    
    .list {
      margin: 0;
      padding: 2.5em 0 0 0;
    }
  }
</style>
