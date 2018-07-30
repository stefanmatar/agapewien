<template>
<div>
  <img class="logo" src="static/logo.png" alt="Agape">
  <toolbar/>
  <KnowJesus>
  </KnowJesus>
  <who-we-are/>
  <our-values/>
  <LIVE/>
</div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import KnowJesus from '@/components/KnowJesus'
import WhoWeAre from '@/components/WhoWeAre'
import OurValues from '@/components/OurValues'
import LIVE from '@/components/LIVE'

export default {
  components: {
    Toolbar,
    KnowJesus,
    WhoWeAre,
    OurValues,
    LIVE
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
