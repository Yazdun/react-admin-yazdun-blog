import cn from 'classnames'
import s from './styles.module.scss'
import { Container, Loading } from '../../elements'
import { useFetch } from '../../hooks'
import { useEffect, useState } from 'react'
import { GET_ALL_MESSAGES } from '../../services'
import { Message } from '../../components'
import { useAppContext } from '../../context'

export const Messages = () => {
  const { xGet, loading } = useFetch()
  const [msgs, setMsgs] = useState([])
  const { resetMessagesCount } = useAppContext()

  const handleMsg = data => {
    setMsgs(data.messages)
    resetMessagesCount()
  }

  useEffect(() => {
    xGet(GET_ALL_MESSAGES, handleMsg)
  }, [])

  if (loading) {
    return <Loading center />
  }

  return (
    <Container styles={s.container}>
      {msgs.map(msg => {
        const { _id } = msg
        return <Message key={_id} message={msg} />
      })}
    </Container>
  )
}
