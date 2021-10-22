import React from 'react';
import { browse, about, resources } from './footer_links';
import muxikawiLogo from '../images/img_Logo_Color_164.png';
import facebookLogo from '../images/icn_Facebook_Normal_White_40.png';
import instaLogo from '../images/icn_Insta_Normal_White_40.png';
import youtubeLogo from '../images/icn_Youtube_Normal_White_40.png';
import styled from 'styled-components';

const FooterContainer = styled.div`
background-color: #1a1a1a;
height: 100%;

@media screen and (min-width: 999px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 50px 40px;
}
`
const LinkFormContainer = styled.div`
@media screen and (min-width: 999px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    min-width: 67vw;
    height: min-content;
}
`
const LinksContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
margin: 0 auto;
padding-bottom: 24px;

@media screen and (min-width: 999px) {
    flex-wrap: nowrap;
    
}
`
const LinkBox = styled.div`
width: 50%;

@media screen and (min-width: 999px) {
    width: 30%;
 
}

`
const LinkText = styled.div`
text-align: start;
padding-top: 16px;

a {
color: #ffffff;
/* font-family: Myriad Pro */
font-weight: 300;
font-size: 18px;
line-height: 21px;
text-decoration: none;
}
`
const LinkHeader = styled.p`
color: #ffffff;
font-size: 21px;
/* font-family:  Myriad Pro*/
line-height: 26px;
font-weight: 700;
text-align: start;
margin-bottom: 0;
`

const FormContainer = styled.div`
background-color: #262626;
width: 90%;
margin: 0 auto;
text-align: start;
padding: 24px 0;
color: #ffffff;
margin-bottom: 48px;

p {
    color: #ffffff;
    font-weight: 700;
    font-size: 20px;
}


@media screen and (min-width: 999px) {
    width: 60%;
    padding-top: 6px;
}
`
const FormStyle = styled.form`
display: flex;
flex-direction: column;
width: 90%;
margin: 0 auto;

input, textarea {
background-color: #262626;
color: #8c8c8c;
height: 40px;
border: none;
border-bottom: 1px solid #8c8c8c;
/* font-family:  Myriad Pro*/
}
textarea::placeholder {
    padding-top: 17px;
}
`
const SendMessageBtn = styled.button`
 background-color: #ee2624;
 padding: 8px 32px;
 width: 172px;
 margin-top: 24px;
 border: none;
 align-self: flex-end;
 color: #ffffff;
`
const LogoContainer = styled.div`
width: 90%;
margin: 0 auto;
text-align: start;
height: min-content;
`
const MuziLogoBox = styled.div`
border: 1px dashed #8c8c8c;
width: 164px;

@media screen and (min-width: 999px) {
    border: none;
}
`
const LogoText = styled.p`
color: #ffffff;
font-weight: 300;
font-size: 18px;
/* font-family:  Myriad Pro*/
line-height: 24px;
margin-top: 8px;

@media screen and (min-width: 999px) {
    margin-top: 70px;
}
`
const PlatformsLogoContainer = styled.div`

img {
    width: 40px;
    margin-right: 16px;
}
`
const CopyrightText = styled.p`
color: #ffffff;
/* font-family:  Myriad Pro*/
font-weight: 300;
font-size: 14px;
line-height: 21px;
margin-bottom: 0;
padding-bottom: 40px;
/* margin: 32px auto; */

@media screen and (min-width: 999px) {
    position: absolute;
    left: 285px;
}
`

const Footer = () => {

    const handleSubmit = (formData, e) => {
        console.log(formData)
    }
    return (
        <FooterContainer>
            <LinkFormContainer>

                <LinksContainer>

                    <LinkBox>
                        <LinkHeader>Browse</LinkHeader>
                        {browse.map((item, index) => {
                            return (
                                <LinkText key={index}>
                                    <a href={item.url}>{item.link}
                                    </a>
                                </LinkText>
                            )
                        })}
                    </LinkBox>
                    <LinkBox>
                        <LinkHeader>About</LinkHeader>
                        {about.map((item, index) => {
                            return (
                                <LinkText key={index}>
                                    <a href={item.url}>{item.link}
                                    </a>
                                </LinkText>
                            )
                        })}
                    </LinkBox>
                    <LinkBox>
                        <LinkHeader>Resources</LinkHeader>
                        {resources.map((item, index) => {
                            return (
                                <LinkText key={index}>
                                    <a href={item.url}>{item.link}
                                    </a>
                                </LinkText>
                            )
                        })}
                    </LinkBox>
                </LinksContainer>
                <FormContainer>

                    <FormStyle onSubmit={handleSubmit}>
                        <p>Contact us</p>
                        <input
                            type='name'
                            name='firstname'
                            placeholder='Name'
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                        <textarea
                            type='message'
                            name='message'
                            placeholder='Message'
                        />
                        <SendMessageBtn type='submit'>Send message</SendMessageBtn>

                    </FormStyle>
                </FormContainer>
            </LinkFormContainer>


            <LogoContainer>
                <MuziLogoBox>
                    <img src={muxikawiLogo} alt='Muxikawi logo' />
                </MuziLogoBox>
                <LogoText>Follow us on our platforms</LogoText>
                <PlatformsLogoContainer>
                    <img src={facebookLogo} alt='facebook logo' />
                    <img src={instaLogo} alt='instagram logo' />
                    <img src={youtubeLogo} alt='youtube logo' />
                </PlatformsLogoContainer>

                <CopyrightText>Copyright 2020 All Rights Reserved. Muzikawi</CopyrightText>
            </LogoContainer>


        </FooterContainer>
    )
}

export default Footer;
