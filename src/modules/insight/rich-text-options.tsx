// Packages
import React from 'react'
import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

export const blocksOptions: Options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="Insight-copy Insight-h2 text-h2">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="Insight-copy Insight-h3 text-h3 font-extrabold">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="Insight-copy Insight-h4 text-h4">{children}</h4>
    ),
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="Insight-copy Insight-paragraph text-body">{children}</p>
    ),
    [BLOCKS.QUOTE]: (_, children) => {
      return (
        <blockquote className="Insight-copy Insight-blockquote text-h2">
          {children}
        </blockquote>
      )
    },
    [INLINES.HYPERLINK]: ({ data }, children) => {
      return (
        <a href={data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
  }
}
