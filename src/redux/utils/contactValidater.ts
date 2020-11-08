const getRequiredError = (value: string, key: string): string =>
  value.length === 0 ? `${key}は必須です。` : ''

const getMaxLengthError = (
  value: string,
  key: string,
  length: number
): string => (value.length > length ? `${key}は${length}文字までです。` : '')

const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
const getMailAddressFormatError = (email: string): string =>
  !regexp.test(email) ? 'メールアドレスが不正です。' : ''

export const nameValidate = (value: string): string =>
  getRequiredError(value, '名前') || getMaxLengthError(value, '名前', 100) || ''

export const mailValidate = (value: string): string =>
  getRequiredError(value, 'メールアドレス') ||
  getMaxLengthError(value, 'メールアドレス', 200) ||
  getMailAddressFormatError(value) ||
  ''

export const commentValidate = (value: string): string =>
  getRequiredError(value, 'コメント') ||
  getMaxLengthError(value, 'コメント', 1000) ||
  ''
