<template>
  <div class="home page">
    <div class="container" :style="{ 'max-width': '1216px' }">
      <section class="section">
        <div class="columns">
          <div class="column is-12">
            <h1 class="has-text-centered underline-centered">The project</h1>
            <div class="has-text-justified project">
              <p>
                What is the impact of gender on Art ? What does the artist's social and ethnic origins have to do with art ?
              </p>
              <p>
                This is the issue that links these fascinating and enlightening interviews. Led by <a href="https://docher.com/" target="_blank">Marie Docher</a>, they are a great source of information, articulation of issues, variety of points of view expressed by those who contribute to the world of art and culture.
              </p>
              <p>
                She has met with curators, sociologists, art historians, exhibition curators, photographers... all those who today question, study, research and focus on the issue of the representation of women and racialized artists in art history, but also in collections, exhibitions or on the market. Through these meetings and these rich and diverse points of view, the aim is to question our conventional ideas, our habits, our perception of art and its restitution.
              </p>
              <p>
                Are there still inequalities in culture, and how can we understand the resistance to establishing balance?<br />
                What are the differences between women and men in culture?<br />
                How and why is it necessary to deconstruct the figure of the creator and the established mythology when it comes to the question of talent, which are excluding factors for many artists?<br />
                How can we fill the gaps and the field left empty by the place of women and "minorities" in the history of art when it was written by men, in order to rewrite it and reconstruct a richer and more representative vision of real artistic production?<br />
                How, in the light of this re-writing, can we resist, implement a common and emancipatory production?<br />
                How can the art market be biased by the dimension of gender when it comes to the acquisitions and valorisation of artists and collections?<br />
                How do institutions and festivals share the same mechanisms that exclude women?
              </p>
              <p>
                All these questions - and more - are addressed and analyzed in these interviews, which contribute to composing a rich material that can broaden the horizons of anyone interested in art be they professionals, teachers, students, or the general public.
              </p>
            </div>
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
  </div>
</template>

<script>

import videos from '@/assets/videos-en.json'
import VideoList from '@/components/VideoList'

export default {
  components: {
    VideoList
  },

  head () {
    return { title: 'Visuelles.art - The project' }
  },

    data () {
    return {
      videos
    }
  },
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
