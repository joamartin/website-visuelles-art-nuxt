<template>
  <div>
    <the-navbar></the-navbar>
    <nuxt />
    <the-footer></the-footer>
  </div>
</template>

<script>

import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheNavbar,
    TheFooter
  },

  created() {
    this.handleLang(this.$route.name)
    this.$router.beforeEach((to, from, next) => {
      this.handleLang(to.name)
      next()
    })
  },

  methods: {
    handleLang(routeName) {
      const lang = routeName === 'the-project' ? 'en' : 'fr'
      this.$store.commit('changeLang', lang);
    }
  }
}

</script>
