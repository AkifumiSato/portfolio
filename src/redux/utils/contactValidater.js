export const isEmptyString = (string) => string.length === 0

export const isOverLength = (maxLength, string) => string.length > maxLength

const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
export const isNotMailAddress = (email) => !regexp.test(email)
