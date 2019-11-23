export default {
  bind (el, { value }) {
    M.Tooltip.init(el, { html: value })// eslint-disable-line
  },
  unbind (el) {
    const tooltip = M.Tooltip.getInstance(el)// eslint-disable-line
    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }
  }
}
