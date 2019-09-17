<template>
  <footer class="container">
    <h2 class="has-text-centered">Avec le soutien de</h2>

    <div class="partner columns is-mobile">
      <div class="column is-3 has-text-centered">
        <a href="https://awarewomenartists.com/" target="_blank">
          <img src="/images/aware.jpg" alt="logo aware" />
        </a>
      </div>

      <div class="column is-3 has-text-centered">
        <a href="http://www.culture.gouv.fr/" target="_blank">
          <img class="portrait" src="/images/ministere_1.jpg" alt="logo ministère de la culture" />
        </a>
      </div>

      <div class="column is-3 has-text-centered">
        <a href="https://hfbretagne.com/" target="blank">
          <img class="portrait" src="/images/Logo_HF.png" alt="logo HF Bretagne" />
        </a>
      </div>

      <div class="column is-3 has-text-centered">
        <img src="/images/Logo_TEM.jpg" alt="logo TEM" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@import "~bulma/sass/utilities/_all";

footer {
  margin-top: 5rem
}

.partner {
  margin-top: 1.5rem;
}

img {
  display: inline-block;
  margin: auto;
  max-width: 100%;
  height: auto;
}

img.portrait {
  max-width: 80%;
}

@media (min-width: $tablet) {
  footer: {
    margin-top: 5rem;
  }

  img {
    max-width: 70%;
  }

  img.portrait {
    max-width: 40%;
  }
}

</style>
