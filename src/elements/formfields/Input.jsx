import s from './styles.module.scss'
import { useFormContext } from 'react-hook-form'
import { filterError, isError } from '../../utils'
import cn from 'classnames'
import { Error } from '../'

export const Input = ({
  type,
  id,
  name,
  placeholder,
  validation,
  label,
  styles,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const e = filterError({ errors, name })
  const isErr = isError(e)

  return (
    <div className={cn(s.wrapper, isErr && s.error)}>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className={cn(s.input)}
        placeholder={placeholder}
        {...register(`${name}`, validation)}
      />
      {isErr && <Error message={e.error?.message} />}
    </div>
  )
}
