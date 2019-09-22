export const callProjectHuddle = () => {
  const d = document
  const t = 'script'
  const g = '//webuild.io/?p=3769&ph_apikey'
  const ph = d.createElement(t)
  const s = d.getElementsByTagName(t)[0]
  ph.type = 'text/javascript'
  ph.async = true
  ph.charset = 'UTF-8'
  ph.src = `${g}&v=${new Date().getTime()}`
  s.parentNode.insertBefore(ph, s)
}
