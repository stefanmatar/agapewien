<template> 
<section id="know"> 
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  <div class="knowc container-fluid"> 
  <div class="row"> 
      <div class="col-12 know-header">
          <div class="bg bg-center">
            <h2>Know Jesus - Know Peace</h2>
            <p class="paragraph-faded">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
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
.container{ 
  margin-bottom: 1em; 
  margin-top: 1em; 
} 
.bg { 
    color: #FFFFFF; 
    padding: 250px; 
} 
.knowc { 
    background-image: url('/static/Images/Header Main.jpg');
    height: 100%;
    width: 100%; 
    padding-bottom: 3em;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
}
#know p{
  padding-left: 10em;
  padding-right: 10em;
}

</style> 