export default async function loadPolyfills() {
  if (!window.IntersectionObserver) {
    console.log('Intersection observer not supported')
    await import('intersection-observer')
  } else {
    console.log('Intersection Observer available.')
  }
}
