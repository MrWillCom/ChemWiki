import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'

function useCookie(key, initialValue, parser) {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    Cookies.get(key) ? setState(Cookies.get(key)) : null
  }, [])

  function setCookie(value, options) {
    // parser does not support async methods
    value = typeof parser === 'function' ? parser(value) : value
    setState(value)
    Cookies.set(key, value, options)
  }

  return [state, setCookie]
}

export default useCookie
