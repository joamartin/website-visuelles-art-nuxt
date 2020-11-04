<template>
  <footer class="container">
    <div class="socials has-text-centered">
      <a href="https://twitter.com/home?status=https://visuelles.art/">
        <span class="icon"><i class="mdi mdi-36px mdi-twitter"></i></span>
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https://visuelles.art/">
        <span class="icon"><i class="mdi mdi-36px mdi-facebook"></i></span>
      </a>
      <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://visuelles.art/&title=&summary=&source=">
        <span class="icon"><i class="mdi mdi-36px mdi-linkedin"></i></span>
      </a>
    </div>
    <h2 class="has-text-centered">Avec le soutien de</h2>

    <div class="partner columns is-mobile">
      <div class="column is-3 has-text-centered">
        <a href="https://awarewomenartists.com/" target="_blank">
          <img src="~/assets/images/aware.jpg" alt="logo aware" />
        </a>
      </div>

      <div class="column is-3 has-text-centered">
        <a href="http://www.culture.gouv.fr/" target="_blank">
          <img class="portrait" src="~/assets/images/ministere_1.jpg" alt="logo ministère de la culture" />
        </a>
      </div>

      <div class="column is-3 has-text-centered">
        <a href="https://hfbretagne.com/" target="blank">
          <img class="portrait" src="~/assets/images/Logo_HF.png" alt="logo HF Bretagne" />
        </a>
      </div>

      <div class="column is-3 has-text-centered">
        <img src="~/assets/images/Logo_TEM.jpg" alt="logo TEM" />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

@import "~bulma/sass/utilities/_all";

footer {
  margin-top: 2rem
}

.socials {
  margin: 0 0 32px 0;
}

.socials a {
  margin: 0 32px;
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
  footer {
    margin-top: 2rem;
  }

  img {
    max-width: 70%;
  }

  img.portrait {
    max-width: 40%;
  }
}

</style>
