import React from 'react'
import styled from 'styled-components'

const Header = (props) => {
  return (
    <Container>
        <Content>
            <Logo>
                <a href="/home">
                    <img src="src/images/home-logo.svg" alt="" />
                </a>
            </Logo>
            <Search>
                <div>
                    <input type="text" placeholder='Search'/>
                </div>
                <SearchIcon>
                    <img src="src/images/search-icon.svg" alt="" />
                </SearchIcon>
            </Search>
            <Nav>
                <NavListWrap>
                
              <NavList>
                <a>
                    <img src="src/images/nav-home.svg" alt="" />
                    <span>Home</span>
                </a>
                </NavList>  
                </NavListWrap>
            </Nav>
        </Content>
    </Container>
    
  )
}

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0,0,0,0.08);
position: fixed;
top: 0px;
width: 100vw;
left: 0px;
padding: 0px 24px;
z-index: 100;

`;

const Content = styled.div`
display: flex;
align-items: center;
margin: 0px auto;
min-height: 100%;
max-width: 1128px;

`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`;

const Search = styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
    & > div{
        max-width: 280px;
        input{
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            border-radius: 2px;
            color: rgba(0,0,0,0.9);
            width: 218px;
            padding: 0px 8px 0px 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            border-color: #dce6f1;
            vertical-align: text-top;
        }
    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    left: 2px;
    margin: 0px;
    top: 10px;
    border-radius: 0px 2px 2px 0px;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
   

`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px) {
        position: fixed;
        bottom: 0px;
        left: 0px;
        background: white;
        width: 100%;

    }

`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;


export default Header