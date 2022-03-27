import cn from 'classnames'
import s from './styles.module.scss'
import { BiLoaderAlt } from 'react-icons/bi'

export const Button = ({
  children,
  active,
  danger,
  success,
  disable,
  loading,
  styles,
  fullwidth,
  center,
  onClick,
}) => {
  return (
    <button
      disabled={disable || loading}
      className={cn(
        s.btn,
        active && s.active,
        danger && s.danger,
        success && s.success,
        fullwidth && s.fullwidth,
        center && s.center,
        styles,
      )}
      onClick={onClick && onClick}
    >
      {loading ? (
        <>
          <BiLoaderAlt className={s.loading} />
          loading
        </>
      ) : (
        children
      )}
    </button>
  )
}
