import s from './styles.module.scss'
import { CgClose } from 'react-icons/cg'
import { FaBell } from 'react-icons/fa'
import { useAppContext } from '../../context'
import { useEffect, useRef } from 'react'
import cn from 'classnames'

export const Alert = () => {
  const { showAlert, alertText, setShowAlert } = useAppContext()
  const ref = useRef()

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (alert && ref.current && !ref.current.contains(e.target)) {
        setShowAlert(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showAlert])

  return (
    <div className={cn(s.alert, showAlert ? s.show : s.hide)} ref={ref}>
      <button
        disabled={!showAlert}
        className={s.btn}
        onClick={() => setShowAlert(false)}
      >
        <CgClose />
      </button>
      <FaBell className={s.icon} />
      {alertText}
    </div>
  )
}
