<template>
  <section id="program">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center red">Wann treffen wir uns?</h2>
          <h3 class="pastors-heading">
            Gemeinschaft jede Woche
          </h3>
        </div>
      </div>
      <div class="row">
        <table class="col-lg-12 Table">
          <tr>
            <th class="tableProgram">
              <h2 class="red">Mittwoch</h2>
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
              <h2 class="red">Sonntag</h2>
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
              <h2 class="red">Montag</h2>
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

  #program th {
    padding: 2em;
  }

  #program th:not(:first-child) {
    border-left: 1px solid lightgrey;
  }
  
  @media all and (max-width: 800px) {
    #program th {
      display: inline-block;
      border: none !important;
    }
  }
</style>
