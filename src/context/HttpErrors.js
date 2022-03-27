import React from 'react'
import { useHistory } from 'react-router-dom'
import { createContext, useState, useEffect, useContext } from 'react'
import { useAuthContext, useAuthActions } from './'
import { Http } from '../pages'

const HttpErrorsContext = createContext()

export const HttpErrors = ({ children }) => {
  const history = useHistory()
  const { logOut } = useAuthActions()
  const isLoggedIn = useAuthContext()
  const [errorStatusCode, setErrorStatusCode] = useState()

  const errorHandler = statusCode => {
    setErrorStatusCode(statusCode)
  }

  useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => {
      errorHandler(undefined)
    })
    // cleanup the listener on unmount
    return unlisten
  }, [])

  const renderContent = () => {
    switch (true) {
      case errorStatusCode === 401:
        if (isLoggedIn) return logOut()
        return children

      case errorStatusCode === 404:
        return (
          <Http
            title="404 ! Not found"
            info="this content either doesn't exist or has been deleted"
            action
          />
        )

      case errorStatusCode >= 500:
        return (
          <Http
            title="500 ! Our fault"
            info="there is a problem within our servers, we are looking into it"
          />
        )

      case errorStatusCode === 'NETWORK':
        return (
          <Http
            title="network error"
            info="request is failed, something wrong with your network"
          />
        )

      default:
        return children
    }
  }

  return (
    <HttpErrorsContext.Provider value={{ errorHandler, errorStatusCode }}>
      {renderContent()}
    </HttpErrorsContext.Provider>
  )
}

export const useHttpErrors = () => {
  const value = useContext(HttpErrorsContext)
  if (value === undefined) throw new Error()
  return value
}
