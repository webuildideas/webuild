// Packages
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const CaseStudyResult = ({ document }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
  const controls = useAnimation()
  const variants = {
    visible: i => ({
      opacity: 1,
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
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      custom={1}
      initial="hidden"
      style={{ overflow: 'hidden' }}
      variants={variants}
    >
      {documentToReactComponents(document, renderOptions)}
    </motion.div>
  )
}

CaseStudyResult.propTypes = {
  document: PropTypes.object,
}

export default CaseStudyResult
