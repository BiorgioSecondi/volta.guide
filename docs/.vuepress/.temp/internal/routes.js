export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/algobadge.html", { loader: () => import(/* webpackChunkName: "algobadge.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/algobadge.html.js"), meta: {"title":"Algobadge"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/introduzione.html", { loader: () => import(/* webpackChunkName: "introduzione.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/introduzione.html.js"), meta: {"title":"Introduzione"} }],
  ["/problemi_categorie.html", { loader: () => import(/* webpackChunkName: "problemi_categorie.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi_categorie.html.js"), meta: {"title":"Problemi per categoria"} }],
  ["/problemi_gara.html", { loader: () => import(/* webpackChunkName: "problemi_gara.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi_gara.html.js"), meta: {"title":"Problemi per fonte"} }],
  ["/risorse.html", { loader: () => import(/* webpackChunkName: "risorse.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/risorse.html.js"), meta: {"title":"Risorse"} }],
  ["/problemi/carry_training.html", { loader: () => import(/* webpackChunkName: "problemi_carry_training.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/problemi/carry_training.html.js"), meta: {"title":"Carry Bit"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/nikolka/Scrivania/progetti/volta.guide/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
