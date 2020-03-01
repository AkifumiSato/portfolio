import * as React from 'react'
import styled from 'styled-components'
import MainTitle from '../../atoms/MainTitle'
import ContactForm, { IContactForm } from '../../organisms/ContactForm'
import Layout from '../../organisms/Layout'
import CommonSetting from '../hoc/CommonSetting'

const Wrapper = styled.div`
  box-shadow: 0 4px 24px rgba(0,0,0,.15);
  padding: 50px;
  margin: 50px auto 0;
  width: 600px;

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
  }

`

export type Props = {
  form: IContactForm
}

const ContactPage: React.FC<Props> = ({ form }) => (
  <Layout>
    <MainTitle>Contact</MainTitle>
    <Wrapper>
      <ContactForm { ...form } />
    </Wrapper>
  </Layout>
)


export default CommonSetting<Props>(ContactPage)
