import { TypeAuthor } from '@common/types/Author'

export const AUTHOR: TypeAuthor = {
  name: 'Joe Rogan',
  headshot: {
    fixed: {
      width: 50,
      height: 50,
      src: 'headshot-src.jpg',
      srcSet: 'headshot-srcset.jpg'
    }
  }
}
