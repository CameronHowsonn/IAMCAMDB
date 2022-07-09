import { useRef } from 'react'
import useOnScreen from './../hooks/on-screen'

const Image = ({ src, alt, className, figureClass }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)

  return (
    <figure ref={ref} class={figureClass}>
      {onScreen ? (
        <img src={src && src} alt={alt} loading="lazy" className={className} />
      ) : (
        <></>
      )}
    </figure>
  )
}

export default Image
