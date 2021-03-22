// Packages
import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from 'react-share'

// Icons
import FbIcon from '@static/svgs/common/logos/facebook-filled.inline.svg'
import TwitterIcon from '@static/svgs/common/logos/twitter-filled.inline.svg'
import LinkedinIcon from '@static/svgs/common/logos/linkedIn-filled.inline.svg'
import { WithClassName } from '@common/types/Utilities'

interface Props extends WithClassName {
  title: string
  shareUrl?: string
  shareQuote?: string
  hashtags?: string[]
}

const socialContainerStyle = { maxWidth: '130px' }

const SocialShare = ({
  title,
  shareUrl = 'https://webuild.io/',
  shareQuote,
  hashtags,
  className
}: Props) => {
  return (
    <div className={className} style={socialContainerStyle}>
      <LinkedinShareButton
        source="webuild"
        summary={shareQuote}
        title={title}
        url={shareUrl}
      >
        <LinkedinIcon className="text-lavender" height={32} width={32} />
      </LinkedinShareButton>
      <FacebookShareButton quote={shareQuote} url={shareUrl}>
        <FbIcon className="text-lavender" height={32} width={32} />
      </FacebookShareButton>
      <TwitterShareButton
        hashtags={hashtags}
        title={shareQuote}
        url={shareUrl}
        via="wearewebuild"
      >
        <TwitterIcon className="text-lavender" height={32} width={32} />
      </TwitterShareButton>
    </div>
  )
}

export default SocialShare
