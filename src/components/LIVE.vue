<template> 
  <section id="live">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> 
    <div class="container"> 
      <div class="row"> 
        <div class="col-lg-6 live-side-image">
          <div class="bg bg-center"> 
            <div class="container"> 
              <div class="btn btn-light btn-rounded"> 
                <i class="fas fa-play"></i> 
               </div> 
            </div> 
          </div> 
        </div>
        <div class="col-lg-6 live-side-text"> 
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
  margin-bottom: 20px; 
  font-size: 15px; 
  line-height: 1.5; 
  text-align: left; 
} 
#live { 
  background-color: #ad1818; 
  padding: 8em; 
} 
#live p, 
#live h2 { 
  color: white; 
}
.live-side-image{
    background-image: url('/static/Images/Live2.jpg');
}
</style> 