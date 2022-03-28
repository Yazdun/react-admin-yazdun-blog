import s from './styles.module.scss'
import cn from 'classnames'

export const Loading = ({ transparent, center }) => {
  return (
    <svg className={cn(s.spinner, center && s.center)} viewBox="0 0 50 50">
      <circle
        className={cn(s.path, transparent && s.transparent)}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  )
}
