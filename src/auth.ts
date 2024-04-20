import { readUser, updateUser } from 'rc9'

export function setToken(token: string) {
  updateUser({ 'github.token': token }, '.goffrc')
}

export function getToken(): string | undefined {
  return readUser('.goffrc')?.github?.token
}
