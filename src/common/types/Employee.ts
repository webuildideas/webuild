import { TypeContentfulAsset } from './Contentful'
import { TypeGatsbyImageFluid } from './GatsbyImage'

export interface TypeEmployee {
  id: string
  name: string
  role: string
  slug: string
  location: string
  headshot: TypeGatsbyImageFluid | TypeContentfulAsset
  employeeBioHeroBackground: string
  gender: boolean
  loveAboutDesign: Record<'loveAboutDesign', string>
  favoriteLocalMeal: Record<'favoriteLocalMeal', string>
  favoritePlaceToTravel: Record<'favoritePlaceToTravel', string>
  secretPower: Record<'secretPower', string>
  coffeeOrTea: Record<'coffeeOrTea', string>
  findInspiration: Record<'findInspiration', string>
  illustration: TypeContentfulAsset
  heroIllustration: TypeContentfulAsset
}
