// Packages
import React from 'react'
import PropTypes from 'prop-types'

// Components

// Styled Components
import * as S from './style'

const PhotoGrid = ({ photos }) => {
  console.log(photos)
  return (
    <S.PhotoGrid>
      {photos.map((photo, idx) => (
        <S.PhotoItem
          key={`photo-${idx}`}
          alt=""
          data-photo={idx + 1}
          srcSet={photo.fluid.srcSet}
        />
      ))}
    </S.PhotoGrid>
  )
}

PhotoGrid.propTypes = {
  photos: PropTypes.array,
}

export default PhotoGrid
