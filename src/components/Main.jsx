import React from 'react'
import styled from 'styled-components'

const Main = (props) => {
return (
    <Container>
        <ShareBox>
            Share
       
        <div>
            <img src="src/images/user.svg" alt="" />
            <button>Start a post</button>
        </div>
         <div>
            <button>
                <img src="src/images/image-svgrepo-com (1).svg" alt="" />
                <span>Photo</span>
            </button>
            <button>
                <img src="src/images/video-frame-play-horizontal-svgrepo-com.svg" alt="" /> 
                <span>Videos</span>
            </button>
            <button>
                <img src="src/images/calendar-date-event-month-schedule-svgrepo-com.svg" alt="" /> 
                <span>Event</span>
            </button>
            <button>
                <img src="src/images/article-blog-optimation-svgrepo-com.svg" alt="" /> 
                <span>Write article</span>
            </button>
        </div>
     </ShareBox>
    <div>
        <Article>
            <SharedActor>
                <a>
                    <img src="src/images/user.svg" alt="" />
                    <div>
                        <span>Title</span>
                        <span>Info</span>
                        <span>Date</span>
                    </div>
                </a>
                <button>
                    <img src="src/images/ellipsis-svgrepo-com.svg" alt="" />
                </button>
            </SharedActor>
            <Description>
                Dsec
            </Description>
            <SharedImg>
                <a>
                    <img src="" alt="" />
                </a>
            </SharedImg>
        </Article>
    </div>
    </Container>
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

export default Main