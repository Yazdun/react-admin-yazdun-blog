import cn from 'classnames'
import s from './styles.module.scss'
import { Button, Container, Input } from '../../elements'
import { useForm, FormProvider } from 'react-hook-form'
import { UsernameInput, PasswordInput } from '../../utils'
import { AiOutlineLogin } from 'react-icons/ai'
export const Login = () => {
  const methods = useForm()

  return (
    <Container styles={s.container}>
      <FormProvider {...methods}>
        <form>
          <Input {...UsernameInput} />
          <Input {...PasswordInput} />
          <Button active center>
            <AiOutlineLogin />
            log me in
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
