import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../redux/modules/user'
import BaseInput from '../components/atoms/base-input'

const UserName = (props) => {
  const { name, onBlur, error } = props

  return (
    <BaseInput
      type='text'
      placeholder='Your name'
      value={ name }
      onBlur={ onBlur }
      error={ error }
    />
  )
}

const mapStateToProps = state => ({
  name: state.user.name.value,
  error: state.user.name.error,
})

const mapDispatchToProps = dispatch => ({
  onBlur: (e) => dispatch(updateName(e.target.value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserName)
