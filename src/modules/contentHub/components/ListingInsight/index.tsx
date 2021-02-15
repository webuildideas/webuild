// Packages
import { Link } from 'gatsby'
import React, { useRef } from 'react'

// Commons
import { TypeInsight } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'
// import useWindowSize from '@common/hooks/useWindowSize'

// Components
import InsightTags from '@modules/contentHub/components/InsightTags'

// Assets
import listingIllustrationDefaultSrc from '@static/svgs/insights/default-insight-listing.svg'

// Styles
import './style.css'

interface Props extends WithClassName {
  insight: TypeInsight
}

// const TABLET_WINDOW_SIZE = 768

const ListingInsight = ({
  insight: { title, illustration, slug, topics, type }
}: Props) => {
  const listingIllustrationSrc = illustration?.file?.url || illustration?.url
  // const { width } = useWindowSize()
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const illustrationContainerRef = useRef<HTMLDivElement>(null)
  // const [illustrationHeight, setIllustrationHeight] = useState<
  //   | {
  //       height: string
  //     }
  //   | undefined
  // >()

  // useEffect(() => {
  //   const setHeight = setTimeout(() => {
  //     if (
  //       width &&
  //       width >= TABLET_WINDOW_SIZE &&
  //       contentContainerRef?.current
  //     ) {
  //       const contentHeight = contentContainerRef.current.clientHeight
  //       const newIllustrationHeight = contentHeight + 32
  //       setIllustrationHeight({ height: `${newIllustrationHeight}px` })
  //     } else if (illustrationContainerRef?.current) {
  //       illustrationContainerRef.current.style.height = 'auto'
  //     }
  //   }, 350)

  //   return () => clearTimeout(setHeight)
  // }, [contentContainerRef, illustrationContainerRef, width])

  return (
    <article className="ListingInsight mb-16">
      <Link className="ListingInsight-container" to={`/${slug}`}>
        <div
          ref={illustrationContainerRef}
          className="ListingInsight-illustration"
          // style={illustrationHeight && illustrationHeight}
        >
          <img
            alt="listing illustration"
            className="mb-6 md:mb-0 w-full"
            data-testid="listingInsightIllustration"
            src={listingIllustrationSrc || listingIllustrationDefaultSrc}
          />
        </div>

        <div ref={contentContainerRef} className="ListingInsight-content">
          <InsightTags topics={topics} type={type} />
          <h2 className="text-h3 mt-4">{title}</h2>
        </div>
      </Link>
    </article>
  )
}

export default ListingInsight
