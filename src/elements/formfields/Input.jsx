import s from './styles.module.scss'
import { useFormContext } from 'react-hook-form'
import { filterError, isError } from './helpers'
import cn from 'classnames'

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
    <div className={s.wrapper}>
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
    </div>
  )
}
