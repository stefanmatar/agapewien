<template>
  <section id="header">
    <div class="header container-fluid">
      <div class="row">
        <div class="col-sm-12 know-header">
          <div class="bg bg-center BackgroundHeader">
            <h2>Know Jesus - Know Peace</h2>
            <p class="paragraph-faded">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua.
            </p>
            <div class="container">
              <div class="btn btn-light btn-rounded">
                <i class="fas fa-play"></i> MEHR DAZU
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
    name: 'KnowJesus'
  }
</script>

<style>
  .BackgroundHeader {
    color: #FFFFFF;
    padding: 250px;
  }
  .header {
    background-image: url('/static/Images/Header Main.jpg');
    height: 100%;
    width: 100%;
    padding-bottom: 120px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
  }
  #header p {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1100px) {
    .header{
      background-size: 1080px;
    }
  }
  @media screen and (max-width: 800px) {
    .header{
      background-size: 1080px;
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
</style>
