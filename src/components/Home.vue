<template>
<div>
  <img class="logo" src="static/logo.png" alt="Agape">
  <toolbar>
  </toolbar>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</div>
</template>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  components: {
    Toolbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 200px;
}
</style>
