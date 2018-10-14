<template>
  <div>
    <Navbar/>
    <Header/>
    <WhoWeAre/>
    <OurValues/>
    <Live/>
    <Pastors/>
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

<style>
</style>
