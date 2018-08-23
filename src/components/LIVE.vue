<template> 
  <section id="live">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> 
    <div class="container"> 
      <div class="row">
        <div class="col-5 live-side-image"> 
        <div class="btn btn-light btn-rounded">  
        <i class="fas fa-play"></i>
        </div>  
        </div>
        <div class="col-7 live-side-text"> 
        <h3>GOTTESDIENST</h3> 
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
  padding-left: 5em;
} 
#live { 
  background-color: #ad1818; 
  padding-top: 4em;
  padding-bottom: 4em;  
}  
#live h2 { 
  color: white; 
}
#live h3{
  color: black;
}
.live-side-image{
    background-image: url('/static/Images/Live2.jpg');
    height: 250px;
    padding-top: 107px;
    padding-left: 41.5px;
    background-repeat: no-repeat;
    background-position:right;
    background-size: 800px;
}
</style> 