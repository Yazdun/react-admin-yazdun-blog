import { MdNearbyError } from 'react-icons/md'
import s from './styles.module.scss'

export const Error = ({ message }) => {
  return (
    <div className={s.err}>
      <MdNearbyError />
      <p>{message}</p>
    </div>
  )
}
