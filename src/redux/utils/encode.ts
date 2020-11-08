type Encode = {
  [key: string]: string
}

export const encode = (data: Encode) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
