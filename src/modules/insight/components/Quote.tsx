import './styles/Quote.css'
import React from 'react'
import { QuoteTypeEnum, TypeQuote } from '@common/types/Quote'
import { classNames } from '@common/utils/classNames'
import { blocksOptions } from '@modules/insight/rich-text-options'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

interface Props {
  quote: TypeQuote
}

const Quote = ({ quote }: Props) => {
  const quoteClassNames = classNames({
    'Insight-blockquote--default': quote.quoteType === QuoteTypeEnum.DEFAULT,
    'Insight-blockquote--sourced': quote.quoteType === QuoteTypeEnum.SOURCED
  })

  return (
    <figure className="Insight-blockquote__container">
      <blockquote className={quoteClassNames}>
        {renderRichText(quote.quote, blocksOptions)}
      </blockquote>
      {quote.source ? (
        <figcaption className="Insight-blockquote__source">
          &mdash; {quote.source}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default Quote
