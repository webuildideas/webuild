// Packages
import React from 'react'
import dayjs from 'dayjs'
import Img from 'gatsby-image'

// Common
import { TypeAuthor } from '@common/types/Author'

interface Props {
  author: TypeAuthor
  publishDate: string
  estReadTime?: number
}

const Author = ({ author, estReadTime, publishDate }: Props) => {
  return (
    <div className="flex items-center mt-6">
      <Img
        alt={`${author.name} Headshot`}
        className="rounded-full mr-4 inline-block"
        durationFadeIn={150}
        fadeIn
        fixed={author.headshot.fixed}
        imgStyle={{ marginTop: 0, marginBottom: 0 }}
      />
      <div>
        <p key={`${author.name}`} className="text-body">
          {author.name}
        </p>
        <p className="text-caption">
          {dayjs(publishDate).format('MMMM DD, YYYY')}{' '}
          {estReadTime ? <span>| {estReadTime} minute read</span> : null}
        </p>
      </div>
    </div>
  )
}

export default Author
