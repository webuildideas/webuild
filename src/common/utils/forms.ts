export const urlEncodeData = (data: { [key: string]: string | number }) => {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')
}
