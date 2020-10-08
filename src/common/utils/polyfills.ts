export default async function loadPolyfills() {
  if (!window.IntersectionObserver) {
    await import('intersection-observer')
  }
}
