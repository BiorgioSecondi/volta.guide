import comp from "/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Home\"},\"headers\":[{\"level\":2,\"title\":\"c++ base\",\"slug\":\"c-base\",\"link\":\"#c-base\",\"children\":[]}],\"git\":{\"updatedTime\":1728246175000,\"contributors\":[{\"name\":\"nik-din\",\"email\":\"nik.dindo@gmail.com\",\"commits\":4}]},\"filePathRelative\":\"README.md\"}")
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
