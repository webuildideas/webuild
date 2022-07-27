/* eslint-disable react/button-has-type */
// Packages
import React from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider'
// import gsap from 'gsap'

// Styles
import '@modules/case-studies/components/styles/CaseStudyBeforeAndAfter.css'

interface Props {
  beforeImage: string
  afterImage: string
  description?: string
  className?: string
}

const CaseStudyBeforeAndAfter = ({
  beforeImage,
  afterImage,
  description,
  className = ''
}: Props) => {
  // useEffect(() => {
  //   const clipItem = document.querySelector('[data-rcs="clip-item"]')
  //   const width = clipItem?.getBoundingClientRect().width
  //   gsap.to(clipItem, {
  //     duration: 1,
  //     // eslint-disable-next-line prettier/prettier
  //     clip: `rect(auto, ${700}px, auto, auto)`
  //   })
  // }, [])
  return (
    <div className={`case-study-baf ${className}`}>
      <div className="case-study-baf__wrapper ">
        <div className="flex justify-between align-center mb-4 lg:mb-2">
          <span className="text-caption text-gray-600">Before</span>
          <span className="text-caption text-gray-600">After</span>
        </div>
        <div className="baf-container rounded-2 overflow-hidden">
          <ReactCompareSlider
            handle={
              <div
                style={{
                  display: 'grid',
                  placeContent: 'center',
                  height: '100%'
                }}
              >
                <div className="w-0.5 h-full bg-lilac absolute top-0 left-1/2 transform -translate-x-1/2" />
                <div
                  className="flex justify-around items-center w-4 h-7 rounded-1 cursor-ew-resize hover:cursor-ew-resize px-1 z-10"
                  style={{
                    background: '#8900FF',
                    borderRadius: '3px'
                  }}
                >
                  <span className="w-px h-4 bg-lavender" />
                  <span className="w-px h-4 bg-lavender" />
                </div>
              </div>
            }
            itemOne={
              <ReactCompareSliderImage alt="Image one" src={beforeImage} />
            }
            itemTwo={
              <ReactCompareSliderImage alt="Image two" src={afterImage} />
            }
            onlyHandleDraggable={true}
            style={{
              display: 'flex',
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        {description && (
          <div
            className="mt-6 md:mt-12"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </div>
  )
}

export default CaseStudyBeforeAndAfter
