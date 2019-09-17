<template>
  <section class="home page">
    <div class="container">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <h1 class="has-text-centered underline-centered">Le Projet</h1>
          <p class="has-text-centered project">
            L’objectif de ce site est de créer une porosité entre la recherche et le champ qu’elle analyse, en l’occurrence celui des arts plastiques. Dans ce domaine se poser des questions sur le sexe ou l’origine des artistes c’est se poser la question de ce qu’on regarde. Ce site regroupe des entretiens avec des chercheur·es, commissaires d’exposition, historiennes de l’art qui abordent un point de leur recherche et tentent de répondre à des questions récurrentes comme « Qu’est-ce que le génie ? », « Le talent a-t-il un sexe ? », « Que deviennent les étudiantes en école d’art ? », « Faut-il des quotas ? »
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="category column is-half">
          <nuxt-link class="page-link" to="/les-entretiens">
            <h2 class="has-text-centered underline-centered">Les Entretiens</h2>
            <p class="has-text-centered">
              On a rencontré des chercheur.es, commissaires d'exposition, historiennes de l'art qui abordent un point de leur de leur recherche et tentent de répondre à des questions comme " Qu'est-ce que le génie ? ", " Le talent a-t-il un sexe ? ", " Que deviennent les étudiantes en écolde d'art ? ", " Faut-il des quotas ? "
            </p>
            <img src="~/assets/images/dumont.jpg" alt="Fabienne Dumont" />
          </nuxt-link>
        </div>
        <div class="category column is-half">
          <nuxt-link class="page-link" to="/les-questions-thematiques">
            <h2 class="has-text-centered underline-centered">Les Questions Thematiques</h2>
            <p class="has-text-centered">
              On a voulu répondre à quelques questions plus précises:<br />
              Existent-ils vraiment des inégalités entre femmes et hommes dans les mondes de l'art ?<br />
              Est-ce que découvrir des artistes consistent simplement à trouver le « talent » ?<br />
              Quelles sont les solutions mises en place par les pouvoirs publics pour répondre à ces difficultés ?<br />
              Est-ce qu'il est vraiment impossible de faire une exposition de femmes artistes ?<br />
              Est-ce que les artistes racisé.e.s connaissent les mêmes difficultés que les autres artistes ?<br />
            </p>
            <img src="~/assets/images/questions_thematiques.jpg" alt="Photos de personnes questionnées" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  head () {
    return { title: 'Visuelles.art - Ce que le genre fait à l\'art' }
  }
}

</script>

<style lang="scss" scoped>

@import "~bulma/sass/utilities/_all";

.home .project {
  margin-bottom: 32px;
}

.home img {
  display: block;
  max-width: 80%;
  height: auto;
  margin: auto;
  margin-top: 32px;
}

.home a.page-link {
  display: block;
  color: #363636;
  background-color: #fff;
  transition: background-color 0.4s;
  text-decoration: unset;
}

.home a.page-link:hover {
  background-color: rgba(242, 242, 242, 0.7);
  transition: background-color 0.5s;
}

.home .category {
  margin-bottom: 3rem;
}

@media (min-width: $tablet) {
  .home a.page-link {
    padding: 2rem;
  }
}

</style>
