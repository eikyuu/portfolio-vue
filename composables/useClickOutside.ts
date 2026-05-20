import { onMounted, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'

type ElementRef = Ref<HTMLElement | null>

export default function useClickOutside(
  targetComponent: ElementRef,
  onClickOutside: () => void,
  excludeComponent?: ElementRef,
) {
  if (!targetComponent) {
    throw new Error('A target component must be provided.')
  }
  if (!onClickOutside) {
    throw new Error('A callback function must be provided.')
  }

  const handleClickOutside = (event: MouseEvent) => {
    const target = targetComponent.value
    if (!target) return

    const path = event.composedPath()
    if (event.target === target || path.includes(target)) return

    const excluded = excludeComponent?.value
    if (excluded && (event.target === excluded || path.includes(excluded))) return

    onClickOutside()
  }

  onMounted(() => {
    window.addEventListener('click', handleClickOutside)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside)
  })
}
