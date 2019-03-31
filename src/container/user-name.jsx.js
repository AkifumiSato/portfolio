import React from 'react'
import { connect } from 'react-redux'
import { updateName } from '../redux/modules/user'
import BaseInput from '../components/atoms/base-input'

const UserName = (props) => {
  const { name, onBlur } = props

  return (
    <BaseInput
      type='text'
      placeholder='Your name'
      value={ name }
      onBlur={ onBlur }
    />
  )
}

const mapStateToProps = state => ({
  name: state.user.name,
})

const mapDispatchToProps = dispatch => ({
  onBlur: (e) => dispatch(updateName(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserName)
