import cn from 'classnames'
import s from './styles.module.scss'
import { Container, Loading } from '../../elements'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks'
import { GET_POST } from '../../services'
import { PostForm } from '../../components'

export const Edit = () => {
  const [post, setPost] = useState()
  const { id } = useParams()
  const { xGet, loading } = useFetch()

  const handlePost = data => setPost(data.post)

  useEffect(() => {
    xGet(GET_POST(id), handlePost)
  }, [id])

  if (loading) {
    return <Loading center />
  }

  return (
    <Container>
      <PostForm updateMode postId={id} formData={post} />
    </Container>
  )
}
