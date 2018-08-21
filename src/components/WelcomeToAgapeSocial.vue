<template>
    <section id="welcome">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous"> 
    <div class="container">
    <div class="col-12">
    <h1>Welcome to Agape <span style="color:#ad1818">Social</span></h1>
    <h4><small class="text-muted col-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</small></h4>
    </div>
    <div class="row">
        <div class="col-2">
        <img src="static/Images/Insta1.jpeg" class="image1"  style="width:120%">
        </div>
        <div class="col-2">
        <img src="static/Images/Insta2.jpeg" class="image2"  style="width:120%">    
        </div>
        <div class="col-2">
         <img src="static/Images/Insta3.png" class="image3"  style="width:150%">   
        </div>
        <div class="col-6">
            <ul style="list-style-type:none" class="list">
            <li><i class="welcome fas fa-brush"></i><h3 class="font-weight-bold">Täglich neue Designs</h3>
            <h5><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod diam nonumy eirmod.</small></h5></li>

            <li><i class="welcome fas fa-binoculars"></i><h3 class="font-weight-bold">Entdecke die Schrift neu</h3>
            <h5><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod diam nonumy eirmod.</small></h5></li>

            <li><i class="welcome fas fa-book"></i><h3 class="font-weight-bold">Botschaften aus dem Wort</h3>
             <h5><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod diam nonumy eirmod.</small></h5></li>

            <li><i class="welcome fas fa-couch"></i><h3 class="font-weight-bold">Bequem vom Handy aus</h3>
            <h5><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod sed diam nonumy eirmod diam nonumy eirmod.</small></h5></li>
            </ul>
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
.image1{
    margin-top: 3em;
    margin-right: 1em;

}
.image2{
    margin-top: 3em;
    margin-left: 1em;
}

#welcome{
    padding: 8em;
}
.welcome{
    float: left;
    font-size:32px;
    width: 68px;
    height: 15px;
    padding-right: 20px;
    color:#ad1818;
}
#welcome h3{
    float: left;
    margin-bottom:0;
}
#welcome h5{
    float: left;
    padding-left:67px;
    padding-bottom: 1em;
}
#welcome h4{
    padding-left: 20em;
    padding-right: 20em;
}
.list{
    padding-top: 3em;
    padding-left: 3em;
}
</style>