import {useEffect } from 'react'
import {throttle} from 'lodash'

const useDocumentScrollThrottled = (callback) => {

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    callback({ currentScrollTop});
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 10)

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled)
    return () => window.removeEventListener('scroll', handleDocumentScrollThrottled)
  })
}

export default useDocumentScrollThrottled