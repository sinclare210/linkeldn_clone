import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'

const Messages = () => {
  return (
    <>
     {
              !props.user &&
        <Navigate to="/Job" replace={true} />
      }
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
