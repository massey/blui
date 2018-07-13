import blInput from './input'
import { registerComponents } from '../../utils/plugins'

const components = {
  blInput
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

export default VuePlugin
