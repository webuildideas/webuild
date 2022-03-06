// Packages
import React from 'react'
import dayjs from 'dayjs'
import Img from 'gatsby-image'

// Common
import { TypeAuthor } from '@common/types/Author'

interface Props {
  author: TypeAuthor
  publishDate?: string
  estReadTime?: number
}

const authorStyle = { width: '50px', height: '50px' }
const authorImgStyle = { marginTop: 0, marginBottom: 0 }

const Author = ({ author, estReadTime, publishDate }: Props) => {
  return (
    <div className="flex items-center mt-6">
      <Img
        alt={`${author.name} Headshot`}
        className="rounded-full mr-4 inline-block"
        durationFadeIn={150}
        fadeIn
        fixed={author.headshot.fixed}
        imgStyle={authorImgStyle}
        style={authorStyle}
      />
      <div>
        <p key={`${author.name}`} className="text-body">
          {author.name}
        </p>
        {publishDate ? (
          <p className="text-caption">
            {dayjs(publishDate).format('MMMM DD, YYYY')}{' '}
            {estReadTime ? <span>| {estReadTime} minute read</span> : null}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default Author
