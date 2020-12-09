import localizeFilter from '@/filters/localize.filter'
export default {
  bind (el, { value, modifiers }) {
    M.Tooltip.init(el, { html: modifiers.noloc ? value : localizeFilter(value) })// eslint-disable-line
  },
  unbind (el) {
    const tooltip = M.Tooltip.getInstance(el)// eslint-disable-line
    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }
  }
}
