import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import { useEffect } from 'react'
import { getUserAuth } from './actions/Index'
import { connect } from 'react-redux'
import Job from './components/Job'
import Networks from './components/Networks'
import Messages from './components/Messages'
import Notifications from './components/Notifications'
import Gaming from './components/Gaming'



function App(props) {
    useEffect(() => {
      props.getUserAuth();
    })
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Login />} />


          <Route 
            path='/home' 
            element={
              <>
                <Header /> 
                <Home />
              </>
            } 
          />
          <Route path='/Job' element={<><Job/></>}/>
          <Route path='/Networks' element={<><Networks/></>}/>
          <Route path='/Messages' element={<><Messages/></>}/>
          <Route path='/Notifications' element={<><Notifications/></>}/>
          <Route path='/Gaming' element={<><Gaming/></>}/>
        </Routes>
      </Router>
    </>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth())
});


export default connect(mapStateToProps, mapDispatchToProps)(App)
