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
  loveAboutDesign: Record<string, unknown>
  favoriteLocalMeal: Record<string, unknown>
  favoritePlaceToTravel: Record<string, unknown>
  secretPower: Record<string, unknown>
  coffeeOrTea: Record<string, unknown>
  findInspiration: Record<string, unknown>
  illustration: TypeContentfulAsset
  heroIllustration: TypeContentfulAsset
}
