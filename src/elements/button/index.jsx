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
