import s from './styles.module.scss'
import { useFormContext } from 'react-hook-form'
import { filterError, isError } from '../../utils'
import cn from 'classnames'
import { Error } from '../'

export const Textarea = ({
  type,
  id,
  name,
  placeholder,
  validation,
  label,
  styles,
  onChange,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const e = filterError({ errors, name })
  const isErr = isError(e)

  return (
    <div className={cn(s.wrapper, isErr && s.error, styles)}>
      <label className={s.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        type={type}
        id={id}
        name={name}
        className={cn(s.input, s.textarea)}
        placeholder={placeholder}
        {...register(`${name}`, {
          ...validation,
          onChange: e => onChange && onChange(e.target.value),
        })}
      ></textarea>
      {isErr && <Error message={e.error?.message} />}
    </div>
  )
}
