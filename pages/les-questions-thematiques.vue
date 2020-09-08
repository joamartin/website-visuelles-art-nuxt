<template>
  <div class="container" :style="{ 'max-width': '1216px' }">
    <section class="section">
      <h1 class="has-text-centered underline-centered">Les Questions thématiques</h1>
      <div class="columns">
        <div class="column is-12">
          <p class="has-text-justified">
            Au cours de discussions sur les réseaux sociaux ou ailleurs vous pouvez être amené·es à enrichir la conversation avec des points spécifiques que vous trouvez pertinents dans un des entretiens. Nous les avons reconfigurés à cet usage. Ce sont des outils pratiques.
          </p>
          <p>
            Existe-t-il encore des inégalités entre femmes et hommes dans la culture ?<br />
            Pourquoi les femmes sont-elles quasi-absentes de l’Histoire de l'art ?<br />
            Est-ce que les artistes "racisé.e.s" sont aussi visibles que les autres artistes ?<br />
            Pourquoi le genre est important, si seul le talent compte ?<br />
            Est-ce qu'exposer plus de femmes se fait au détriment de la qualité ?
          </p>
        </div>
      </div>
    </section>
    <section>
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
      videos: videos.filter(video => video.type === 'short')
    }
  },

  head () {
    return { title: 'Les questions thématiques - Visuelles.art' }
  }
}

</script>
