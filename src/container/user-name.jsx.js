import React from 'react'
import { connect } from 'react-redux'
import { update } from '../redux/modules/user'
import BaseInput from '../components/atoms/base-input'

const UserName = (props) => {
  const { name, onChange } = props

  return (
    <BaseInput
      type='text'
      placeholder='Your name'
      value={ name }
      onChange={ onChange }
    />
  )
}

const mapStateToProps = state => ({
  name: state.user.name,
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(update(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserName)
