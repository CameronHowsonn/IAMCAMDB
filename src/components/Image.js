import { useRef } from 'react'
import useOnScreen from './../hooks/on-screen'

const Image = ({ src, alt, className }) => {
  const ref = useRef()
  const onScreen = useOnScreen(ref)

  if (onScreen) {
    return <img src={src} alt={alt} loading="lazy" ref={ref} className={ref} />
  } else {
    return true
  }
}

export default Image
