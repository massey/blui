import blIcon from './icon'
import { registerComponents } from '../../utils/plugins'

import packageIcon from './package'
import spinnerIcon from './spinner'

const components = {
  blIcon
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

export default VuePlugin

export {
  packageIcon,
  spinnerIcon
}
