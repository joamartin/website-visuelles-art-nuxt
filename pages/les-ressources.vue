<template>
  <section class="section container has-text-centered">
    <h2 class="underline-centered">Les Ressources</h2>
    <a href="https://visuellesart.wordpress.com/signataires-arles2019/" target="_blank">Feuille des signataires de la lettre Arles 2019</a>

    <h2 class="underline-centered">Les Sites Internet</h2>
    <a href="http://www.afrikadaa.com/" target="_blank">Afrikadaa</a>
    <a href="https://awarewomenartists.com/" target="_blank">AWARE</a>
    <a href="http://www.femmesphotographes.eu/" target="_blank">Association femmesPHOTOgraphes</a>
    <a href="https://atlantesetcariatides.wordpress.com/" target="_blank">Atlantes et Cariatides</a>
    <a href="https://archivesherstory.com/" target="_blank">Herstory</a>
    <a href="https://hfbretagne.com/" target="_blank">HF Bretagne</a>
    <a href="https://www.lapartdesfemmesphoto.com/" target="_blank">La Part des Femmes</a>
    <a href="http://www.mouvement-hf.org/" target="_blank">Mouvement HF</a>

    <h2 class="underline-centered">Les Rapports et l’action publique</h2>
    <a href="http://www.culture.gouv.fr/Presse/Communiques-de-presse/Feuille-de-route-Egalite-2018-2022" target="_blank">Feuille de route Egalité 2018-2022 du Ministère de la Culture</a>
    <a href="http://www.culture.gouv.fr/Thematiques/Egalite-et-diversite/Documentation/Observatoire-de-l-egalite-femmes-hommes/Observatoire-2018-de-l-egalite-entre-femmes-et-hommes-dans-la-culture-et-la-communication" target="_blank">Observatoire 2018 de l’égalité entre femmes et hommes dans la culture et la communication</a>
    <a href="http://www.haut-conseil-egalite.gouv.fr/stereotypes-et-roles-sociaux/travaux-du-hcefh/article/egalite-dans-la-culture-le-temps-de-l-action" target="_blank">Rapport du Haut Conseil à l’Egalité, « Egalité dans la culture, le temps de l’action</a>
    <p>Rapports Reine Prat <a class="inline" href="http://www.culture.gouv.fr/Media/Thematiques/Egalite-et-diversite/Fichiers/Rapport-Reine-Prat-2006" target="_blank">2006</a> et <a class="inline" href="http://www.mouvement-hf.org/wp-content/uploads/2013/09/Rapport-Reine-Prat-20091.pdf" target="_blank">2009</a></p>

    <h2 class="underline-centered">La Littérature Scientifique</h2>
    <a href="https://www.cairn.info/revue-travail-genre-et-societes-2008-1-page-87.htm" target="_blank">Marie Buscatto, « Tenter, rentrer, rester : les trois défis des femmes instrumentistes de jazz »</a>
    <a href="https://www.cairn.info/revue-cahiers-du-genre-2007-2-page-17.htm#anchor_abstract" target="_blank">Fabienne Dumont et Séverine Sofio, Esquisse d’une épistémologie de la théorisation féministe en art</a>
    <a href="https://www.cairn.info/revue-sociologie-de-l-art-2011-3-page-53.htm" target="_blank">Alain Quemin et Clara Levy, Stéréotypes genrés dans l’œuvre, reconnaissance esthétique et succès marchand d’une artiste plasticienne : le cas de Marina Abramovic</a>
    <a href="https://journals.openedition.org/edso/1821" target="_blank">Mathilde Provansal, Au-delà de la vocation artistique : un recrutement sexuellement différencié des candidat-e-s à une carrière de plasticien-ne ?</a>
    <a href="https://docplayer.fr/11981857-Le-parcours-professionnel-des-anciennes-etudiantes-de-l-ecole-nationale-superieure-des-beaux-arts-de-paris.html" target="_blank">Zoé Haller, Le parcours professionnel des anciennes étudiantes de l’École Nationale Supérieuredes Beaux-arts de Paris</a>
    <a href="http://imagesdutravail.edel.univ-poitiers.fr/docannexe/file/2273/art5_itt_6_7_leon_pdf.pdf" target="_blank">Véra Léon, Clichés de photographes. L’invisible mixité des formations professionnelles</a>

    <div class="columns internal-links">
      <div class="column is-half">
        <nuxt-link class="internal-link" to="/les-entretiens">Explorer Les Entretiens</nuxt-link>
      </div>

      <div class="column is-half">
        <nuxt-link class="internal-link" to="/les-questions-thematiques">Explorer Les Questions Thematiques</nuxt-link>
      </div>
    </div>

    <h2 class="is-centered thanks">Un immense merci à</h2>
    <p>
      Hanna Alkema - Florent Barrallon - Carolle Benitah  - Gwladys Bernard - Francois Chanussot - Céline Clanet - Karin Crona - Chloé Devis - Christine Docher - Denise Frechet - Gwenola Furic - Erika Gentry - Michel Golzio - Sophie Knittel - Anne Lautier - Carol Letanneur - Catherine Lottier - Julie Luzoir - Małgosia  Magryś - Cécile Menendez - Ingrid Milhaud - Marie-Laure Rigal - Marie Robert - Marijane Rougelot - Agnès Tissot - Laetitia Tura - Valérie Vernhet - Eliane Viennot - Ericka Weidmann - Noémie Sauve - Oristelle Bonis -  Guillaume Le Coz - Henry Docher Et toutes les personnes qui ont rendu ce projet réalisable
    </p>
  </section>
</template>

<script>

export default {
  head () {
    return { title: 'Les ressources - Visuelles.art' }
  }
}

</script>

<style scoped>

h2 {
  margin-top: 2.5rem;
  margin-bottom: 1.2rem;
}

h2:first-child {
  margin-top: 0;
}

p {
  margin: 0;
}

p, a {
  display: block;
  margin: 0.5rem;
  font-size: 1.2rem;
  text-decoration: none;
}

a.inline {
  display: inline;
}

a:hover {
  text-decoration: underline;
}

.internal-links {
  margin-top: 3rem;
}

.internal-link {
  max-width: 290px;
  margin: auto;
  font-size: 1.6rem;
  font-family: 'MarketDeco';
  text-transform: uppercase;
}

.internal-link:hover {
  text-decoration: none;
}

h2.thanks {
  margin-top: 4rem;
}

</style>
