import React, { useState } from "react";
import '../App.css';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import stakefishLogo from'../img/stakefish_icon_black-green.png';
import artrageousLogo from'../img/artrageous-logo.png';
import degenLogo from'../img/degen-ape-1855.png';
import degenApe from'../img/degenApe.png';
import DAGLogo from'../img/davis-auto-group-logo.png';
import ULethLogo from'../img/University-of-Lethbridge-Logo.jpg';
import F2PoolLogo from'../img/f2pool_logo_icon.png';
import MetaMaskLogo from'../img/MetaMask_Fox.svg.png';

import Degen from './experience/Degen';
import Stakefish from './experience/Stakefish';
import Artrageous from './experience/Artrageous';
import Davis from './experience/Davis';
import Uleth from './experience/Uleth';


const Base = styled("div")`

background: rgb(20,20,30);
background: linear-gradient(100deg, rgba(20,20,20,1) 0%, rgba(70,70,70,1) 100%);

    color: rgb(250,250,250);
    margin: auto;
    position: relative;
    overflow: hidden;
`;

const Content = styled("div")`
    margin-left: 20px;
    margin-right: 20px;
    height: 100vh;
`;

const Body = styled("div")`
    display: flex;
    margin: auto;
    margin-bottom: 20px;
    justify-content: center;
    text-align: center;
`;

const SectionText = styled("div")`
    width: 10%;
    height: 100%;
    margin: 1%;
    padding: 30px;
    border-radius: 10px;
    min-height: 200px;
    background-color: rgba(205,205,205,0.09);
    border-radius: 10px;
    border: solid;
    border-color: rgba(255,255,255,0.15);
    border-width: 1px;
    box-shadow: 0 0 200px rgba(15,15,15,0.15);
    transition: all 500ms;
    overflow: hidden;

    :hover {
      width: 30%;
      transition: all 500ms;
    }
`;

const Button = styled("div")`
    border-radius: 6px;
    padding: 4px 8px 4px 8px;
    margin: auto;
    background-color: rgba(0,0,0,0);
    color: rgb(30,190,250);
    cursor: pointer;
    border: solid;
    border-color: rgb(30,190,250);
    width: 150px;
    text-align: center;
    padding: 6px;
    padding-bottom: 8px;
    font-weight: bold;
    transition: all 500ms;

    :hover {
      color: rgb(60,60,70);
      background-color: rgba(30,190,250,1);
      transition: all 500ms;
    }
`;

const Header = styled("div")`
    padding: 40px;
    text-align: right;
    max-width: 1000px;
    margin: auto;
`;

const SectionHeader = styled("h3")`
    padding-top: 50px;
`;

const LogoImage = styled("img")`
    resize-mode: contain;
    vertical-align: text-bottom;
    height: 30px;
    border-radius: 50;
    padding-bottom: 20px;

`


const Experience = () => {

    return <Base id="experience">
        <Content>
            <Header>
                <SectionHeader>EXPERIENCE</SectionHeader>
                <h2>Where I Have Been</h2>
            </Header>
            <Body>
                <SectionText>
                    <LogoImage src={stakefishLogo}></LogoImage>
                    <Stakefish />    
                </SectionText>
                <SectionText>
                    <LogoImage src={artrageousLogo}></LogoImage>
                    <Artrageous />   
                </SectionText>
                <SectionText>
                    <LogoImage src={DAGLogo}></LogoImage>
                    <Davis />    
                </SectionText>
                <SectionText>
                    <LogoImage src={ULethLogo}></LogoImage>
                    <Uleth />     
                </SectionText>

            </Body>
        </Content>
    </Base>
}

export default Experience;