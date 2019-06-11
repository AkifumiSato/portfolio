import * as React from 'react'
import BaseInput from '../../molecules/CustomInput'
import BaseTextArea from '../../molecules/CustomTextarea'
import styled from 'styled-components'
import { ralewayMixin } from '../../../styles/font'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

const Button = styled.button`
    background-color: #00C5B2;
    border: 1px solid #00C5B2;
    border-radius: 3px;
    color: #fff;
    display: block;
    ${ ralewayMixin };
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    padding: 20px 0;
    transition: .3s;
    width: 200px;
    &:hover {
      box-shadow: 0 4px 24px rgba(0,0,0,.3);
      opacity: 0.8;
    }
`

interface IFormObject {
  value: string;
  error: string;
}

interface IContactForm {
  action: string;
  name: IFormObject;
  email: IFormObject;
  comment: IFormObject;
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  onBlurNameInput: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlurEmailInput: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlurCommentText: (e: React.FormEvent<HTMLInputElement>) => void;
}

const ContactForm: React.FC<IContactForm> = (props) => {
  const {
    action,
    name,
    email,
    comment,
    onSubmitForm,
    onBlurNameInput,
    onBlurEmailInput,
    onBlurCommentText,
  } = props

  return (
    <form
      name="contact"
      method="post"
      action={ action }
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={ onSubmitForm }
    >
      <div style={ { display: 'none' } }>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>
      <BaseInput
        type='text'
        name='name'
        placeholder='Your name'
        value={ name.value }
        onBlur={ onBlurNameInput }
        error={ name.error }
      />
      <BaseInput
        type='mail'
        name='email'
        placeholder='Email: xxxx@mail.com'
        value={ email.value }
        onBlur={ onBlurEmailInput }
        error={ email.error }
      />
      <BaseTextArea
        value={ comment.value }
        onBlur={ onBlurCommentText }
        error={ comment.error }
      />
      <ButtonWrapper>
        <Button type="submit">Send</Button>
      </ButtonWrapper>
      { /* The `form-name` hidden field is required to support form submissions without JavaScript */ }
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default ContactForm
