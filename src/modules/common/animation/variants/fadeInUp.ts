import { Variants } from 'framer-motion'

const fadeInUpVariants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring'
    }
  },
  hidden: {
    y: 30,
    opacity: 0.1
  }
}

export default fadeInUpVariants
