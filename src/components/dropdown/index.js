import blDropdown from './dropdown'
import blDropdownItem from './dropdown-item'
import { registerComponents } from '../../utils/plugins'

const components = {
  blDropdown,
  blDropdownItem
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

export default VuePlugin
