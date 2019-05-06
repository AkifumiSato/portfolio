import * as React from 'react'
import Helmet from 'react-helmet'

interface IProps {
  title: string;
  description?: string;
}

const CustomHead: React.FC<IProps> = (props) => {
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

export default CustomHead
