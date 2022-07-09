import { useEffect, useMemo, useState } from 'react'

export default function useOnScreen(ref) {
  const [hasIntersected, setHasIntersected] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setHasIntersected(
          hasIntersected => hasIntersected || entry.isIntersecting
        )
      ),
    []
  )

  useEffect(() => {
    if (!hasIntersected) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref, observer, hasIntersected])

  return hasIntersected
}
