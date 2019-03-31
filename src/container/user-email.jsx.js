import React from 'react'
import { connect } from 'react-redux'
import { updateEmail } from '../redux/modules/user'
import BaseInput from '../components/atoms/base-input'

const UserEmail = (props) => {
  const { email, onChange } = props

  return (
    <BaseInput
      type='mail'
      placeholder='Email: xxxx@mail.com'
      value={ email }
      onChange={ onChange }
    />
  )
}

const mapStateToProps = state => ({
  email: state.user.email,
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(updateEmail(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserEmail)
