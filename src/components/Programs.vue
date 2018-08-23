<template>
  <section id="program">
    <div class="container">
      <div class="row">
        <div class= "col-12">
        <h1>Programme</h1>
        <h3><small class="text-muted  col-sx-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</small></h3>
        </div>
        <div class="row">

            <div class="col-4 program-text">
            <h5>Mittwoch</h5>
            <p>19:00 - 21:00</p>
            <p class="font-weight-bold">Gebetsabend</p>
            <p><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</small></p>
            </div>

            <div class="col-4 program-text">
            <div class="border-left border-right">
            <h5>Sonntag</h5>
            <p>09:30 - 12:00</p>
            <p class="font-weight-bold">Morgen - Gottesdienst</p>
            <p><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</small></p>
            <div class="Abend">
            <p>17:30 - 19:30</p>
            <p class="font-weight-bold">Abend - Gottesdienst</p>
            <p><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</small></p>            
            </div>
            </div>
            </div>

            <div class="col-4 program-text">
            <h5>Montag</h5>
            <p>19:00 - 21:00</p>
            <p class="font-weight-bold">Jugendendtreffen / Frauentreffen</p>
            <p><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</small></p>   
            </div>
            </div> 
        </div> 
        </div>
    
  </section>
</template>

<script>
export default {
  name: 'Programs'
}
</script>

<style>
#program{
    padding:7em;
}
.border-right {
    border-right: groove;
    padding-left: 1em;
 }
.border-left {
    border-left: groove;
    padding-right: 1em;
 }
.program-text{
     padding: 2em;
 }
 #program h5{
     color: rgb(185, 10, 10);
     padding-bottom: 2em;
 }
 #program p{
     padding: 0;
     margin: 0.5em;
 }
 #program h3{
     text-align: center;
     padding-right: 25em;
     padding-left: 25em;
     padding-bottom: 2em;
 }
 .Abend{
     padding-top:2em;
 }
</style>