import cn from 'classnames'
import s from './styles.module.scss'
import { Container } from '../../elements'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks'
import { GET_ALL_POSTS } from '../../services'
import { PostCard } from '../../components'

export const Dashboard = () => {
  const [posts, setPosts] = useState([])
  const { xGet, loading } = useFetch()

  const handleData = data => setPosts(data.posts)

  useEffect(() => {
    xGet(GET_ALL_POSTS(false), handleData)
  }, [])

  return (
    <Container>
      {posts.map(post => {
        const { _id: key } = post
        return <PostCard post={post} key={key} />
      })}
    </Container>
  )
}
