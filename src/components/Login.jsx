import React, { act } from 'react'
import styled from 'styled-components'


const Login = (props) => {
  return (
    <Container>
    <Nav>
        <a href="/">
        <img src="src/images/login-logo.svg" alt="" />
        </a>
        <div>
            <Join>
                Join Now
            </Join>
            <SignIn>
                Sign In
            </SignIn>
        </div>
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

const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0,0,0,0.6);
    margin-right: 12px;
    border-radius: 4px;
    &:hover{
        background-color: rgba(0,0,0,0.08) ;
        color: rgba(0,0,0,0.9);
        text-decoration: none;
        cursor: pointer;
    }


`;

const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);

    &:hover{
        background-color: rgba(112,181,249,0.15);
        color: #0a66c2;
        cursor: pointer;
        text-decoration: none;
    }
`;
    


export default Login