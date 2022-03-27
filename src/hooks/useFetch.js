import { useState } from 'react'
import axios from 'axios'
import '../axios'
import { useHttpErrors } from '../context'

export const useFetch = () => {
  const [loading, setLoading] = useState(false)
  const [serverErrors, setServerErrors] = useState()
  const { errorHandler } = useHttpErrors()

  const catchError = error => {
    if (!error.response) {
      errorHandler('NETWORK', null)
      setLoading(false)
    } else {
      errorHandler(error.response.status)
      setServerErrors(error.response.data.msg.split(','))
      setLoading(false)
      console.log(error)
    }
  }

  const preExecute = () => {
    setLoading(true)
    setServerErrors(undefined)
  }

  // post
  const xPost = async (url, values, fn) => {
    preExecute()
    try {
      await axios
        .post(url, {
          ...values,
        })
        .then(res => fn(res.data))
        .then(() => setLoading(false))
    } catch (error) {
      catchError(error)
    }
  }
  // delete
  const xDelete = async (url, fn) => {
    preExecute()
    try {
      await axios
        .delete(url)
        .then(res => fn(res.data))
        .then(() => setLoading(false))
    } catch (error) {
      catchError(error)
    }
  }
  // patch
  const xPatch = async (url, values, fn) => {
    preExecute()
    try {
      await axios
        .patch(url, {
          ...values,
        })
        .then(res => fn(res.data))
        .then(() => setLoading(false))
    } catch (error) {
      catchError(error)
    }
  }
  // get
  const xGet = async (url, fn) => {
    preExecute()
    try {
      await axios
        .get(url)
        .then(res => fn(res.data))
        .then(() => setLoading(false))
    } catch (error) {
      catchError(error)
    }
  }

  return { xPost, xDelete, xPatch, xGet, loading, serverErrors }
}
