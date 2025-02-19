import { onMounted, onBeforeUnmount } from 'vue'

// Interface representing a component with a value of type HTMLElement
interface Component {
  value: HTMLElement
}

// Type definition for a callback function
interface Callback {
  (): void
}

// Interface for an excluded component
interface ExcludeComponent {
  value: HTMLElement
}

// Custom hook to handle click events outside of a target component
export default function useClickOutside(
  targetComponent: Component,      // The target component to monitor for outside clicks
  onClickOutside: Callback,         // Callback to execute when a click outside occurs
  excludeComponent: ExcludeComponent // Component to exclude from the outside click detection
) {
  // Validate that a target component is provided
  if (!targetComponent) {
    throw new Error('A target component must be provided.')
  }

  // Validate that a callback function is provided
  if (!onClickOutside) {
    throw new Error('A callback function must be provided.')
  }

  // Handler function for click events
  const handleClickOutside = (event: MouseEvent) => {
    // Check if the click target is the target component or its descendants
    const isTarget = event.target === targetComponent.value ||
      event.composedPath().includes(targetComponent.value);

    // Check if the click target is the excluded component or its descendants
    const isExcluded = event.target === excludeComponent.value ||
      event.composedPath().includes(excludeComponent.value);

    // If the click is on the target or excluded component, do nothing
    if (isTarget || isExcluded) {
      return;
    }

    onClickOutside();

  }

  // Register the click event listener when the component is mounted
  onMounted(() => {
    window.addEventListener('click', handleClickOutside);
  });

  // Clean up the event listener when the component is unmounted
  onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside);
  });
}