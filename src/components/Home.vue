<template>
  <div>
    <img class="logo" src="static/logo.png" alt="Agape">
    <toolbar/>
    <KnowJesus>
    </KnowJesus>
    <who-we-are/>
    <our-values/>
    <LIVE/>
    <pastoren/>
    <this-is-us/>
    <YouAreWelcome/>
    <Programs/>
    <AgapeSocial/>
    <WelcomeToAgapeSocial/>
    <Footer/>
  </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar'
  import KnowJesus from '@/components/KnowJesus'
  import WhoWeAre from '@/components/WhoWeAre'
  import OurValues from '@/components/OurValues'
  import LIVE from '@/components/LIVE'
  import Pastoren from '@/components/Pastoren'
  import ThisIsUs from '@/components/ThisIsUs'
  import YouAreWelcome from '@/components/YouAreWelcome'
  import Programs from '@/components/Programs'
  import AgapeSocial from '@/components/AgapeSocial'
  import WelcomeToAgapeSocial from '@/components/WelcomeToAgapeSocial'
  import Footer from '@/components/Footer'
  
  export default {
    components: {
      Toolbar,
      KnowJesus,
      WhoWeAre,
      OurValues,
      LIVE,
      Pastoren,
      ThisIsUs,
      YouAreWelcome,
      Programs,
      AgapeSocial,
      WelcomeToAgapeSocial,
      Footer,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    width: 130px;
    margin: 1em;
    margin-bottom: 0;
    padding-bottom: 0;
  }
</style>
