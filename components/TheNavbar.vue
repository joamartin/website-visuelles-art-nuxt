<template>
  <header id="header">
    <div class="container banner is-hidden-touch lang">
      <div v-if="lang === 'fr'" class="has-text-right">
        <span class="lang-link active">FR</span> / <nuxt-link to="/the-project" class="lang-link">EN</nuxt-link>
      </div>
      <div v-else class="has-text-right">
        <nuxt-link to="/" class="lang-link">FR</nuxt-link> / <span class="lang-link active">EN</span>
      </div>
      <div class="banner is-hidden-touch">
        <img src="~/assets/images/banner.png" alt="bannière" />
      </div>
    </div>

    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          role="button"
          :class="['navbar-burger', 'burger', { 'is-active': menu }]"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-header"
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>

        <div class="mobile-title navbar-item is-hidden-desktop">
          Visuelles.art
        </div>
      </div>

      <div :class="['menu-obfuscator', { 'is-active': menu }]"></div>

      <div class="container">
        <div
          id="navbar-header"
          :class="['navbar-menu', { 'is-active': menu }]"
        >
          <div class="navbar-start is-hidden-desktop has-text-right">
            <div v-if="lang === 'fr'" class="has-text-right navbar-item">
              <span class="lang-link active">FR</span> / <a href="#" class="lang-link">EN</a>
            </div>
            <div v-else class="has-text-right navbar-item">
              <a href="#" class="lang-link">FR</a> / <span class="lang-link active">EN</span>
            </div>
          </div>

          <nuxt-link class="navbar-item" to="/">Accueil</nuxt-link>
          <nuxt-link class="navbar-item" to="/les-entretiens">Les Entretiens</nuxt-link>
          <nuxt-link class="navbar-item" to="/les-questions-thematiques">Les Questions Thematiques</nuxt-link>
          <nuxt-link class="navbar-item" to="/les-ressources">Les Ressources</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'TheNavbar',

  data () {
    return { menu: false }
  },

  computed: {
    lang() {
      return this.$store.state.lang
    }
  },

  methods: {
    toggleMenu () {
      this.menu = !this.menu

      if (process.browser) {
        document.querySelector('body').classList.toggle('mobile-menu-active')
      }
    }
  }
}

</script>

<style lang="scss">

@import "~bulma/sass/utilities/_all";

.container.lang {
  margin-top: 12px;
}

.container.banner {
  max-width: 1216px;
  padding-top: 0;
  padding-bottom: 0;
}

.mobile-title {
  font-size: 1.4rem;
  font-family: 'MarketDeco';
}

.banner img {
  width: 100%;
  height: auto;
  display: block;
  margin: auto;
}

.navbar-menu {
  place-content: center;
}

a.navbar-item {
  padding: 0.5rem 2rem;
  font-size: 1.1rem;
  font-family: 'MarketDeco';
  text-transform: uppercase;
  text-decoration: unset;
}

a.navbar-item:after {
  content:"";
  position: absolute;
  bottom: 2px;
  left: calc(50% - 15px);
  height: 2px;
  width: 30px;
  background: #fff;
  transition: background-color 0.4s;
}

a.navbar-item:hover {
  color: #363636;
  background-color: #fff;
}

a.navbar-item:hover:after {
  background: #363636;
  transition: background-color 0.4s;
}

a.lang-link {
  font-family: 'MarketDeco';
  text-decoration: none;
  color: hsl(0, 0%, 71%);
}

.lang-link.active {
  font-family: 'MarketDeco';
  text-decoration: none;
  color: hsl(0, 0%, 14%)
}

a.lang-link:hover {
  color: hsl(0, 0%, 21%);
  transition: color 0.4s;
}

.menu-obfuscator {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
  background-color: #000;
  z-index: 800;
  transition: opacity 0.4s;
}

.menu-obfuscator.is-active {
  opacity: 0.7;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s;
}

.burger {
  margin-left: unset;
  z-index: 900;
  transition: all 0.4s;
}

.burger.is-active {
  color: #fff;
  transition: all 0.4s;
}

@media (max-width: $desktop) {
  #header {
    margin-bottom: 0.2rem;
  }

  .navbar-menu {
    position: fixed;
    display: block;
    top: 0;
    left: -260px;
    width: 260px;
    height: 100vh;
    transition: all 0.4s;
    z-index: 900;
  }

  a.navbar-item:hover:after {
    background: #fff;
  }
}

</style>
