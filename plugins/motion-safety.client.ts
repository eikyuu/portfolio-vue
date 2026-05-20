// Filet de sécurité pour @vueuse/motion : si un élément above-the-fold
// reste bloqué à opacity:0 (race IntersectionObserver à l'hydratation),
// on le force visible après un délai. Les éléments below-the-fold restent
// intacts pour conserver leurs animations au scroll.

const FALLBACK_DELAY_MS = 1500

function revealStuckInViewport() {
  const elements = document.querySelectorAll<HTMLElement>('main *')
  const vh = window.innerHeight
  const vw = window.innerWidth

  elements.forEach((el) => {
    if (el.style.opacity !== '0') return
    const rect = el.getBoundingClientRect()
    const inView = rect.bottom > 0 && rect.top < vh && rect.right > 0 && rect.left < vw
    if (!inView) return
    el.style.opacity = '1'
    el.style.transform = 'none'
  })
}

export default defineNuxtPlugin(() => {
  const schedule = () => window.setTimeout(revealStuckInViewport, FALLBACK_DELAY_MS)

  if (document.readyState === 'complete') {
    schedule()
  } else {
    window.addEventListener('load', schedule, { once: true })
  }

  const router = useRouter()
  router.afterEach(() => schedule())
})
