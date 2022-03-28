import s from './styles.module.scss'
import ReactTimeAgo from 'react-time-ago'
import { Link } from 'react-router-dom'
import { BsCalendarEvent } from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi'

export const PostCard = ({ post }) => {
  const { image, _id, title, description, createdAt: date, isDraft } = post
  return (
    <div className={s.card}>
      <img className={s.img} src={image} alt={title} />

      <div className={s.text}>
        <h2>{title}</h2>
        <p>{description}</p>

        <div className={s.sub}>
          <p className={s.subtitle}>
            {isDraft ? (
              'drafted'
            ) : (
              <>
                <BiBadgeCheck />
                published
              </>
            )}
          </p>
          <p className={s.subtitle}>
            <BsCalendarEvent />
            <ReactTimeAgo date={date} locale="en-US" />
          </p>
          <Link className={s.link} to={`/edit/${_id}`}>
            ➜ Edit this article
          </Link>
        </div>
      </div>
    </div>
  )
}
