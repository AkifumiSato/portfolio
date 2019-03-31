import React from 'react'
import { connect } from 'react-redux'
import { updateEmail } from '../redux/modules/user'
import BaseInput from '../components/atoms/base-input'

const UserEmail = (props) => {
  const { email, onBlur } = props

  return (
    <BaseInput
      type='mail'
      placeholder='Email: xxxx@mail.com'
      value={ email }
      onBlur={ onBlur }
    />
  )
}

const mapStateToProps = state => ({
  email: state.user.email,
})

const mapDispatchToProps = dispatch => ({
  onBlur: (e) => dispatch(updateEmail(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEmail)
