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

import Degen from './experience/Degen';
import Stakefish from './experience/Stakefish';
import Artrageous from './experience/Artrageous';
import Davis from './experience/Davis';
import Uleth from './experience/Uleth';

const Base = styled("div")`

    background: rgb(20,20,30);
    background: linear-gradient(54deg, rgba(20,20,30,1) 0%, rgba(60,70,70,1) 100%);

    color: rgb(250,250,250);
    position: relative;
    z-index: 3;
`;

const Content = styled("div")`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    height: 100vh;
    width: 44%;
    max-width: 1000px;
    margin: auto;
    padding: 30px;
    padding-bottom: 20px;
    border-radius: 10px;
    min-height: 260px;
`;

const ContentHeader = styled("div")`
    padding: 40px;
    text-align: right;
    max-width: 1200px;
    margin: auto;
`;

const ColumnLeft = styled("div")`
    width: 20%;
    margin: auto;
    text-align: center;
    position: relative;
    z-index: 1;
`;

const ColumnCenterLine = styled("div")`
    border: 6px solid #fff;
    top: -560px;
    height: 800px;
    z-index: 7;
`;

const LogoContainerDA = styled("div")`
    transition: all 1000ms;
    z-index: 7;
    transform: scale(1);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerSF = styled("div")`
    transition: all 1000ms;
    z-index: 6;
    transform: scale(1);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerF2 = styled("div")`
    transition: all 1000ms;
    z-index: 5;
    transform: scale(1);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerAR = styled("div")`
    transition: all 1000ms;
    transform: scale(1);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerDAG = styled("div")`
    transition: all 1000ms;
    transform: scale(1);

    :hover {
    transform: scale(1);
    transition: all 500ms;
    }
`;

const LogoContainerULeth = styled("div")`
    transition: all 1000ms;
    transform: scale(1);
  
    :hover {
      transform: scale(1);
      transition: all 500ms;
    }
`;

const ColumnRight = styled("div")`
    width: 70%;
    margin: auto;
    text-align: center;
    padding-left: 10%;
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
    border-radius: 10px;
    padding: 30px;
    transition: all 200ms;
    background-color: rgba(255,255,255,0.1);
    border-radius: 10px;
    border: solid;
    border-color: rgba(255,255,255,0.2);
    border-width: 1px;
    box-shadow: 0 0 100px rgba(15,15,15,0.3);
`;

const SectionHeader = styled("h3")`
    color: rgba(30,190,250);
    line-height: 100%;
`;

const Button = styled("div")`
    border-radius: 6px;
    padding: 4px 8px 4px 8px;
    background-color: rgba(0,0,0,0);
    color: rgb(200,200,200);
    cursor: pointer; 
`;



const About = () => {
    const [hiddenDA, setHiddenDA] = useState(true);
    const [hiddenSF, setHiddenSF] = useState(true);
    const [hiddenAR, setHiddenAR] = useState(true);
    const [hiddenDAG, setHiddenDAG] = useState(true);
    const [hiddenULeth, setHiddenULeth] = useState(true);
    
    return <Base>
        <ContentHeader id="experience">
            <SectionHeader>EXPERIENCE</SectionHeader>
            <h2>Where I Have Been</h2>
        </ContentHeader>
        <Content>
            <ColumnLeft>
                <ColumnCenterLine className='ColumnCenter'>
                    <LogoContainerDA className='LogoContainer' onClick={() => setHiddenDA(s => !s)}>
                        <img src={degenLogo} style={{ resizeMode: "contain", width: 40, marginTop: 0, borderRadius: 50}}></img>
                    </LogoContainerDA>
                    <LogoContainerSF className='LogoContainer' onClick={() => setHiddenSF(false)}>
                        <img src={stakefishLogo} style={{ resizeMode: "contain", width: 40, marginTop: 32}}></img>
                    </LogoContainerSF>
                    <LogoContainerAR className='LogoContainer' onClick={() => setHiddenAR(s => !s)}>
                        <img src={artrageousLogo} style={{ resizeMode: "contain", width: 40, marginTop: 15}}></img>
                    </LogoContainerAR>
                    <LogoContainerDAG className='LogoContainer' onClick={() => setHiddenDAG(s => !s)}>
                        <img src={DAGLogo} style={{ resizeMode: "contain", width: 40, marginTop: 10}}></img>
                    </LogoContainerDAG>
                    <LogoContainerULeth className='LogoContainer' onClick={() => setHiddenULeth(s => !s)}>
                        <img src={ULethLogo} style={{ resizeMode: "contain", width: 40, marginTop: 10, borderRadius: 25}}></img>
                    </LogoContainerULeth>
                </ColumnCenterLine>
            </ColumnLeft>
            <ColumnRight>
                {!hiddenDA ? <Degen /> : null}
                {!hiddenSF ? <Stakefish /> : null}
                {!hiddenAR ? <Artrageous /> : null}
                {!hiddenDAG ? <Davis /> : null}
                {!hiddenULeth ? <Uleth /> : null}
            </ColumnRight>
            
        </Content>
    </Base>
}

export default About;