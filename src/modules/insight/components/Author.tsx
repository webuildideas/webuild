import './styles/Author.css'

// Packages
import React from 'react'
import dayjs from 'dayjs'
import { GatsbyImage } from "gatsby-plugin-image";

// Common
import { TypeAuthor } from '@common/types/Author'

interface Props {
  author: TypeAuthor
  publishDate?: string
  estReadTime?: number
  showReadTime?: boolean
}

const authorStyle = { width: '50px', height: '50px' }
const authorImgStyle = { marginTop: 0, marginBottom: 0 }

const Author = ({
  author,
  estReadTime,
  publishDate,
  showReadTime = true
}: Props) => {
  const shouldDisplayReadTime = showReadTime && estReadTime
  return (
    <div className="Author">
      <GatsbyImage
        image={author.childImageSharp.gatsbyImageData}
        alt={`${author.name} Headshot`}
        className="Author__headshot"
        durationFadeIn={150}
        fadeIn
        imgStyle={authorImgStyle}
        style={authorStyle} />
      <div>
        <p key={`${author.name}`} className="text-body">
          {author.name}
        </p>
        {publishDate ? (
          <p className="text-caption">
            {dayjs(publishDate).format('MMMM DD, YYYY')}{' '}
            {shouldDisplayReadTime ? (
              <span>| {estReadTime} minute read</span>
            ) : null}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default Author
