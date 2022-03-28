import { useHistory } from 'react-router-dom'
import { createContext, useState, useEffect, useContext } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const history = useHistory()
  const [showAlert, setShowAlert] = useState(false)
  const [alertText, setAlertText] = useState()

  useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => {
      setShowAlert(false)
    })
    // cleanup the listener on unmount
    return unlisten
  }, [])

  return (
    <AppContext.Provider
      value={{ showAlert, alertText, setShowAlert, setAlertText }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const value = useContext(AppContext)
  if (value === undefined) throw new Error()
  return value
}
