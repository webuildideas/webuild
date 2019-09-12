import { client } from '../config'

export const fetchEntries = () =>
  client
    .getEntries()
    .then(response => response.items)
    .catch(console.error)
