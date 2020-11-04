export const state = () => ({
  lang: 'fr'
})

export const mutations = {
  changeLang(state, lang) {
    state.lang = lang
  }
}
