import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/introduzione.html.vue"
const data = JSON.parse("{\"path\":\"/introduzione.html\",\"title\":\"Introduzione\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Introduzione\"},\"headers\":[],\"git\":{\"updatedTime\":1740820513000,\"contributors\":[{\"name\":\"nik-din\",\"username\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":7,\"url\":\"https://github.com/nik-din\"}]},\"filePathRelative\":\"introduzione.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
