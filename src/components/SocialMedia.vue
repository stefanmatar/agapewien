<template>
  <section id="welcome">
    <div class="container">
      <div class="col-12">
        <h1>Welcome to Agape <span style="color:#ad1818">Social</span></h1>
        <h4>
          <small class="text-muted col-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
          </small>
        </h4>
      </div>
      <div class="row">
        <div class="col-2">
          <img src="static/Images/Insta2.jpeg" class="image1" style="width:190px">
        </div>
        <div class="col-2">
          <img src="static/Images/Insta1.jpeg" class="image2" style="width:190px">
        </div>
        <div class="col-2">
          <img src="static/Images/Insta3.png" class="image3" style="width:250px">
        </div>
        <div class="col-6">
          <div class="list">
            <div class="list-item">
              <i class="social fas fa-brush"></i>
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
  export default {
    name: 'WelcomeToAgapeSocial'
  }
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
  #welcoem h5 {
    margin: 0;
  }
  .social {
    float: left;
    color: #ad1818;
    font-size: 30px;
    width: 58px;
    height: 58px;
    margin: 2px 0 0 22px; /*oben unten rechts links */
  }
  .image1 {
    padding-top: 4em;
    padding-right: 0.5em;
    margin-left: 3em;
  }
  .image2 {
    padding-top: 4em;
    padding-left: 0.5em;
    margin-left: 3em;
  }
  .image3 {
    margin-left: 3em;
  }
  .list-item-text {
    padding-left: 6em;
    padding-bottom: 1em;
    font-size:14px;
  }
  .list {
    padding-left: 10em;
    padding-top: 4em;
  }
  @media screen and (max-width: 1200px) {
  .image1,
  .image2{
    display:none;
  }
  .image3{
    float: right;
    margin:0;
    padding:0;
  }
  .list{
    margin:0;
    padding:2.5em 0 0 0;
  }
  }
</style>
