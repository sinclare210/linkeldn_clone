import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Messages = (props) => {
  return (
    <>
   
    <div>Messages</div>
    <Header/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}



export default connect(mapStateToProps)(Messages)
