/* eslint-disable @typescript-eslint/no-unused-vars */
// Packages
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Logo from '@static/svgs/logo.inline.svg'
// Forms
import useOpportunityFormModal from '@modules/forms/hooks/useOpportunityFormModal'

export default function NewFooter() {
  return (
    <footer className="bg-newBlack pt-26 pb-8">
      <div className="footer__wrapper px-6 max-w-6xl m-auto text-white pb-30 border-solid border-b border-gray-700">
        <h2 className="text-h2 font-light w-1/2">
          Ready to <i className="font-crimson italic">get started?</i>
        </h2>
        <p className="font-light text-base w-11/12 mt-8 leading-relaxed">
          Take your product efforts to the next level. Drop us a line.
        </p>
        <button
          className="block flex items-center border border-solid rounded-full font-light px-10 py-7 mt-12 text-gray-100"
          type="button"
        >
          Let's go!
          <svg
            className="w-8 h-auto ml-25"
            fill="none"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M24.2753 7.33331C24.2753 11.6662 27.7337 15.1787 32 15.1787V15.4583V15.7379V16.2621V16.5416V16.8212C27.7338 16.8212 24.2753 20.3337 24.2753 24.6666H23.2086C23.2086 21.0582 25.3163 17.9497 28.3495 16.5416L0 16.5416V15.4583L28.3495 15.4583C25.3163 14.0503 23.2086 10.9418 23.2086 7.33331H24.2753Z"
              fill="#FFFFFF"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="secondary-footer px-6 max-w-6xl m-auto pt-8">
        <Logo className="text-white w-25 h-auto" />
      </div>
    </footer>
  )
}
