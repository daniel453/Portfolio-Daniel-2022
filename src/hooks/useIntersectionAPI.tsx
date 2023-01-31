import React, { RefObject, useEffect, useState } from 'react'

export const useIntersectionApi = (
  ref:RefObject<Element>,
  options:IntersectionObserverInit
  ) => {
  const [isVisible,setIsVisible] = useState(false)

  const FunctionSetVisible:IntersectionObserverCallback = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(FunctionSetVisible,options)
    if(ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  },[])

  return isVisible
}