/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react'

interface Props {
  src: string
  width: string | number
  height: string | number
}

export const VideoPlayer = ({ src, width, height }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    isMounted && (
      <video
        controls
        style={{ width: width, height: height, background: 'black' }}
      >
        <source src={src} type="video/mp4" />
      </video>
    )
  )
}
