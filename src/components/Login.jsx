import React, { act } from 'react'
import styled from 'styled-components'


const Login = (props) => {
  return (
    <Container>
    <Nav>
        <a href="/">
        <img src="src/images/login-logo.svg" alt="" />
        </a>
    </Nav>
    </Container>
    
  )
}
const Container = styled.div`
    padding: 0px;
`;

const Nav = styled.nav`
max-width:1128px;
margin: auto;
padding: 12px 0px 16px;
display: flex;
align-items: center;
flex-wrap: nowrap;
position: relative;
justify-content: space-between;

& > a {
    width: 135px;
    height:34px;
    @media (max-width: 768px){
        padding: 0px 5px;
    }
}
`;

    


export default Login