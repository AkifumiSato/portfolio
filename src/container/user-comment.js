import React from 'react'
import { connect } from 'react-redux'
import { updateComment } from '../redux/modules/user'
import BaseTextArea from '../components/atoms/base-textarea'

const UserName = (props) => {
  const { name, onBlur, error } = props

  return (
    <BaseTextArea
      value={ name }
      onBlur={ onBlur }
      error={ error }
    />
  )
}

const mapStateToProps = state => ({
  comment: state.user.comment.value,
  error: state.user.comment.error,
})

const mapDispatchToProps = dispatch => ({
  onBlur: (e) => dispatch(updateComment(e.target.value)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserName)
