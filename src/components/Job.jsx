import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Header from './Header'

const Job = (props) => {
  return (
    <>
     {
              props.user &&
        <Navigate to="/Job" replace={true} />
      }
    
    <div>Job</div>
     <Header/>
     </>
  )
 
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}



export default connect(mapStateToProps)(Job)



