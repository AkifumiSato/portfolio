import * as React from 'react'
import styled from 'styled-components'
import { shadow } from '../../../styles/color'
import ContactForm, { ContactFormProps } from '../../organisms/ContactForm'
import Layout from '../../organisms/New/Layout'

const Wrapper = styled.div`
  box-shadow: ${shadow.large};
  border-radius: 5px;
  padding: 50px;
  margin: 0 auto;
  width: 600px;

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    padding: 30px;
    width: 100%;
  }
`

const ContactPage: React.FC<ContactFormProps> = (props) => (
  <Layout title="Contact">
    <Wrapper>
      <ContactForm {...props} />
    </Wrapper>
  </Layout>
)

export default ContactPage
