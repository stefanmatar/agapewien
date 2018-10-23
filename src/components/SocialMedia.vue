<template>
  <section id="social-media" class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center red">Mobil unterwegs?</h2>
          <h3 class="pastors-heading">Agape Social</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-md-12 social-media-images">
          <img src="static/images/social_media/1.png" class="social-media-phone">
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="list">
            <div class="list-item">
              <i class="social fas fa-brush red"></i>
              <div class="list-item-text">
                <h5 class="text-left font-weight-bold list-item-title">
                  Täglich neue Designs
                </h5>
                <p class="text-left text-muted">
                  Damit der Seele sowie dem Auge unsere Bilder gefällt.
                </p>
              </div>
            </div>
            <div class="list-item">
              <i class="social fas fa-binoculars red"></i>
              <div class="list-item-text">
                <h5 class="text-left font-weight-bold list-item-title">
                  Entdecke die Schrift neu
                </h5>
                <p class="text-left text-muted">
                  Das Wort Gottes ist vielfältig und bunt.
                </p>
              </div>
            </div>
            <div class="list-item">
              <i class="social fas fa-book red"></i>
              <div class="list-item-text">
                <h5 class="text-left font-weight-bold list-item-title">
                  Botschaften aus Gottes Wort
                </h5>
                <p class="text-left text-muted">
                  Ungefiltert & schön präsentiert.
                </p>
              </div>
            </div>
            <div class="list-item">
              <i class="social fas fa-couch red"></i>
              <div class="list-item-text">
                <h5 class="text-left font-weight-bold list-item-title">
                  Bequem vom Handy aus
                </h5>
                <p class="text-left text-muted">
                  Wo auch immer Du bist,<br>wir bringen Dir Hoffnung in den Alltag.
                </p>
              </div>
            </div>
          </div>
          <div class="list-item social-media-button">
            <a class="btn btn-rounded red-bg text-white follow-btn" href="https://www.instagram.com/agapewien/">
              Folge uns auf Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SocialMedia'
  }
</script>

<style>
  .social-media-phone {
    max-width: 300px;
    width: 100%;
  }

  .social {
    float: left;
    font-size: 30px;
    width: 58px;
    height: 58px;
    padding-left: 20px;
  }

  .list {
    margin: 48px 0;
  }

  .list-item {
    float: left;
  }

  .list-item-text {
    padding: 0 0 16px 96px;
    font-size: 14px;
  }

  .list-item-title {
    font-size: 16px;
  }

  .social-media-button {
    float: left;
    padding: 42px 0 0 20px;
  }
</style>
