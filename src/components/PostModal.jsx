import React from 'react'
import styled from 'styled-components'

const PostModal = (props) => {
  return (
    
    <Container>
        <Content>
            
            <Header>
                <h2>Create a post</h2>
                <button>
                     <img src="" alt="xx" />
                </button>
               
            </Header>
            
        </Content>
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    color: black;
    background-color: rgba(0,0,0,0.8);


`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: white;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    top: 32px;
`;

const Header = styled.div`
    display: block;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid rgba(0,0,0,0.15);

    button{
        height: 40px;
        min-width: auto;
        width: 40px;
        color: rgba(0,0,0,0.15);
    }
`;


export default PostModal