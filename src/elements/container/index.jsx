import s from './styles.module.scss'
import cn from 'classnames'

export const Container = ({ children, noPadding, styles }) => {
  return (
    <div className={cn(s.container, noPadding && s.noPadding, styles)}>
      {children}
    </div>
  )
}
