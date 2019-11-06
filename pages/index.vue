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
              Nous avons rencontré des chercheur.es, commissaires d'exposition, historiennes de l'art qui abordent un point de leur de leur recherche et tentent de répondre à des questions comme " Qu'est-ce que le génie ? ", " Le talent a-t-il un sexe ? ", " Que deviennent les étudiantes en écolde d'art ? ", " Faut-il des quotas ? "
            </p>
            <img src="~/assets/images/dumont.jpg" alt="Fabienne Dumont" />
          </nuxt-link>
        </div>
        <div class="category column is-half">
          <nuxt-link class="page-link" to="/les-questions-thematiques">
            <h2 class="has-text-centered underline-centered">Les Questions Thematiques</h2>
            <p class="has-text-centered">
              Est-ce qu'il existe encore vraiment des inégalités dans la culture ?<br />
              Pourquoi y a-t-il aussi peu de femmes dans l'histoire de l'art ?<br />
              Est-ce que les artistes "racisé.e.s" sont aussi visibles que les autres artistes ?<br />
              On ne peut pas choisir de montrer des femmes artistes, car ce qui compte avant tout, c'est le talent ?<br />
              Comment faire pour mettre plus en avant le travail des femmes artistes ?<br />
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
    padding: 1.8rem;
  }
}

</style>
