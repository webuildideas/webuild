import { DefaultValue } from 'recoil'

const useLocalStorage = (key: string) => ({
  setSelf,
  onSet
}: {
  setSelf: (value: any) => void
  onSet: (value: any) => void
}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue !== null) {
    setSelf(JSON.parse(savedValue))
  }

  onSet((newValue: any) => {
    if (newValue instanceof DefaultValue) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(newValue))
    }
  })
}

export default useLocalStorage
