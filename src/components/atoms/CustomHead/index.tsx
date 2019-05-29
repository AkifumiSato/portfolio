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
      <meta name="google-site-verification" content="vQCQ-0lH7yD8IMb3F4dAURg3-kY_unE4XAuySpNshZ8" />
    </Helmet>
  )
}

export default CustomHead
