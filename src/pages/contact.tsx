import { graphql } from 'gatsby'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CustomHead from '../components/atoms/CustomHead'
import Contact from '../components/templates/Contact'
import { postContactForm, updateComment, updateEmail, updateName } from '../redux/modules/app/user'
import { State } from '../redux/store'

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const ContactPage: React.FC<Props> = ({ data }) => {
  const siteTitle = `Contact - ${ data.site.siteMetadata.title }`
  const dispatch = useDispatch()
  const { name, email, comment } = useSelector((state: State) => state.app.user)

  const onSubmitForm = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(postContactForm('contact'))
  }, [])
  const onChangeNameInput = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    dispatch(updateName(e.currentTarget.value))
  }, [])
  const onChangeEmailInput = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    dispatch(updateEmail(e.currentTarget.value))
  }, [])
  const onChangeCommentText = React.useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    dispatch(updateComment(e.currentTarget.value))
  }, [])

  return (
    <>
      <CustomHead title={ siteTitle } />
      <Contact
        name={ name }
        email={ email }
        comment={ comment }
        onSubmitForm={ onSubmitForm }
        onChangeNameInput={ onChangeNameInput }
        onChangeEmailInput={ onChangeEmailInput }
        onChangeCommentText={ onChangeCommentText }
      />
    </>
  )
}

export default ContactPage

export const pageQuery = graphql`
    query ContactQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
