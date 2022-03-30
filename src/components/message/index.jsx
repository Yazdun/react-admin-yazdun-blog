import s from './styles.module.scss'
import { AiOutlineUser } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPatchExclamationFill, BsPatchCheckFill } from 'react-icons/bs'
import cn from 'classnames'

export const Message = ({ message }) => {
  const { email, name, message: content, isRead } = message

  return (
    <div className={s.card}>
      <p className={s.item}>
        <AiOutlineUser />
        {name}
      </p>
      <p className={s.item}>
        <HiOutlineMail />
        {email}
      </p>

      <p className={s.content}>{content}</p>
      {isRead ? (
        <BsPatchCheckFill className={cn(s.patch, s.read)} />
      ) : (
        <BsFillPatchExclamationFill className={cn(s.patch, s.new)} />
      )}
    </div>
  )
}
