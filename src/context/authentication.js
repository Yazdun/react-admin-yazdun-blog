import React, { useState, createContext, useEffect, useContext } from 'react'

export const AuthProviderContext = createContext()
export const AuthProviderContextDispatcher = createContext()

const STORAGE_KEY = {
  TOKEN: 'token',
}

const initialState = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY.TOKEN) || false)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(initialState)

  const logOut = () => {
    localStorage.clear('TOKEN')
    window.location.href = '/'
  }

  useEffect(() => {
    if (token) {
      const data = JSON.stringify(token)
      localStorage.setItem(STORAGE_KEY.TOKEN, data)
    }
  }, [token])

  return (
    <AuthProviderContext.Provider value={token}>
      <AuthProviderContextDispatcher.Provider value={{ setToken, logOut }}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  )
}

export const useAuthContext = () => {
  const value = useContext(AuthProviderContext)
  if (value === undefined) throw new Error()
  return value
}

export const useAuthActions = () => {
  const value = useContext(AuthProviderContextDispatcher)
  if (value === undefined) throw new Error()
  return value
}
