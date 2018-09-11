<template>
  <section id="program">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h1>Programme</h1>
          <h3>
            <small class="text-muted text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor.
            </small>
          </h3>
        </div>
        </div>
        <table class="col-lg-12 Table">
          <tr>
            <th class="tableProgram">
              <h5>Mittwoch</h5>
              <p>19:00 - 21:00</p>
              <p class="font-weight-bold">Gebetsabend</p>
              <p>
                <small class="text-muted">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor.
                </small>
              </p>
            </th>
            <th class="tableProgram">
              <h5>Sonntag</h5>
              <p>09:30 - 12:00</p>
              <p class="font-weight-bold">Morgen - Gottesdienst</p>
              <p>
                <small class="text-muted">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumyeirmod tempor.
                </small>
              </p>
              <p>17:30 - 19:30</p>
              <p class="font-weight-bold">Abend - Gottesdienst</p>
              <p>
                <small class="text-muted">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor.
                </small>
              </p>
            </th>
            <th class="tableProgram">            
              <h5>Montag</h5>
              <p>19:00 - 21:00</p>
              <p class="font-weight-bold">Jugendendtreffen / Frauentreffen</p>
              <p>
                <small class="text-muted">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                  sed diam nonumy eirmod tempor.
                </small>
              </p>
            </th>
          </tr>
        </table>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Programs'
  }
</script>

<style>
  #program {
    padding: 7em 0 7em 0;
  }
  #program h5 {
    color: rgb(185, 10, 10);
    padding-bottom: 2em;
  }
  #program p {
    padding: 0;
    margin: 0.5em;
  }
  #program h3 {
    margin-bottom: 40px;
  }
  .Abend {
    padding-top: 2em;
  }
  .program-text {
    padding: 2em;
  }
  #program table tr:first-child th {
    border-top: 0;
  }
  #program table tr td:first-child,
  #program table tr th:first-child {
    border-left: 0;
  }
  #program table tr td:last-child,
  #program table tr th:last-child {
    border-right: 0;
  }

  @media screen and (max-width: 850px) {
     #program h5{
       padding: 3em 0 0 0;
     }
    #program table tr th:first-child,
    #program table tr th:last-child{
      display: none;
    }
  }
</style>
