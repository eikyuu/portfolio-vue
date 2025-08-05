<template>
    <NuxtLink
      v-if="link"
      :to="link"
      :target="target"
      :class="buttonClasses"
      :aria-label="ariaLabel"
      :aria-describedby="ariaDescribedby"
      @click="handleClick"
      @keydown="handleKeydown"
    >
      <span class="relative z-10 font-medium">
        {{ text }}
      </span>
      
      <!-- Indicateur visuel pour liens externes -->
      <span 
        v-if="isExternalLink" 
        class="ml-1 text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      >
        ↗
      </span>
    </NuxtLink>
  
    <button
      v-else
      :class="buttonClasses"
      :aria-label="ariaLabel"
      :aria-describedby="ariaDescribedby"
      :disabled="disabled"
      :type="type"
      @click="handleClick"
      @keydown="handleKeydown"
    >
      <span class="relative z-10 font-medium">
        {{ text }}
      </span>
    </button>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  interface Props {
    /** Texte affiché sur le bouton */
    text: string;
    /** URL de destination (si c'est un lien) */
    link?: string;
    /** Couleur du bouton */
    color?: 'primary' | 'secondary';
    /** Target du lien */
    target?: '_blank' | '_self';
    /** Type du bouton (si ce n'est pas un lien) */
    type?: 'button' | 'submit' | 'reset';
    /** État désactivé */
    disabled?: boolean;
    /** Libellé accessible personnalisé */
    ariaLabel?: string;
    /** ID de l'élément qui décrit ce bouton */
    ariaDescribedby?: string;
    /** Taille du bouton */
    size?: 'sm' | 'md' | 'lg';
  }
  
  const props = withDefaults(defineProps<Props>(), {
    color: 'primary',
    target: '_self',
    type: 'button',
    disabled: false,
    size: 'md'
  });
  
  const emit = defineEmits<{
    click: [event: MouseEvent];
  }>();
  
  // Détermine si c'est un lien externe
  const isExternalLink = computed(() => {
    if (!props.link) return false;
    return props.target === '_blank' || 
           props.link.startsWith('http') || 
           props.link.startsWith('mailto:') || 
           props.link.startsWith('tel:');
  });
  
  // Classes CSS du bouton avec Tailwind et l'effet d'ombre original
  const buttonClasses = computed(() => {
    const baseClasses = [
      // Structure de base
      'group',
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'rounded-md',
      'border',
      'font-medium',
      'transition-all',
      'duration-300',
      'ease-in-out',
      
      // Accessibilité
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'focus:ring-purple-500',
      'focus-visible:ring-2',
      
      // États désactivés
      'disabled:opacity-50',
      'disabled:cursor-not-allowed',
      'disabled:pointer-events-none',
      
      // Effet d'ombre décalée (pseudo-élément before)
      "before:content-['']",
      'before:absolute',
      'before:left-2',
      'before:right-0', 
      'before:top-1',
      'before:-z-10',
      'before:h-[calc(100%+2px)]',
      'before:w-full',
      'before:rounded',
      'before:transition-all',
      'before:duration-300',
      'before:ease-in-out'
    ];
    
    // Classes de couleur avec les couleurs originales
    const colorClasses = {
      primary: [
        'border-[#5A3B5D]',
        'text-black',
        'bg-transparent',
        'hover:bg-white',
        'before:bg-[#F2EBF4]',
        'hover:before:bg-[#F2EBF4]',
        'focus:before:bg-[#E8D5EA]',
        'active:bg-gray-50'
      ],
      secondary: [
        'border-[#5A3B5D]',
        'text-black',
        'bg-transparent',
        'hover:bg-white',
        'before:bg-[#FFC800]',
        'hover:before:bg-[#FFD633]',
        'focus:before:bg-[#E6B500]',
        'active:bg-yellow-50'
      ]
    };
    
    // Classes de taille
    const sizeClasses = {
      sm: ['px-4', 'py-1', 'text-sm'],
      md: ['px-6', 'py-2', 'text-base'],
      lg: ['px-8', 'py-3', 'text-lg']
    };
    
    return [
      ...baseClasses,
      ...colorClasses[props.color],
      ...sizeClasses[props.size]
    ];
  });
  
  // Libellé accessible
  const ariaLabel = computed(() => {
    if (props.ariaLabel) return props.ariaLabel;
    
    if (isExternalLink.value) {
      return `${props.text} (ouvre dans un nouvel onglet)`;
    }
    
    return undefined;
  });
  
  // Gestionnaire de clic
  const handleClick = (event: MouseEvent) => {
    if (props.disabled) {
      event.preventDefault();
      return;
    }
    
    emit('click', event);
  };
  
  // Gestionnaire de touches pour l'accessibilité
  const handleKeydown = (event: KeyboardEvent) => {
    // Pour les liens, support du space bar
    if (props.link && event.key === ' ') {
      event.preventDefault();
      (event.target as HTMLElement).click();
    }
  };
  </script>
  
  <style scoped>
  /* Styles uniquement pour les propriétés non supportées par Tailwind */
  
  /* Support des préférences de mouvement réduit */
  @media (prefers-reduced-motion: reduce) {
    .group {
      transition: none !important;
    }
    
    .group::before {
      transition: none !important;
    }
    
    .group * {
      transition: none !important;
    }
  }
  
  /* Animation de focus pour l'accessibilité */
  @media (prefers-reduced-motion: no-preference) {
    .group:focus-visible::before {
      animation: pulse 0.5s ease-in-out;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
  }
  </style>


<!-- Bouton simple -->
<!-- <Button text="Cliquer ici" @click="maFonction" /> -->

<!-- Lien interne -->
<!-- <Button text="Accueil" link="/" /> -->

<!-- Lien externe -->
<!-- <Button text="Google" link="https://google.com" target="_blank" /> -->

<!-- Variantes -->
<!-- <Button text="Primaire" color="primary" size="lg" />
<Button text="Secondaire" color="secondary" size="sm" /> -->

<!-- Bouton de formulaire -->
<!-- <Button text="Valider" type="submit" />
<Button text="Annuler" disabled /> -->