import { onMounted } from 'vue'

interface Component {
  value: HTMLElement
}

interface Callback {
  (): void
}

interface ExcludeComponent {
  value: HTMLElement
}

export default function useClickOutside(
  component: Component,
  callback: Callback,
  excludeComponent: ExcludeComponent
) {
  if (!component) {
    throw new Error('A target component has to be provided.')
  }

  if (!callback) {
    throw new Error('A callback has to be provided.')
  }

  const listener = (event: MouseEvent) => {
    if (
      event.target === (component as Component).value ||
      event.composedPath().includes((component as Component).value) ||
      event.target === (excludeComponent as ExcludeComponent).value ||
      event.composedPath().includes((excludeComponent as ExcludeComponent).value)
    ) {
      return
    }
    if (typeof callback === 'function') {
      (callback as Callback)()
    }
  }

  onMounted(() => {
    window.addEventListener('click', listener)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', listener)
  })
}