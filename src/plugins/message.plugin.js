export default {
  install (Vue, options) {
    Vue.prototype.$message = function (html) {
      M.toast({ html })// eslint-disable-line
    }
    Vue.prototype.$error = function (html) {
      M.toast({ html: `[Ошибка]: ${html}`, classes: 'red darken-4' })// eslint-disable-line
    }
  }
}
