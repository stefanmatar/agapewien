<template> 
  <section id="live">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> 
    <div class="container"> 
      <div class="row">
              <div class="col-6 live-side-image"> 
            <div class="container1">
                <div class="bg bg-center">
                  <div class="btn btn-light btn-rounded">  
                    <i class="fas fa-play"></i>
                  </div>
                </div>
              </div>  
            </div>
        <div class="col-5 live-side-text"> 
          <p class="text-dark">GOTTESDIENST</p> 
          <h2>JEDEN SONNTAG</h2> 
          <p class="paragraph-faded"> 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
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
  name: 'LIVE' 
} 
</script> 
 
<style> 
.live-side-text {  
  line-height: 1.5; 
  text-align: left; 
  padding-top: 10em;
} 
#live { 
  background-color: #ad1818; 
  padding: 2em ; 
} 
#live p, 
#live h2 { 
  color: white; 
}
.container1{
    background-image: url('/static/Images/Live2.jpg');
    background-position: center;  
    background-repeat: no-repeat;
    background-size: 100%;
    width: 550px;
}
</style> 