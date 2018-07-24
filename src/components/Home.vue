<template>
<div>
  <img class="logo" src="static/logo.png" alt="Agape">
  <toolbar/>
  <KnowJesus>
  </KnowJesus>
  <who-we-are/>
  <our-values/>
</div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import KnowJesus from '@/components/KnowJesus'
import WhoWeAre from '@/components/WhoWeAre'
import OurValues from '@/components/OurValues'

export default {
  components: {
    Toolbar,
    KnowJesus,
    WhoWeAre
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
  margin: 1em;
}
</style>
