<template>
  <div>
    <img class="logo" src="static/logo.png" alt="Agape">
    <Navbar/>
    <Header/>
    <WhoWeAre/>
    <OurValues/>
    <Live/>
    <Pastors/>
    <ThisIsAgape/>
    <YouAreWelcome/>
    <Programs/>
    <Departments/>
    <SocialMedia/>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Header from '@/components/Header'
  import WhoWeAre from '@/components/WhoWeAre'
  import OurValues from '@/components/OurValues'
  import Live from '@/components/Live'
  import Pastors from '@/components/Pastors'
  import ThisIsAgape from '@/components/ThisIsAgape'
  import YouAreWelcome from '@/components/YouAreWelcome'
  import Programs from '@/components/Programs'
  import SocialMedia from '@/components/SocialMedia'
  import Departments from '@/components/Departments'
  import Footer from '@/components/Footer'
  
  export default {
    components: {
      Navbar,
      Header,
      WhoWeAre,
      OurValues,
      Live,
      Pastors,
      ThisIsAgape,
      YouAreWelcome,
      Programs,
      SocialMedia,
      Departments,
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
