import * as React from 'react'
import styled from 'styled-components'
import { ralewayMixin } from '../../../styles/font'
import Input from '../../molecules/Input'
import TextArea from '../../molecules/Textarea'

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

type FormObject = {
  value: string;
  error: string;
}

export type ContactFormProps = {
  name: FormObject
  email: FormObject
  comment: FormObject
  onSubmitForm: (e: React.FormEvent<HTMLFormElement>) => void
  onChangeNameInput: (e: React.FormEvent<HTMLInputElement>) => void
  onChangeEmailInput: (e: React.FormEvent<HTMLInputElement>) => void
  onChangeCommentText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const {
    name,
    email,
    comment,
    onSubmitForm,
    onChangeNameInput,
    onChangeEmailInput,
    onChangeCommentText,
  } = props

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={ onSubmitForm }
    >
      <div style={ { display: 'none' } }>
        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
      </div>
      <Input
        type='text'
        name='name'
        placeholder='Your name'
        value={ name.value }
        onChange={ onChangeNameInput }
        error={ name.error }
      />
      <Input
        type='mail'
        name='email'
        placeholder='Email: xxxx@mail.com'
        value={ email.value }
        onChange={ onChangeEmailInput }
        error={ email.error }
      />
      <TextArea
        name='comment'
        value={ comment.value }
        onChange={ onChangeCommentText }
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
