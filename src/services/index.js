export const LOGIN = '/admin/authentication/login'
export const GET_ALL_POSTS = isDraft => `/admin/posts?isDraft=${isDraft}`
export const GET_POST = id => `/admin/posts/find/${id}`
export const GET_STATUS = '/admin/status'
export const CREATE_POST = '/admin/posts/create'
export const PATCH_POST = id => `/admin/posts/update/${id}`
export const DELETE_POST = () => ``
export const DELETE_MESSAGE = () => ``
