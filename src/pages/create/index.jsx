import { Button, Container, Input, Textarea } from '../../elements'
import s from './styles.module.scss'
import { useForm, FormProvider } from 'react-hook-form'
import {
  TitleInput,
  descriptionInput,
  ContentInput,
  KeywordsInput,
  ImageInput,
  UrlInput,
} from '../../utils'
import { BiRocket, BiCloud } from 'react-icons/bi'
import { Post, Preview } from '../../components'
import { useState } from 'react'

export const Create = () => {
  const methods = useForm()
  const [markdown, setMarkdown] = useState()

  return (
    <Container>
      <Post />
    </Container>
  )
}
