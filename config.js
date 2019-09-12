import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.SPACE_ID,
  environment: process.env.NODE_ENV === 'production' ? 'master' : 'staging',
  accessToken:
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_ACCESS_TOKEN
      : process.env.STAGING_ACCESS_TOKEN,
})
