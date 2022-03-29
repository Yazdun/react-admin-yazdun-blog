import { useHistory } from 'react-router-dom'
import { createContext, useState, useEffect, useContext } from 'react'
import { useFetch } from '../hooks'
import { GET_STATUS } from '../services'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const history = useHistory()
  const [showAlert, setShowAlert] = useState(false)
  const [alertText, setAlertText] = useState()
  const { xGet } = useFetch()

  const [status, setStatus] = useState({
    draftsCount: 0,
    messagesCount: 0,
  })
  const { draftsCount, messagesCount } = status
  const handleStatus = data => setStatus(data.status)
  const resetMessagesCount = () => setStatus({ ...status, messagesCount: 0 })
  const increaseDrafts = () =>
    setStatus({ ...status, draftsCount: draftsCount + 1 })

  const decreaseDrafts = () =>
    setStatus({ ...status, draftsCount: draftsCount - 1 })

  useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => {
      setShowAlert(false)
    })
    xGet(GET_STATUS, handleStatus)
    // cleanup the listener on unmount
    return unlisten
  }, [])

  return (
    <AppContext.Provider
      value={{
        showAlert,
        alertText,
        draftsCount,
        messagesCount,
        setShowAlert,
        setAlertText,
        resetMessagesCount,
        increaseDrafts,
        decreaseDrafts,
      }}
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
