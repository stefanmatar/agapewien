<template> 
  <section id="live"> 
    <div class="container"> 
      <div class="row"> 
        <div class="col-lg-6 live-header"> 
         <img src="static/Images/Live2.jpg" alt="Agape" class="rounded">         
        </div> 
        <div class="col-lg-5 live-side-text"> 
            <p class="text-dark">GOTTESDIENST</p> 
            <h2>JEDEN SONNTAG</h2> 
            <p class="paragraph-faded"> 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            </p> 
            <div class="btn btn-light btn-rounded">  
                LIVE 
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
  padding: 8em 0; 
} 
 
#live p, 
#live h2 { 
  color: white; 
} 
 
.live-header { 
  text-align: left; 
} 
.rounded{ 
    width: 500px; 
    
} 
</style> 