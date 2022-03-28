import { useFetch } from '../../hooks'
import { Button, Input, ServerErrors, Textarea } from '../../elements'
import s from './styles.module.scss'
import { useForm, FormProvider } from 'react-hook-form'
import {
  TitleInput,
  descriptionInput,
  ContentInput,
  KeywordsInput,
  ImageInput,
  UrlInput,
  isError,
} from '../../utils'
import { BiRocket, BiCloud } from 'react-icons/bi'
import { Preview } from '../'
import { useState } from 'react'
import { CREATE_POST } from '../../services'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const Post = () => {
  const methods = useForm()
  const [markdown, setMarkdown] = useState()
  const { xPost, xPatch, loading, serverErrors } = useFetch()
  const history = useHistory()
  const handlePost = () => history.push('/dashboard')

  return (
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

        <ServerErrors errors={serverErrors} />

        <div className={s.buttons}>
          <Button
            active
            onClick={methods.handleSubmit(data =>
              xPost(CREATE_POST, data, handlePost),
            )}
            disable={loading || isError(methods.formState.errors)}
            loading={loading}
          >
            <BiRocket />
            publish
          </Button>
          <Button
            onClick={() => console.log(markdown)}
            disable={loading || isError(methods.formState.errors)}
            loading={loading}
          >
            <BiCloud />
            draft
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
