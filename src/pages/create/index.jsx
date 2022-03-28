import cn from 'classnames'
import { Button, Container, Input, Textarea } from '../../elements'
import s from './styles.module.scss'
import { useForm, FormProvider } from 'react-hook-form'
import { useFetch } from '../../hooks'
import {
  TitleInput,
  descriptionInput,
  ContentInput,
  KeywordsInput,
  ImageInput,
  UrlInput,
} from '../../utils'
import { BiRocket, BiCloud } from 'react-icons/bi'
import { Preview } from '../../components'
import { useState } from 'react'

export const Create = () => {
  const methods = useForm()
  const [markdown, setMarkdown] = useState()

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={e => e.preventDefault()}>
          <div className={s.fields}>
            <Input {...TitleInput} />
            <Input {...descriptionInput} />
            <Input {...KeywordsInput} />
            <Input {...ImageInput} />
            <Input {...UrlInput('twitter')} />
            <Input {...UrlInput('codesandbox')} />
            <Input {...UrlInput('codepen')} />
            <Input {...UrlInput('youtube')} />
            <div className={s.textarea}>
              <Textarea
                {...ContentInput}
                onChange={markdown => setMarkdown(markdown)}
              />
              <Preview markdown={markdown} />
            </div>
          </div>

          <div className={s.buttons}>
            <Button
              active
              onClick={methods.handleSubmit(data => console.log(data))}
            >
              <BiRocket />
              publish
            </Button>
            <Button onClick={() => console.log(markdown)}>
              <BiCloud />
              draft
            </Button>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}
