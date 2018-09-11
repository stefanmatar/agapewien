<template>
  <section id="live">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 live-side-image">
          <div class="ButtonCenter">
            <div class="btn btn-light btn-rounded">
              <i class="fas fa-play"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-5 live-side-text">
          <h3>GOTTESDIENST</h3>
          <h2>JEDEN SONNTAG</h2>
          <p class="paragraph-faded">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua.
          </p>
          <div class="btn btn-light btn-rounded">
            <i class="fas fa-play"></i> LIVE
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Live'
  }
</script>

<style>
  #live {
    background-color: #ad1818;
    padding: 8em 0;
  }
  #live h2 {
    color: white;
  }
  #live h3 {
    color: black;
  }
  .live-side-text {
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.5;
    text-align: left;
  }
  .live-side-image {
    width: 100px;
    height: 250px;
    position:relative;
    background: url('/static/images/Live2.jpg') 0 0 no-repeat / cover;
  }
  .ButtonCenter{
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
  }
  @media screen and (max-width: 1300px) {
  .live-side-image{
    width:500px;
    margin:0;
    padding: 0;
  }
  @media screen and (max-width: 992px){
  .live-side-text{
    margin:0;
    padding: 2em 0 0 0;
  }
  }
}
</style>
