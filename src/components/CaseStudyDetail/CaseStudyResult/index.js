// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const CaseStudyResult = ({ document }) => {
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true })
  const controls = useAnimation()

  const variants = {
    visible: i => ({
      opacity: [0, 0.25, 0.4, 0.6, 0.6, 0.6, 0.7, 0.8, 1],
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.3,
      },
    }),
    hidden: {
      opacity: 0,
      x: -15,
    },
  }

  const renderOptions = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.HEADING_3]: (node, children) => <Heading>{children}</Heading>,
    },
  }

  // eslint-disable-next-line
  const Paragraph = ({ children }) => (
    <motion.p
      animate={controls}
      custom={1}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.p>
  )

  // eslint-disable-next-line
  const Heading = ({ children }) => (
    <motion.h3
      animate={controls}
      custom={0}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.h3>
  )

  useEffect(() => {
    console.log('RESULTS IN VIEW', inView)
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      {documentToReactComponents(document, renderOptions)}
    </div>
  )
}

CaseStudyResult.propTypes = {
  document: PropTypes.object,
}

export default CaseStudyResult
