// Packages
import React, { useCallback } from 'react'
import { animated, useSpring, config } from 'react-spring'
import { useRecoilState } from 'recoil'

// Commons
import { isOverlayNavOpenAtom } from '../../common/store/userInterface/atoms'

const openConfig = {
  top: 'translate(2, 7) rotate(0)',
  center: 'translate(2, 19) rotate(0)',
  bottom: 'translate(2, 31) rotate(0)',
  color: '#0E0E1B'
}

const closedConfig = {
  top: 'translate(7, 32) rotate(-45)',
  center: 'translate(10, 4) rotate(45)',
  bottom: 'translate(7, 32) rotate(-45)',
  color: '#fff'
}

const MenuIcon = () => {
  const [isOverlayNavOpen, setIsOverlayNavOpen] = useRecoilState(
    isOverlayNavOpenAtom
  )

  const handleOnClick = useCallback(
    () => setIsOverlayNavOpen((prevState) => !prevState),
    [setIsOverlayNavOpen]
  )

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { top, center, bottom, color } = useSpring({
    to: isOverlayNavOpen ? closedConfig : openConfig,
    config: config.stiff
  })

  return (
    <animated.svg
      className="Icon MenuIcon"
      fill={color}
      onClick={handleOnClick}
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/animated."
    >
      <animated.rect height="3" transform={top} width="40" />
      <animated.rect height="3" transform={center} width="40" />
      <animated.rect height="3" transform={bottom} width="40" />
    </animated.svg>
  )
}

export default MenuIcon
