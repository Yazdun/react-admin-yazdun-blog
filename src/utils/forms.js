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

export const TitleInput = {
  name: 'title',
  label: 'title',
  type: 'text',
  id: 'title',
  placeholder: 'e.g. title',
  validation: {
    required: {
      value: true,
      message: 'title is required',
    },
    minLength: {
      value: 2,
      message: 'min length is 3 characters',
    },
    maxLength: {
      value: 50,
      message: 'max length is 50 characters',
    },
  },
}

export const descriptionInput = {
  name: 'description',
  label: 'description',
  type: 'text',
  id: 'description',
  placeholder: 'e.g. description',
  validation: {
    required: {
      value: true,
      message: 'description is required',
    },
    minLength: {
      value: 2,
      message: 'min length is 2 characters',
    },
  },
}

export const ContentInput = {
  name: 'content',
  label: 'content',
  type: 'text',
  id: 'content',
  placeholder: 'e.g. content',
  validation: {
    required: {
      value: true,
      message: 'content is required',
    },
    minLength: {
      value: 10,
      message: 'min length is 10 characters',
    },
  },
}

export const KeywordsInput = {
  name: 'keywords',
  label: 'keywords',
  type: 'text',
  id: 'keywords',
  placeholder: 'e.g. keywords',
}

export const ImageInput = {
  name: 'image',
  label: 'image',
  type: 'text',
  id: 'image',
  placeholder: 'https://image.com',
  validation: {
    required: {
      value: true,
      message: 'image is required',
    },
    pattern: {
      value:
        /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      message: 'not a valid url',
    },
  },
}

export const UrlInput = header => {
  return {
    name: header,
    label: header,
    type: 'text',
    id: header,
    placeholder: 'https://example.com',
    validation: {
      pattern: {
        value:
          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        message: 'not a valid url',
      },
    },
  }
}
