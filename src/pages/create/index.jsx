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

export const Create = () => {
  const methods = useForm()

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => console.log(data))}>
          <div className={s.fields}>
            <Input {...TitleInput} />
            <Input {...descriptionInput} />
            <Input {...KeywordsInput} />
            <Input {...ImageInput} />
            <Input {...UrlInput('twitter')} />
            <Input {...UrlInput('codesandbox')} />
            <Input {...UrlInput('codepen')} />
            <Input {...UrlInput('youtube')} />
            <Textarea {...ContentInput} styles={s.textarea} />
          </div>

          <div className={s.buttons}>
            <Button active>
              <BiRocket />
              publish
            </Button>
            <Button>
              <BiCloud />
              draft
            </Button>
          </div>
        </form>
      </FormProvider>
    </Container>
  )
}
