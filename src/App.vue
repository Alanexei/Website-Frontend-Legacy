<template>

  <div class="overlay">
    <Logo class="overlay__logo" />
  </div>

  <Logo id="logo"/>

  <Home />
  <Projects />
  <Contact />

  <footer>
    <svg class="footer__wave" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0,600 C 0,600 0,300 0,300 C 163.46666666666664,347.6 326.9333333333333,395.2 502,379 C 677.0666666666667,362.8 863.7333333333333,282.8 1022,259 C 1180.2666666666667,235.2 1310.1333333333332,267.6 1440,300 C 1440,300 1440,600 1440,600 Z"></path>
    </svg>
    <div class="footer__wave-box"></div>
    <div class="footer__content-box">
      <Logo class="footer__logo" />
      <ul class="footer__map">
        <li class="footer__map-item">
          <a href="#home">Home</a>
        </li>
        <li class="footer__map-item">
          <a href="#projects">Projects</a>
        </li>
        <li class="footer__map-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <span class="footer__cp">Copyright © 2020</span>
    </div>
  </footer>

</template>


<script>

import Home from './components/sections/Home';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

import Logo from './components/elements/Logo';

export default {
  name: 'App',
  components: {
    Logo,
    Home,
    Projects,
    Contact
  }
}

</script>

<style lang="scss">

// Something of importance here

</style>