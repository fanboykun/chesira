<template>
  <main class="nw">
    <Banner></Banner>
    <section class="if nx reveal-fade">
      <div class="tcontainern"></div>
    </section>
    <Features></Features>
    <Service></Service>
    <Contact></Contact>
  </main>
</template>

<script>
import Features from "./Features.vue";
import Service from "./Service.vue";
import Contact from "./Contact.vue";
import Banner from "./Banner.vue";
export default {
  components: { Features, Service, Contact, Banner },
  name: "Main",
};
</script>
