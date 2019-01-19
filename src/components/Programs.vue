<template>
  <section id="program">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center red">
            Wann treffen wir uns?
          </h2>
          <h3 class="pastors-heading">
            Gemeinschaft jede Woche
          </h3>
        </div>
      </div>
      <div class="program-section">
        <div class="row">
          <div class="col-lg-4 program-section-text">
            <h2 class="red program-header">Mittwoch</h2>
              <div class="program-text font-weight-bold">19:00 - 21:00</div>
              <div class="program-text font-weight-bold">Gebetsabend</div>
              <div class="text-muted">Wir treffen uns gemeinsam zu einem speziellen Gebetsabend. Wir glauben, dass Gott unsere Gebete erhört.</div>
          </div>
          <div class="col-lg-4 program-section-text">
            <h2 class="red program-header">Sonntag</h2>
              <div class="program-text font-weight-bold">09:30 - 12:00</div>
              <div class="program-text font-weight-bold">Morgen - Gottesdienst</div>
              <div class="program-text text-muted">Unsere Hauptversammlung hat das Ziel, ein Rückblick auf die Woche mit Gott zu geben und uns für die kommende Woche voller Herausforderungen vorzubereiten.</div>
              <div class="program-text font-weight-bold">17:30 - 19:30</div>
              <div class="program-text font-weight-bold">Abend - Gottesdienst</div>
              <div class="text-muted">Am ersten Sonntag der Woche ist der Abend-Gottesdienst speziell für Jugendliche.</div>
          </div>
          <div class="col-lg-4 program-section-text">
            <h2 class="red program-header">Montag</h2>
              <div class="program-text font-weight-bold">19:00 - 21:00</div>
              <div class="program-text font-weight-bold">Jugendtreffen / Frauentreffen</div>
              <div class="text-muted">Jugendlichen treffen sich jeden Montag in der Gemeinde. Frauentreff ist jeden ersten Montag des Monats.</div>
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
  #program {
    padding: 120px 0 160px 0;
  }
  .program-header{
    margin: 0;
    padding-bottom: 60px;
  }
  .program-section-text:not(:first-child) {
    border-left: 1px solid lightgrey;
  }
  .program-text{
    padding-bottom: 30px;
  }
  @media screen and (max-width: 991px) {
    .program-section-text{
      border: none !important;
    }
    .program-header{
      padding-bottom: 40px;
      padding-top: 40px;
    }
    .program-text{
      padding-bottom: 20px;
    }
  }
</style>
