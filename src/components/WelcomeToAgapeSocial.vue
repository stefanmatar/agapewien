<template>
    <section id="welcome">
    <div class="container">
    <div class="col-12">
    <h1>Welcome to Agape <span style="color:#ad1818">Social</span></h1>
    <h4><small class="text-muted col-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</small></h4>
    </div>
    <div class="row">
        <div class="col-3">
        <img src="static/Images/Insta1.jpeg" class="image1"  style="width:250px">   
        </div>
        <div class="col-3">
         <img src="static/Images/Insta3.png" class="image3"  style="width:300px">   
        </div>
		<div class="col-6">
		            <div class="gaadiex-list">
		            <div class="gaadiex-list-item">
		            <i class="social fas fa-brush"></i>
                    <div class="gaadiex-list-item-text">
                    <h5 class="text-left font-weight-bold">Täglich neue Designs</h5>
                    <p class="text-left text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    </div>

                    <div class="gaadiex-list-item">
		            <i class="social fas fa-binoculars"></i>
                    <div class="gaadiex-list-item-text">
                    <h5 class="text-left font-weight-bold">Entdecke die Schrift neu</h5>
                    <p class="text-left text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>

                    </div>
                    </div>
                    <div class="gaadiex-list-item">
		            <i class="social fas fa-book"></i>
                    <div class="gaadiex-list-item-text">
                    <h5 class="text-left font-weight-bold">Botschaften aus Gottes Wort</h5>
                    <p class="text-left text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    </div>
                    	
                    <div class="gaadiex-list-item">    
		            <i class="social fas fa-couch"></i>
                    <div class="gaadiex-list-item-text">
                    <h5 class="text-left font-weight-bold">Bequem vom Handy aus</h5>
                    <p class="text-left text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr.Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
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
  name: 'WelcomeToAgapeSocial'
}
</script>

<style>
.social{
    float: left;
    color: #ad1818;
    font-size: 30px;
    width: 58px;
    height: 58px;
    margin-right: 20px;
}
.image1{
    padding-top: 3em;
    padding-right: 0.5em;
}
.image2{
    padding-top: 3em;
    padding-left: 0.5em;
}
#welcome{
    padding: 5em;
}
.gaadiex-list-item-text{
    padding-left: 4em;
    padding-bottom:1em;
}
.gaadiex-list{
    padding-left: 2em;
    padding-top: 4em;
}
#welcome p{
    margin:0;
    padding-bottom: 1em;
}
#welcoem h5{
    margin:0;
}
</style>