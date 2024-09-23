import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const PostModal = (props) => {
    const [editorText, setEditorText] = useState("");
  return (
    
    <Container>
        <Content>
            
            <Header>
                <h2>Create a post</h2>
                <button>
                     <img src="" alt="xx" />
                </button>
               
            </Header>
            <SharedContent>
                <UserInfo>
                    <img src="src/images/user.svg" alt="" />
                    <span>Names</span>
                </UserInfo>
                <Editor>
                    <textarea value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}></textarea>
                </Editor>
            </SharedContent>
            <SharedCreation>
                <AttachAssets>
                    <AssetButton>
                        <img src="" alt="//" />
                    </AssetButton>
                      <AssetButton>
                        <img src="" alt="//" />
                    </AssetButton>
                </AttachAssets>
                <ShareComment>
                      <AssetButton>
                        <img src="" alt="//" />
                    </AssetButton>
                </ShareComment>
                <PostButton>
                    Post
                </PostButton>
            </SharedCreation>
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

const SharedContent = styled.div`
    display:  flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;
    svg,
    img{
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
    }
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
        margin-left: 5px;

    }


`;

const SharedCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;

`;

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0, 0, 0, 0.5);
`;

const AttachAssets = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;
    ${AssetButton}{
        width: 40px;
    }
`;

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);
    ${AssetButton}{
        svg{
            margin-right: 5px;
        }
    }
`;

const PostButton = styled.div`
    min-width: 60px;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 20px;
    color: white;
    background: #0a66c2;
    & > hover{
        background: #004182;
    }

`;

const Editor = styled.div``;


export default PostModal