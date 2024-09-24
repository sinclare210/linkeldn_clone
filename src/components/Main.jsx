import React from 'react'
import styled from 'styled-components'
import PostModal from './PostModal'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getArticleAPI } from '../actions/Index'
import ReactPlayer from 'react-player'

const Main = (props) => {
    const [showModal, setShowModal] = useState("close");

    useEffect(() => {
        props.getArticles();
    },[]);
    const handleClick = ((e) => {
        e.preventDefault();
        if(e.target !== e.currentTarget){
            return;
        }

        switch (showModal){
            case "open":
                
                setShowModal("close")
                break;
            case "close":
                setShowModal("open")
                break;
            default:
                setShowModal("close")
                break;
        }
    })
return (
    <>
    { (
    <Container>
        <ShareBox>
            <div>
            {   props.user && props.user.photoURL?  <img src={props.user.photoURL} alt="" />:
       
        
            <img src="/images/user.svg" alt="" />
            }
            <button onClick={handleClick}
            disabled={props.loading?true:false}>Start a post</button>
        </div>
         <div>
            <button>
                <img src="/images/svg-image-14.svg" alt="" />
                <span>Photo</span>
            </button>
            <button>
                <img src="/images/video-frame-play-horizontal-svgrepo-com.svg" alt="" /> 
                <span>Videos</span>
            </button>
            <button>
                <img src="/images/calendar-date-event-month-schedule-svgrepo-com.svg" alt="" /> 
                <span>Event</span>
            </button>
            <button>
                <img src="/images/article-blog-optimation-svgrepo-com.svg" alt="" /> 
                <span>Write article</span>
            </button>
        </div>
     </ShareBox>
     <Content>
        {props.loading  && <img src="src/images/loader-1-svgrepo-com (1).svg"/>}
        {props.articles.length > 0 && props.articles.map((article,key) => (
             <Article key={key}>
            <SharedActor>
                <a>
                    <img src={article.actor.image} alt="" />
                    <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>{}</span>
                    </div>
                </a>
                <button>
                    <img src="/images/svg-image-15.svg" alt="" />
                </button>
            </SharedActor>
            <Description>
                {article.description}
            </Description>
            <SharedImg>
                <a>
                    {
                        !article.sharedImg && article.video ? <ReactPlayer width={"100%"} url={article.video}/>
                    :( article.sharedImg) && <img src={article.sharedImg} alt="" srcset="" /> }
                </a>
            </SharedImg>
            <SocialCounts>
                <li>
                    <button>

                        <img src="/images/thumbs-up-svgrepo-com.svg" alt="" />
                        <img src="/images/clap-svgrepo-com (1).svg" alt="" />
                        <span>75</span>
                    </button>
                </li>
                <li>
                    <a>
                        {article.comments}
                    </a>
                </li>
            </SocialCounts>
        <SocialActions>

         
            <button>
                <img src="/images/like-svgrepo-com.svg" alt="like icon" />
                <span>Like</span>
            </button>
             <button>
                <img src="/images/comment-2-svgrepo-com.svg" alt="comm" />
                <span>Comment</span>
            </button>
             <button>
                <img src="/images/share-arrow-svgrepo-com.svg" alt="like icon" />
                <span>Share</span>
            </button>
             <button>
                <img src="/images/send-svgrepo-com.svg" alt="like icon" />
                <span>Send</span>
            </button>
        </SocialActions>
        </Article>
        ))};
   </Content>
    <PostModal showModal={showModal} handleClick ={handleClick}/>
    </Container>)
}
    </>
  )
}

const Container = styled.div`
grid-area: main;

`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow:  0 0 0 1px rgb(0 0 0 / 15%),  0 0 0  rgb(0 0 0 / 20%);

`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    background: white;
    margin: 0 0 8px;
    color: #958b7b;
    div{
        button{
            outline: none;
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            color: rgba(0,0,0,0.6);
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
            

        }
        &:first-child{
            display: flex;
            align-items: center;
            padding: 8px 16px 8px 16px;
            img{
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;

            }
            button{
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0,0,0,0.15);
                background-color: white;
                text-align: left;
            }
        }
        &:nth-child(2){
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button{
                img{
                    margin:0 4px 0 -2px;

                }
                span{
                    color: #70b5f9;
                }
            }

        }
    
    }
`;

const Article = styled(CommonCard)`
    padding: 0;
    margin: 0 0 8px;
    overflow: visible;


`;

const SharedActor = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    align-items: center;
    display: flex;
    margin-bottom: 8px;
    a{
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;
        text-decoration: none;
        cursor: pointer;

        img{
            width: 48px;
            height: 48px;
        }
        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            flex-basis: 0;
            margin-left: 8px;
            overflow: hidden;
            span{
                text-align: left;
                &:first-child{
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0,0,0,1);
                }

                &:nth-child(n + 1){
                    font-size: 12px;
                    color: rgba(0,0,0,0.6);
                }
            }
        }
    }

    button{
        position: absolute;
        right: 12px;
        background: transparent;
        outline: none;
        border: none;
        top: 0;
    }

`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0 ,0 , 0.9);
    text-align: left;
    font-size: 14px;


`;

const SharedImg = styled.div`
    margin-top: 8px;
    display: block;
    position: relative;
    width: 100%;
    background-color: #f9fafb;
    img{
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

`;

const SocialCounts = styled.ul`
    line-height: 1.3;
    display: flex;
    overflow: auto;
    padding: 8px 0;
    margin: 0 16px;
    list-style: none;

    border-bottom: 1px solid #e9e5df;
    li{
        margin-right: 5px;
        font-size: 12px;
        button{
            display: flex;
            border: none;
            background-color: white;
        }
    }

`;

const SocialActions = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding: 0;
    min-height: 40px;
    padding: 4px 8px;
    button{
        display: inline-flex;
        align-items: center;
        padding: 8px;
        color: #0a66c2;
        background-color: white;
        border: none;
        @media (min-width: 768px) {
            margin-left: 8px;

        }
    }
`;

const Content = styled.div`
    text-align: center;
    & > img{
        width: 30px;
    }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
    loading: state.articleState.loading,
    articles: state.articleState.articles
  }

}

const mapDispatchToProps = (dispatch) => ({
    getArticles: () => dispatch(getArticleAPI())
});

export default connect(mapStateToProps,mapDispatchToProps)(Main)

