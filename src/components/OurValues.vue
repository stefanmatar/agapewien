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
            <th><h3>Hoffnung</h3></th>
            <th><h3>Liebe</h3></th>
            <th><h3>Glaube</h3></th>
          </tr>
          <tr>
            <th><h3>Wort</h3></th>
            <th><h3>Gebet</h3></th>
            <th><h3>Lobpreis</h3></th>
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
  padding: 5em 0;
}

table {
  border-collapse: collapse;
}
table td, table th {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 0;

}
table tr:first-child th {
  border-top: 0;
}
table tr:last-child td {
  border-bottom: 0;
}
table tr td:first-child,
table tr th:first-child {
  border-left: 0;
}
table tr td:last-child,
table tr th:last-child {
  border-right: 0;
}

th {
  padding: 8em;
}

th:hover {
  color: #d03439;
}
#values h3{
  margin-bottom: 4em;
}
</style>
