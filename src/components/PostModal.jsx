import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import { initializeApp } from 'firebase/app';
import { getFirestore, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { storage } from "../Firebase"; 




import { postArticleAPI } from '../actions/Index'

const PostModal = (props) => {
    const [editorText, setEditorText] = useState("");
    const [shareImage, setShareImage] = useState("");
    const [videoLink, setVideoLink] = useState("");
    const [assetArea, setAssetArea] = useState("");

    const handleChange = ((e) => {
        const image = e.target.files[0];

        if(image === "" || image === undefined){
            alert(`no an image, the file is a ${typeof image}`);
            return;
        }else{
            setShareImage(image);
        }

    });

     const switchAssetArea= (area) => {
        setShareImage("");
        setVideoLink("");
        setAssetArea(area);

    }

    const postArticle = (e) =>{


        e.preventDefault();
        if(e.target !== e.currentTarget){
            console.log("hhsh")
            return;
           
        }

    const payload = {
    image: shareImage,
    video: videoLink,
    user: props.user,
    description: editorText,
    timestamp: Timestamp.now() 
    };

   

    
    props.postArticle(payload);
    reset(e);

    }

    const reset = ((e) => {
        setEditorText("");
        setShareImage("");
        setVideoLink("");
        setAssetArea("");
        props.handleClick(e)
    })

   
  return (
    <>
    { props.showModal === "open" &&
    <Container>
        <Content>
            
            <Header>
                <h2>Create a post</h2>
                <button onClick={(e) => reset(e)}>
                     <img src="/images/svg-image-3.svg" alt="xx" />
                </button>
               
            </Header>
            <SharedContent>
                <UserInfo>
                    {props.user && props.user.photoURL? <img src = {props.user.photoURL}/> : <img src="src/images/user.svg"/>}
     
                    <span>{props.user.displayName}</span>
                </UserInfo>
                <Editor>
                    <textarea value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}
                    placeholder='What do you want to talk about??' autoFocus={true}/>
                    {assetArea === "image" ? (
                    <UploadImage>
                        <input type="file" 
                        name='image'
                        id='file'
                        style={{display: "none"}} 
                        accept='image/gif, image/jpeg, image/png'
                        onChange={handleChange}
                        />
                        <p>
                            <label htmlFor="file">Select an image to share</label>
                        </p>
                        {shareImage && <img src={URL.createObjectURL(shareImage)}/>}
                    </UploadImage>)
                        : assetArea === "media" &&(
                        <>
                        
                       
                        
                        <input type="text" value={videoLink} placeholder='Please input a video link' onChange={(e) => setVideoLink(e.target.value)} 
                        />
                        {videoLink && <ReactPlayer width={"100%"} url={videoLink}/>}
                        </>)
                        
                    
                    }
                </Editor>
            </SharedContent>
            <SharedCreation>
                <AttachAssets>
                    <AssetButton>
                        <img src="/images/svg-image-12.svg" alt="///" onClick={() => switchAssetArea("image")} />
                    </AssetButton>
                      <AssetButton>
                        <img src="/images/video-upload-svgrepo-com.svg" alt="//" onClick={() => switchAssetArea("media")}/>
                    </AssetButton>
                </AttachAssets>
                <ShareComment>
                      <AssetButton>
                        <img src="/images/svg-image-36.svg" alt="//" />
                    </AssetButton>
                </ShareComment>
                <PostButton disabled={!editorText ? true: false} onClick={(event) => postArticle(event) }>
                    Post
                </PostButton>
            </SharedCreation>
        </Content>
    </Container>
    }
    </>
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
    animation: fadeIn 0.3s;

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
        svg,img{
            pointer-events: none;
        }
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
    color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)": "white") } ;
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)": "#0a66c2") } ;
    &:hover{
        background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)": "#004182;") } ;
    }

`;

const Editor = styled.div`
    padding: 12px 24px;
    textarea{
        width: 100%;
        min-height: 100px;
        resize: none;

    }

    input{
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;

    }
`;

const UploadImage = styled.div`
    text-align: center;
    img{
        width: 100%;

    }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  }
}

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload))
});




export default connect(mapStateToProps,mapDispatchToProps)(PostModal)