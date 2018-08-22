<template>
  <section id="values">
    <div class="container">
      <div class="row">
        <div class= "col-12">
        <h1> Unsere Werte</h1>
        <h3><small class="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</small></h3>
        </div>
        <table class="col-12">
          <tr>
            <th><i class="fas fa-dove fas-image"></i><h3>Hoffnung</h3></th>
            <th><i class="fas fa-heart fas-image"></i><h3>Liebe</h3></th>
            <th><i class="fas fa-church fas-image"></i><h3>Glaube</h3></th>
          </tr>
          <tr>
            <th><i class="fas fa-book-open fas-image"></i><h3>Wort</h3></th>
            <th><i class="fas fa-hands fas-image"></i><h3>Gebet</h3></th>
            <th><i class="fas fa-music fas-image"></i><h3>Lobpreis</h3></th>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurValues'
}
</script>

<style>
#values {
  background-color: white;
  font-size: 10px;
  padding: 14em 0;
}

#values table {
  border-collapse: collapse;
}
#values table td, table th {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 0;

}
#values table tr:first-child th {
  border-top: 0;
}
#values table tr:last-child td {
  border-bottom: 0;
}
#values table tr td:first-child,
#values table tr th:first-child {
  border-left: 0;
}
#values table tr td:last-child,
#values table tr th:last-child {
  border-right: 0;
}

#values th {
  padding: 8em;
}

#values th:hover {
  color: #d03439;
}
#values h3{
  margin-bottom: 4em;
}
.fas-image{
  font-size: 32px;
  padding-bottom: 0.5em;
}
</style>
