import { Link } from 'react-router-dom'
import { Container } from '../../elements'
import { links } from './links'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'
import s from './styles.module.scss'
import { useAuthActions, useAuthContext } from '../../context'
import cn from 'classnames'

export const Navigation = () => {
  const { logOut } = useAuthActions()
  const isLoggedIn = useAuthContext()

  return (
    <nav className={cn(s.nav, !isLoggedIn && s.hide)}>
      <Container styles={s.container}>
        <ul className={s.links}>
          {links.map(link => {
            const { title, icon, url, key } = link
            return (
              <li key={key}>
                <Link title={title} to={url}>
                  {icon}
                </Link>
              </li>
            )
          })}
          <li>
            <Link title="messages" to="/messages">
              <BiMessageSquareDetail />
            </Link>
          </li>
          <li className={s.logout}>
            <button className={s.out} onClick={logOut}>
              <AiOutlineLogout />
            </button>
          </li>
        </ul>
      </Container>
    </nav>
  )
}
