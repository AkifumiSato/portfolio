import React from 'react'
import Helmet from 'react-helmet'

export default (props) => {
  const {
    title,
    description = '東京のフロントエンドエンジニア、佐藤昭文のポートフォリオサイトです。',
  } = props

  return (
    <Helmet>
      <html lang="ja" />
      <title>{ title }</title>
      <meta content={ description } name="description" />
    </Helmet>
  )
}

