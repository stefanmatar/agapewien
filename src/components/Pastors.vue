<template>
  <section id="pastors">
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
        <div class="row">
          <div class="col-3">
            <div class="card">
              <img class="card-img-top" src="static/Images/Pesel.jpg" alt="agape">
                <div class="card-body">
                <h5>Stefan Pesel</h5>
                <p class="font-weight-light">Pastor</p>
                </div>
            </div>
           </div>
          <div class="col-3">
            <div class="card">
              <img class="card-img-top" src="static/Images/Peter.jpg" alt="agape">
                <div class="card-body">
                <h5>Samuel Peter</h5>
                <p class="font-weight-light">Pastor</p>
                </div>
            </div>
           </div>
          <div class="col-3">
            <div class="card">
              <img class="card-img-top" src="static/Images/Onisor.JPG" alt="agape">
                <div class="card-body">
                <h5>Nelu Onisor</h5>
                <p class="font-weight-light">Pastor</p>
                </div>
            </div>
           </div>
          <div class="col-3">
            <div class="card">
              <img class="card-img-top" src="static/Images/Pesel.jpg" alt="agape">
                <div class="card-body">
                <h5>Benjamin Lavu</h5>
                <p class="font-weight-light">Pastor</p>
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
  name: 'Pastors'
}
</script>

<style>
  #pastors{
    padding: 8em 0 0 0;
  }
  #pastors h5 {
    color: rgb(0, 0, 0);
  }
  .card-img-top{
    width: 100%;
    height: 185px;
  }
</style>
