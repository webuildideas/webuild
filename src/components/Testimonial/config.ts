export const variants = {
  visible: (i: number) => ({
    opacity: [0, 0.25, 0.4, 0.6, 0.6, 0.6, 0.7, 0.8, 1],
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.25
    }
  }),
  hidden: {
    opacity: 0,
    y: 25
  }
}

export const featureHeadshotVariants = {
  visible: {
    opacity: 1,
    y: '0%',
    transition: {
      ease: 'easeInOut',
      duration: 0.9
    }
  },
  hidden: {
    opacity: 0.75,
    y: '100%'
  }
}

export const headshotVariants = {
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.75
    }
  },
  hidden: {
    opacity: 0,
    width: '100%',
    height: '100%'
  }
}
