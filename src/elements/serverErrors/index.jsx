import { Error } from '../error'
import s from './styles.module.scss'

export const ServerErrors = ({ errors }) => {
  return (
    <div className={s.errors}>
      {errors?.map((error, index) => {
        return <Error key={index} message={error} />
      })}
    </div>
  )
}
