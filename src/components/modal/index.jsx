import { Button, ServerErrors } from '../../elements'
import s from './styles.module.scss'
import { useState, useRef, useEffect } from 'react'
import Animated from 'react-mount-animation'
import { mountBackground } from './animations'
import { useFetch } from '../../hooks'
import { DELETE_POST } from '../../services'
import { useHistory } from 'react-router-dom'
import { useAppContext } from '../../context'

export const Modal = ({ id, isDraft }) => {
  const [show, setShow] = useState(false)
  const { xDelete, loading, serverErrors } = useFetch()
  const ref = useRef()
  const history = useHistory()
  const { setShowAlert, setAlertText, decreaseDrafts } = useAppContext()

  const handleDelete = () => {
    isDraft && decreaseDrafts()
    history.push('/dashboard')
    setShowAlert(true)
    setAlertText('post has been deleted')
  }

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [show])

  return (
    <>
      <Button danger onClick={() => setShow(true)}>
        delete
      </Button>

      <Animated.div
        className={s.modal}
        show={show}
        mountAnim={mountBackground}
        time={0.2}
      >
        <div className={s.card} ref={ref}>
          <h2>Delete comment</h2>
          <p>Are you sure to delete this article? cannot be undone later</p>
          <ServerErrors errors={serverErrors} />
          <div className={s.btns}>
            <Button onClick={() => setShow(false)}>no, cancel</Button>
            <Button
              danger
              onClick={() => xDelete(DELETE_POST(id), handleDelete)}
              styles={s.btn}
              loading={loading}
              disable={loading}
            >
              yes, delete
            </Button>
          </div>
        </div>
      </Animated.div>
    </>
  )
}
