import { Container, Loading } from '../../elements'
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

  if (loading) {
    return <Loading center />
  }

  if (posts.length < 1) {
    return (
      <Container>
        <h1>There are no published posts</h1>
      </Container>
    )
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
