<template>
  <header class="nb reveal-from-top" data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000">
    <div class="tcontainern">
      <div class="n_">
        <div class="nk">
          <h1 class="sz">
            <a href="/"
              ><img src="../assets/logo.svg" alt="Neon" width="32" height="32"
            /></a>
          </h1>
        </div>
        <button
          v-on:click="setDropdown"
          id="th"
          class="th"
          aria-controls="primary-menu"
          aria-expanded="true"
        >
          <span class="se">Menu</span>
          <span class="tp"><span class="td"></span></span>
        </button>
        <nav id="nj" v-bind:class="[toggleActive ? activeClass : nonActiveClass]" v-bind:style="[toggleActive ? activeStyle : '']">
          <div class="nq">
                <ul class="st h re">
                  <li><router-link to="/about" :class="$route.name == 'About' ? 'tbuttonn cbuttonh gbuttony sbuttono' : ''">About</router-link></li>
                </ul>
                <ul class="st h re">
                  <li>
                    <router-link to="/" :class="$route.name == 'Home' ? 'tbuttonn cbuttonh gbuttony sbuttono' : ''"
                      >Home</router-link>
                  </li>
                </ul>
              </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      toggleActive: false,
      activeClass : 'nj tb',
      nonActiveClass : 'nj',
      activeStyle: 'max-height: 154px;',
      }
    },
  methods:{
    setDropdown() {
      if((this.toggleActive == true)){
        document.body.classList.remove('tv')
        this.toggleActive = false;
      }else{
        document.body.classList.add('tv')
        this.toggleActive = true;
      }
    }
  }
};
</script>
