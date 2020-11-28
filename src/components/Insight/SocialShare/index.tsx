import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  EmailShareButton,
  EmailIcon
} from 'react-share'

interface Props {
  title: string
  shareUrl?: string
  shareQuote?: string
  hashtags?: string[]
}

const SocialShare = ({
  title,
  shareUrl = 'https://webuild.io/',
  shareQuote,
  hashtags
}: Props) => {
  const socialContainerStyle = { maxWidth: '160px' }
  return (
    <>
      <h5 className="font-normal">Share This Post</h5>
      <div
        className="flex flex-row justify-between"
        style={socialContainerStyle}
      >
        <FacebookShareButton
          quote={shareQuote}
          resetButtonStyle={false}
          url={shareUrl}
        >
          <FacebookIcon bgStyle={{ fill: '#53536A' }} size={32} />
        </FacebookShareButton>
        <TwitterShareButton
          hashtags={hashtags}
          resetButtonStyle={false}
          title={shareQuote}
          url={shareUrl}
          via="wearewebuild"
        >
          <TwitterIcon bgStyle={{ fill: '#53536A' }} size={32} />
        </TwitterShareButton>
        <LinkedinShareButton
          resetButtonStyle={false}
          source="webuild"
          summary={shareQuote}
          title={title}
          url={shareUrl}
        >
          <LinkedinIcon bgStyle={{ fill: '#53536A' }} size={32} />
        </LinkedinShareButton>
        <EmailShareButton
          body={shareQuote}
          resetButtonStyle={false}
          separator=" | "
          subject={`Check out this blog post ${title}`}
          url={shareUrl}
        >
          <EmailIcon bgStyle={{ fill: '#53536A' }} size={32} />
        </EmailShareButton>
      </div>
    </>
  )
}

export default SocialShare
