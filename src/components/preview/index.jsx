import s from './styles.module.scss'
import { IoLogoMarkdown } from 'react-icons/io5'
import { RiCloseLine } from 'react-icons/ri'
import { useState } from 'react'
import Animated from 'react-mount-animation'
import { Container } from '../../elements'
import { Markdown } from '../'

const mountAnimation = `
  0% {
    transform: translateY(-20px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }`

export const Preview = ({ markdown }) => {
  const [show, setShow] = useState(false)

  return (
    <>
      <button className={s.btn} onClick={() => setShow(true)}>
        <IoLogoMarkdown />
        show preview
      </button>

      <Animated.div
        show={show}
        className={s.markdown}
        mountAnim={mountAnimation}
        time={0.2}
      >
        <Container>
          <div className={s.header}>
            <IoLogoMarkdown />
            <button className={s.close} onClick={() => setShow(false)}>
              <RiCloseLine />
            </button>
          </div>
          <Markdown markdown={markdown} />
        </Container>
      </Animated.div>
    </>
  )
}
