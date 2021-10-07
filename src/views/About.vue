<template>
  <Header></Header>
  <main class="nw">
      <What></What>
      <Who></Who>
  </main>
  <Footer></Footer>
</template>

<script>
  import What from "@/components/What.vue";
  import Who from "@/components/Who.vue";
  import Header from '../components/Header.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: "About", 
    components:{
      What,
      Who,
      Header,
      Footer,
    }
  }
</script>
