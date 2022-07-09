import { useRef } from 'react'
import useOnScreen from './../hooks/on-screen'

const Image = ({ src, alt, className }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)

  return (
    <figure ref={ref}>
      {onScreen ? (
        <img src={src && src} alt={alt} loading="lazy" className={className} />
      ) : (
        <></>
      )}
    </figure>
  )
}

export default Image
