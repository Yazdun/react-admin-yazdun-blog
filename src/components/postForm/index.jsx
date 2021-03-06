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
import { Preview, Modal } from '..'
import { useEffect, useState } from 'react'
import { CREATE_POST, PATCH_POST } from '../../services'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useAppContext } from '../../context'

export const PostForm = ({ updateMode, formData, postId }) => {
  const methods = useForm()
  const [markdown, setMarkdown] = useState()
  const [fields, setFields] = useState(formData || {})
  const { increaseDrafts, decreaseDrafts } = useAppContext()
  const { xPost, xPatch, loading, serverErrors } = useFetch()
  const history = useHistory()
  const { setAlertText, setShowAlert } = useAppContext()

  const handlePost = data => {
    const isDraft = data.post.isDraft
    history.push(isDraft ? '/drafts' : '/dashboard')

    if (formData) {
      isDraft && !formData.isDraft && increaseDrafts()
      !isDraft && formData.isDraft && decreaseDrafts()
    } else {
      isDraft && increaseDrafts()
    }

    setShowAlert(true)
    setAlertText(
      updateMode ? 'post has been updated' : 'post has been submitted',
    )
  }

  useEffect(() => {
    if (updateMode) {
      const {
        title,
        description,
        keywords,
        image,
        twitter,
        codesandbox,
        codepen,
        youtube,
        content,
        github,
      } = fields

      setMarkdown(content)

      const inputs = [
        { name: 'title', value: title },
        { name: 'description', value: description },
        { name: 'keywords', value: keywords },
        { name: 'image', value: image },
        { name: 'twitter', value: twitter },
        { name: 'codesandbox', value: codesandbox },
        { name: 'codepen', value: codepen },
        { name: 'youtube', value: youtube },
        { name: 'github', value: github },
        { name: 'content', value: content },
      ]

      inputs.map(input => {
        const { name, value } = input
        return methods.setValue(name, value)
      })
    }
  }, [])

  return (
    <FormProvider {...methods}>
      <form onSubmit={e => e.preventDefault()}>
        <h1>{updateMode ? 'Update an article' : 'Create an article'}</h1>
        <div className={s.fields}>
          <Input {...TitleInput} />
          <Input {...descriptionInput} />
          <Input {...KeywordsInput} />
          <Input {...ImageInput} />
          <Input {...UrlInput('twitter')} />
          <Input {...UrlInput('codesandbox')} />
          <Input {...UrlInput('codepen')} />
          <Input {...UrlInput('youtube')} />
          <Input {...UrlInput('github')} />

          <div className={s.textarea}>
            <Textarea
              {...ContentInput}
              onChange={markdown => setMarkdown(markdown)}
            />
            <Preview markdown={markdown} />
          </div>
        </div>

        {serverErrors && <ServerErrors errors={serverErrors} />}

        <div className={s.buttons}>
          <Button
            active
            onClick={methods.handleSubmit(data =>
              updateMode
                ? xPatch(
                    PATCH_POST(postId),
                    { ...data, isDraft: false },
                    handlePost,
                  )
                : xPost(CREATE_POST, data, handlePost),
            )}
            disable={loading || isError(methods.formState.errors)}
            loading={loading}
          >
            <BiRocket />
            publish
          </Button>
          <Button
            onClick={methods.handleSubmit(data =>
              updateMode
                ? xPatch(
                    PATCH_POST(postId),
                    { ...data, isDraft: true },
                    handlePost,
                  )
                : xPost(CREATE_POST, { ...data, isDraft: true }, handlePost),
            )}
            disable={loading || isError(methods.formState.errors)}
            loading={loading}
          >
            <BiCloud />
            draft
          </Button>
          {updateMode && <Modal id={postId} isDraft={formData?.isDraft} />}
        </div>
      </form>
    </FormProvider>
  )
}
