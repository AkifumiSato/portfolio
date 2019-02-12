import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styles from './about.module.css'
import MainTitle from '../components/main-title'

class RootIndex extends React.Component {
  render() {
    const siteTitle = `About - ${get(this, 'props.data.site.siteMetadata.title')}`

    return (
      <div>
        <Helmet title={ siteTitle } />
        <MainTitle title="ABOUT" />
        <div>
          <div className={ styles.inner }>
            <h2 className={ styles.sub_title }>I am ...</h2>
            <p className={ styles.text }>初めまして。<br />東京でフロントエンド開発を中心にWeb開発をしているフリーランスの佐藤昭文と申します。<br />サーバーサイド開発からサイト改善の施策立案、分析ログ設計なども対応させていただいております。<br />このportfolioサイトはより自分のことを知ってもらいたいことと、プライベート開発のアウトプットのために技術系Blogと合わせて作成しました。<br />少しでも興味をもっていただけたら、お仕事の相談でなくても結構ですので是非ご連絡ください。</p>
          </div>
          <div className={ styles.inner }>
            <h2 className={ styles.sub_title }>skill</h2>
            <p className={ styles.text }>html5  / pug<br />css3 / scss / css modules / css in js<br />javascript / ECMAScript6 / typescript / node / react / redux / gatsby / vue / vuex / elm<br />php / zendframework / wordpress<br />ruby / ruby on rails<br />other / java / haskell<br />paradigm / OOP / FP / RP / FRP / JAMStack<br />design / sketch / photoshop / illustrator<br />analytics / Google Analytics / Site Catalyst / Big Query<br />etc...</p>
          </div>
          <div className={ styles.inner }>
            <h2 className={ styles.sub_title }>career</h2>
            <p className={ styles.text }>2014 / 04 : 上京しWeb製作会社に入社。ディレクター、コーダーを経験。<br />2015 / 06 : フリーランスのディレクター・コーダーとして独立。<br />~ 現在 : サーバーサイド、デザイン、企画、分析など多岐にわたる業務を行う。</p>
          </div>
          <div className={ styles.inner }>
            <h2 className={ styles.sub_title }>contact</h2>
            <p className={ styles.text }><Link to={ '/contact/' } className={ styles.link }>&#x203A; go to contact</Link></p>
          </div>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
