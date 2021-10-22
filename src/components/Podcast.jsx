import React from 'react';
import redLogo from '../images/img_Logo_Red_200.png';
import firstSecImgMobile from '../images/firstSecImgMobil 1.png';
import secondSecImgMobile from '../images/images_mobile2 1.png';
import styled from 'styled-components';

const BlogContainer = styled.div`
@media screen and (min-width: 999px){
    display: flex;

}
`

const FirstContainer = styled.div`
background-color: #ee2624;
width: 100%;
padding-bottom: 24px;

`
const FirstImgContainer = styled.div`
width: 100%;

img {
    width: 100%;
    object-fit: contain;
}

@media screen and (min-width: 999px){
    padding-top: 30px;
    width: 90%;

    img {
        border-radius: 24px;
        margin-left: 50px;
    }
}
`
const SecondImgContainer = styled.div`
width: 100%;

img {
    width: 100%;
    object-fit: contain;
}

@media screen and (min-width: 999px){
    padding-top: 30px;
    width: 90%;

    img {
        border-radius: 24px;
        margin-left: 10px;
    }
}
`
const TextContainer = styled.div`
color: #ffffff;
width: 80%;
margin: 0 auto;
font-size: 16px;
font-weight: 300;
line-height: 20px;
/* font-family: 'Myriad Pro' */

@media screen and (min-width: 999px){
    display: flex;
    text-align: start;
}

button {
    background-color: #ee2624;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 30px;
    padding: 8px 40px;

    @media screen and (min-width: 999px){
        width: 320px;
        height: 30px;
        margin: 20px 0 0 20px;
    }
}
`
const SecContainer = styled.div`
background-color:red;
position: relative;
padding-bottom: 24px;
width: 100%;

`
const InnerSec = styled.div`
position: absolute;
left: 10%;
right: 10%;
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
justify-self: center;
bottom: 40%;

h2 {
    /* font-family: 'Montserrat'; */
    font-weight: 800;
    font-size: 42px;
    line-height: 48px;
    color: #ffffff;
    margin: 0;
}
p {
    /* font-family: 'Myriad Pro'; */
    font-weight: 300;
    font-style: 14px;
    line-height: 16px;
    color: #ffffff;
}
`
const LogoBox = styled.div`
border: 1px dotted #ffffff;

img {
    width: 70%;
}
`

const Podcast = () => {
    return (
        <BlogContainer>
            <FirstContainer>
                <FirstImgContainer>
                    <img src={firstSecImgMobile} alt='girl on podcost' />
                </FirstImgContainer>
                <TextContainer>
                    <p>Agnihicient qui con et poreped expedig enistio beritis mil inulliciam volum quunt,
                     ipistius ut et voluptatur am essum</p>
                    <button>Learn More</button>
                </TextContainer>
            </FirstContainer>

            <SecContainer>
                <SecondImgContainer>
                    <img src={secondSecImgMobile} alt='mic' />
                </SecondImgContainer>
                <InnerSec>
                    <LogoBox>
                        <img src={redLogo} alt='logo' />
                    </LogoBox>
                    <h2>PODCAST</h2>
                    <p>Itat assequia voluption rest re rati to et pe a sit, consequi</p>
                </InnerSec>
                <TextContainer>
                    <p>Agnihicient qui con et poreped expedig enistio beritis mil inulliciam volum quunt,
                     ipistius ut et voluptatur am essum</p>
                    <button>Learn More</button>
                </TextContainer>
            </SecContainer>

        </BlogContainer>
    )
}

export default Podcast
