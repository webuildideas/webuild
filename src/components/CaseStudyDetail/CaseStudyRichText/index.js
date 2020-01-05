// Packages
import React from 'react'
import PropTypes from 'prop-types'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// Components
import CaseStudyCarousel from '../CaseStudyCarousel'

const buildCarouselImgArray = imgArr => {
  console.log(imgArr)
  const carouselImgArr = []
  imgArr.map(i => {
    const {
      fields: { file },
    } = i
    return carouselImgArr.push({
      src: file['en-US'].url,
      srcSet: file['en-US'].url,
    })
  })
  return carouselImgArr
}

const CaseStudyRichText = ({ document }) => {
  const options = {
    renderNode: {
      // eslint-disable-next-line
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { file, title } = node.data.target.fields
        return <img alt={title} src={file['en-US'].url} />
      },
      // eslint-disable-next-line
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        const { images } = node.data.target.fields
        const imgArr = buildCarouselImgArray(images['en-US'])
        return <CaseStudyCarousel images={imgArr} />
      },
    },
  }
  return <div>{documentToReactComponents(document, options)}</div>
}

CaseStudyRichText.propTypes = {
  document: PropTypes.object,
}

export default CaseStudyRichText
