export const getRequiredError = (value, key) => value.length === 0 ? `${key}は必須です。` : ''

export const getMaxLengthError = (value, key, length) => value.length > length ? `${key}は${length}文字までです。` : ''

const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
export const getMailAddressFormatError = email => !regexp.test(email) ? 'メールアドレスが不正です。' : ''
