import clsxm from '@lib/clsxm'
import React from 'react'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

function ShareButtons({
  size = 24,
  color = 'rgba(0,0,0,1)',
  round = true,
  className = '',
  ...others
}: {
  size?: string | number
  round?: boolean
  color?: string
  className?: string
}) {
  const url = window.location.href
  const commonProps = { size, round, bgStyle: { fill: color } }

  return (
    <div className={clsxm('flex gap-2', className)} {...others}>
      <TwitterShareButton url={url}>
        <TwitterIcon {...commonProps} />
      </TwitterShareButton>

      <FacebookShareButton url={url}>
        <FacebookIcon {...commonProps} />
      </FacebookShareButton>

      <InstapaperShareButton url={url}>
        <InstapaperIcon {...commonProps} />
      </InstapaperShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon {...commonProps} />
      </LinkedinShareButton>

      <RedditShareButton url={url}>
        <RedditIcon {...commonProps} />
      </RedditShareButton>

      <EmailShareButton url={url}>
        <EmailIcon {...commonProps} />
      </EmailShareButton>

      <WhatsappShareButton url={url}>
        <WhatsappIcon {...commonProps} />
      </WhatsappShareButton>
    </div>
  )
}

export default ShareButtons
