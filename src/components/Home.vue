<template>
<div>
  <img class="logo" src="static/logo.png" alt="Agape">
  <toolbar>
  </toolbar>
</div>
</template>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  components: {
    Toolbar
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  width: 200px;
}
</style>
