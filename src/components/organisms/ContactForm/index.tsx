import * as React from 'react'
import styled from 'styled-components'
import Input from '../../molecules/Input'
import TextArea from '../../molecules/Textarea'
import BlackButton from '../../atoms/New/BlackButton'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;
`

type FormObject = {
  value: string
  error: string
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
      onSubmit={onSubmitForm}
    >
      <GridBox>
        <div style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>
        </div>
        <Input
          type="text"
          name="name"
          placeholder="your name"
          value={name.value}
          onChange={onChangeNameInput}
          error={name.error}
        />
        <Input
          type="mail"
          name="email"
          placeholder="xxxx@mail.com"
          value={email.value}
          onChange={onChangeEmailInput}
          error={email.error}
        />
        <TextArea
          name="comment"
          value={comment.value}
          onChange={onChangeCommentText}
          error={comment.error}
        />
        <ButtonWrapper>
          <BlackButton width="300px">submit</BlackButton>
        </ButtonWrapper>
      </GridBox>
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default ContactForm
