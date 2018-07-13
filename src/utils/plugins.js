export function registerComponents (Vue, components) {
  for (let component in components) {
    Vue.component(component, components[component])
  }
}
