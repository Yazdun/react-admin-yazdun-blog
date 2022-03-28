import { Container, Loading } from '../../elements'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks'
import { GET_ALL_POSTS } from '../../services'
import { PostCard } from '../../components'

export const Drafts = () => {
  const [posts, setPosts] = useState([])
  const { xGet, loading } = useFetch()

  const handleData = data => setPosts(data.posts)

  useEffect(() => {
    xGet(GET_ALL_POSTS(true), handleData)
  }, [])

  if (loading) {
    return <Loading center />
  }

  return (
    <Container>
      {posts.map(post => {
        const { _id: key } = post
        return <PostCard post={post} key={key} />
      })}
    </Container>
  )
}
