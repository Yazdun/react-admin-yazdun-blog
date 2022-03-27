import s from './styles.module.scss'
import { Button, Container, Input, ServerErrors } from '../../elements'
import { useForm, FormProvider } from 'react-hook-form'
import { UsernameInput, PasswordInput, isError } from '../../utils'
import { AiOutlineLogin } from 'react-icons/ai'
import { useFetch } from '../../hooks'
import { useAuthActions, useAuthContext } from '../../context'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { LOGIN } from '../../services'

export const Login = () => {
  const methods = useForm()
  const { xPost, loading, serverErrors } = useFetch()
  const { setToken } = useAuthActions()
  const isLoggedIn = useAuthContext()
  const history = useHistory()

  const handleRequest = data => {
    setToken(data.token)
    history.push('/dashboard')
  }

  return (
    <Container styles={s.container}>
      {isLoggedIn && <Redirect to="/dashboard" />}
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(data =>
            xPost(LOGIN, data, handleRequest),
          )}
        >
          <Input {...UsernameInput} />
          <Input {...PasswordInput} />
          <ServerErrors errors={serverErrors} />
          <Button
            active
            center
            disable={isError(methods.formState.errors) || loading}
            loading={loading}
          >
            <AiOutlineLogin />
            log me in
          </Button>
        </form>
      </FormProvider>
    </Container>
  )
}
