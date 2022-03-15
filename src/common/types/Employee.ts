import { TypeContentfulAsset } from './Contentful'

export interface TypeEmployee {
  name: string
  role: string
  slug: string
  location: string
  loveAboutDesign: string
  favoriteLocalMeal: string
  favoritePlaceToTravel: string
  secretPower: string
  coffeeOrTea: string
  findInspiration: string
  illustration: TypeContentfulAsset
  headshot: TypeContentfulAsset
}
