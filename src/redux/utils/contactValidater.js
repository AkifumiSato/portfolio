const getRequiredError = (value, key) => value.length === 0 ? `${key}は必須です。` : ''

const getMaxLengthError = (value, key, length) => value.length > length ? `${key}は${length}文字までです。` : ''

const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
const getMailAddressFormatError = email => !regexp.test(email) ? 'メールアドレスが不正です。' : ''

export const nameValidate = (value) => getRequiredError(value, '名前') ||
  getMaxLengthError(value, '名前', 100) || ''

export const mailValidate = (value) => getRequiredError(value, 'メールアドレス') ||
  getMaxLengthError(value, 'メールアドレス', 200) ||
  getMailAddressFormatError(value) || ''

export const commentValidate = (value) => getRequiredError(value, 'コメント') ||
  getMaxLengthError(value, 'コメント', 1000) || ''


