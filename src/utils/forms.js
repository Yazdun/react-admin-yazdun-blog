export const UsernameInput = {
  name: 'username',
  label: 'username',
  type: 'text',
  id: 'username',
  placeholder: 'e.g. admin',
  validation: {
    required: {
      value: true,
      message: 'username is required',
    },
  },
}

export const PasswordInput = {
  name: 'password',
  label: 'password',
  type: 'password',
  id: 'password',
  placeholder: 'e.g password',
  validation: {
    required: {
      value: true,
      message: 'password is required',
    },
  },
}
