import { NF_COOKIE } from '../constants/newfangled'

export const getNfCookie = () => {
  const cookie = document.cookie.match(`(^|;) ?${NF_COOKIE}=([^;]*)(;|$)`)
  return cookie ? cookie[2] : null
}
