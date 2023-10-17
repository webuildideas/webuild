/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { gsap } from 'gsap'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
// import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import NextArrow from '@static/svgs/fancy-arrow-right.inline.svg'
import LeftArrow from '@static/svgs/fancy-arrow-left.inline.svg'
import { GatsbyImage } from "gatsby-plugin-image";
import './styles/testimonial-slider.css'

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="text-body text-center text-currentColor font-light mt-6">
        {children}
      </p>
    )
  },
  renderMark: {
    [MARKS.BOLD]: (text) => <span className="font-extrabold">{text}</span>
  }
}

export default function TestimonialSlider({
  testimonials,
  color = 'blueRibbon',
  logoClasses = '',
  buttonClasses = ''
}) {
  const testimonialRef = useRef(null)
  const quotesRef = useRef(null)
  const peopleRef = useRef(null)
  const navRef = useRef(null)

  useEffect(() => {
    const testimonial = testimonialRef.current
    quotesRef.current = [...testimonial.querySelectorAll('.testimonial')]
    peopleRef.current = [...testimonial.querySelectorAll('.person-info')]

    quotesRef.current.forEach((quote) => {
      if (!quote.classList.contains('active')) {
        gsap.set(quote, { autoAlpha: 0 })
      }
    })

    peopleRef.current.forEach((person) => {
      if (!person.classList.contains('active')) {
        gsap.set(person, { autoAlpha: 0 })
      }
    })
  }, [])

  function goToNextSlide(slideOut, slideIn, button) {
    navRef.current.classList.add('pointer-events-none')
    const tl = gsap.timeline({
      ease: 'expo.out',
      onComplete: () => {
        slideOut.quote.classList.remove('active')
        slideOut.person.classList.remove('active')
        slideIn.quote.classList.add('active')
        slideIn.person.classList.add('active')
        navRef.current.classList.remove('pointer-events-none')
      }
    })

    tl.to(testimonialRef.current, { '--clip': 'inset(0 100% 0 0)' })
      .to(
        [slideOut.quote, slideOut.person],
        {
          autoAlpha: 0,
          duration: 0.4,
          ease: 'expo.out'
        },
        0.1
      )
      .to([slideIn.quote, slideIn.person], {
        autoAlpha: 1,
        duration: 0.4,
        ease: 'expo.out'
      })
      .to(testimonialRef.current, { '--clip': 'inset(0 0 0 0)' }, 0.4)
  }

  function handleNextSlideClick() {
    const currentQuote = testimonialRef.current.querySelector(
      '.testimonial.active'
    )
    const currentPerson = testimonialRef.current.querySelector(
      '.person-info.active'
    )

    const slideOut = {
      quote: currentQuote,
      person: currentPerson
    }
    const slideIn = {
      quote: currentQuote?.nextElementSibling || quotesRef.current[0],
      person: currentPerson?.nextElementSibling || peopleRef.current[0]
    }
    goToNextSlide(slideOut, slideIn)
  }

  function handlePrevSlideClick() {
    const currentQuote = testimonialRef.current.querySelector(
      '.testimonial.active'
    )
    const currentPerson = testimonialRef.current.querySelector(
      '.person-info.active'
    )

    const slideOut = {
      quote: currentQuote,
      person: currentPerson
    }
    const slideIn = {
      quote:
        currentQuote?.previousElementSibling ||
        quotesRef.current[quotesRef.current.length - 1],
      person:
        currentPerson?.previousElementSibling ||
        peopleRef.current[peopleRef.current.length - 1]
    }
    goToNextSlide(slideOut, slideIn)
  }

  return (
    <div
      ref={testimonialRef}
      className={`testimonial-slider max-w-6xl mx-auto px-6 xl:px-0 text-${color}`}
    >
      <div className="testimonials my-14 max-w-xl mx-auto md:my-20 lg:my-40 grid place-items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.company}
            className={index === 0 ? `testimonial active` : `testimonial`}
            testimonail-index={index}
          >
            {testimonial?.companyLogo ? (
              <div
                className={`flex justify-center w-1/3 mx-auto filter ${logoClasses}`}
              >
                <img
                  alt={testimonial.companyLogo.file.fileName}
                  className="w-full h-full object-contain"
                  src={testimonial.companyLogo.file.url}
                />
              </div>
            ) : null}
            {testimonial.quoteShort
              ? renderRichText(testimonial.quoteShort, richTextOptions)
              : null}
            {testimonial?.caseStudy?.slug ? (
              <div className="flex items-center">
                <AniLink
                  bg="#F3F3F3"
                  className={`mt-8 rounded-full border border-${color} border-solid py-6 px-10 inline-flex mx-auto items-center justify-center font-light text-lg transition duration-300 ease-in-out lg:hover:bg-blueRibbon lg:hover:text-white ${buttonClasses}`}
                  cover
                  direction="right"
                  duration={1.5}
                  to={`/case-studies/${testimonial?.caseStudy.slug}/`}
                >
                  <span className="mt-1">View the case study</span>
                  <svg
                    className="w-8 h-auto ml-4"
                    fill="none"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M24.2753 7.33331C24.2753 11.6662 27.7337 15.1787 32 15.1787V15.4583V15.7379V16.2621V16.5416V16.8212C27.7338 16.8212 24.2753 20.3337 24.2753 24.6666H23.2086C23.2086 21.0582 25.3163 17.9497 28.3495 16.5416L0 16.5416V15.4583L28.3495 15.4583C25.3163 14.0503 23.2086 10.9418 23.2086 7.33331H24.2753Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </AniLink>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="md:flex items-center gap-x-22">
        <div className="people flex-1 grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={
                index === 0
                  ? `person-info text-${color} font-light text-center md:flex items-center justify-between active`
                  : `person-info text-${color} font-light text-center md:flex items-center justify-between `
              }
              perosn-index={index}
            >
              <GatsbyImage
                image={testimonial.childImageSharp.gatsbyImageData}
                className="w-22 h-auto m-auto md:m-0" />
              <div className={`hidden md:block h-px bg-${color} flex-1`} />
              <div className="mt-4 md:ml-12">
                <p className="mb-2">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={navRef}
          className="mt-14 flex justify-center items-center gap-x-4 md:mt-0"
        >
          <div
            className={`next-btn border-1 cursor-pointer border-solid border-${color} rounded-full w-22 h-22 p-7 ${buttonClasses}`}
            onClick={handlePrevSlideClick}
            role="button"
          >
            <LeftArrow />
          </div>
          <div
            className={`next-btn border-1 cursor-pointer border-solid border-${color} rounded-full w-22 h-22 p-7 ${buttonClasses}`}
            onClick={handleNextSlideClick}
            role="button"
          >
            <NextArrow />
          </div>
        </div>
      </div>
    </div>
  );
}
