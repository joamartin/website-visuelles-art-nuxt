<template>
  <div class="container" :style="{ 'max-width': '1216px' }">
    <section class="section">
      <h1 class="has-text-centered underline-centered">Les Entretiens</h1>
      <div class="columns">
        <div class="column is-12">
          <p class="has-text-justified">
            Qu'est-ce que le genre et l’origine font à l'art ? Vaste question ! Telle est la problématique qui relie ces entretiens aussi passionnants qu'éclairants. Menés par Marie Docher, ils sont une grande source d'informations, d'articulation de problématiques, de variétés de points de vue par les acteur.ices du monde de l'art et de la culture.
          </p>
          <p class="has-text-justified">
            Elle est allée à la rencontre de conservateur·ices, de sociologues, d’historien·nes de l'art, de commissaires d'exposition, de photographes... en somme de celles et ceux qui aujourd'hui s'interrogent, étudient, recherchent et se mobilisent autour la question de la représentation des artistes femmes et des racisé.es dans l'histoire de l'art, mais aussi dans les collections, les expositions ou encore le marché. Il s'agit à travers ces rencontres et ces points de vue riches et divers de remettre en question comme en perspective nos idées reçues, nos habitudes, notre perception de l'art et de ses restitutions.
          </p>
          <p class="has-text-justified">
            Existe-il encore des inégalités dans la culture, et comment expliquer les résistances à ces inégalités ?<br />
            Quelles sont les différences entre femmes et hommes dans la culture ?<br />
            Comment et pourquoi est-il indispensable de déconstruire la figure de créateur et la mythologie établie de la question du talent qui sont des facteurs excluants pour beaucoup d'artistes ?<br />
            Comment combler les manques et le champ laissé vide par la place des femmes et des « minorités » dans l'histoire de l'art quand celle-ci a été écrite par les hommes, pour la réécrire et en reconstruire une plus riche et plus représentative de la production artistique réelle ?<br />
            Comment, à l'aune de cette réécriture, faire résistance, mettre en œuvre une production commune et émancipatrice ?<br />
            Comment le marché de l'art peut être biaisé par la dimension genrée quand il s'agit d'acquisitions et de valorisation des artistes et des collections ?<br />
            Comment les institutions et les festivals partagent-ils les mêmes mécanismes excluant les femmes ?
          </p>
          <p class="has-text-justified">
            Comment l'actuel Ministère de la Culture se mobilise-t-il pour l’égalité et la diversité à travers sa feuille de route, un programme ambitieux, visant à la fois une plus grande représentations des femmes dans tous les secteurs de l'art, mais aussi une transmission de la culture de l'égalité, la fin des discriminations, des réticences, des violences sexistes ou encore des inégalités salariales dans les établissements publics ?
          </p>
          <p class="has-text-justified">
            Toutes ces questions – et plus encore – sont abordées et analysées dans ces entretiens qui viennent composer une matériel riche d'ouverture, de réflexions pour toute personne s’intéressant à l'art, pour les professionnel·les, les enseignant·es, les étudiant·es, le public.
          </p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="columns">
        <div class="column is-12">
          <video-list :videos="videos"></video-list>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import videos from '@/assets/videos.json'
import VideoList from '@/components/VideoList'

export default {
  components: {
    VideoList
  },

  data () {
    return {
      videos: videos.filter(video => video.type === 'long')
    }
  },

  head () {
    return { title: 'Les entretiens - Visuelles.art' }
  }
}

</script>
