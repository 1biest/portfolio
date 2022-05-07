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
background: linear-gradient(100deg, rgba(20,20,30,1) 0%, rgba(60,70,70,1) 100%);


    color: rgb(250,250,250);
    margin: auto;
    position: relative;
`;

const Content = styled("div")`
    margin-left: 20px;
    margin-right: 20px;
    height: 100vh;
`;

const Body = styled("div")`
    display: flex;
    align-items: center;
    min-height: 300px;
    max-width: 1000px;
    margin: auto;
    margin-bottom: 20px;
    background-color: rgba(205,205,205,0.09);
    border-radius: 10px;
    border: solid;
    border-color: rgba(255,255,255,0.15);
    border-width: 1px;
    box-shadow: 0 0 200px rgba(15,15,15,0.15);
`;

const SectionText = styled("div")`
    width: 44%;
    height: 100%;
    margin: 3%;
    padding: 30px;
    border-radius: 10px;
    min-height: 200px;

`;

const Button = styled("div")`
    border-radius: 6px;
    padding: 4px 8px 4px 8px;
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
    color: rgba(30,190,250);
    padding-top: 50px;
`;

const SkillCard = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    text-align: center;
    padding: 0px 30px 0px 30px;
    margin: 3%;
    background-color: rgba(0,0,0,0.2);
    border-radius: 50%;
    border: solid;
    border-color: rgba(255,255,255,0.15);
    border-width: 1px;
    box-shadow: 0 0 200px rgba(15,15,15,0.15);
    align-items: center;
    transition: all 1000ms;
    transform: scale(1);
  
    :hover {
      transform: scale(0.95);
      transition: all 500ms;
      background-color: rgba(205,205,205,0.19);
    }
`

const ButtonBody = styled("div")`
    display: flex;
    align-items: center;
    margin: auto;
`

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


const Experience = () => {
    const [hiddenDA, setHiddenDA] = useState(true);
    const [hiddenSF, setHiddenSF] = useState(true);
    const [hiddenAR, setHiddenAR] = useState(true);
    const [hiddenDAG, setHiddenDAG] = useState(true);
    const [hiddenULeth, setHiddenULeth] = useState(true);

    return <Base id="experience">
        <Content>
            <Header>
                <SectionHeader>EXPERIENCE</SectionHeader>
                <h2>Where I Have Been</h2>
            </Header>
                <ButtonBody>
                    <SkillCard onClick={() => setHiddenDA(s => !s)}>
                        <LogoContainerDA className='LogoContainer'>
                            <img src={degenLogo} style={{resizeMode: "contain", width: 40, marginBottom: 20, borderRadius: 50}}></img>
                        </LogoContainerDA>
                    </SkillCard>
                    <SkillCard onClick={() => setHiddenSF(s => !s)}>
                            <LogoContainerSF className='LogoContainer'>
                                <img src={stakefishLogo} style={{resizeMode: "contain", width: 40, marginBottom: 20, borderRadius: 50}}></img>
                            </LogoContainerSF>
                    </SkillCard>
                    <SkillCard onClick={() => setHiddenAR(s => !s)}>
                            <LogoContainerAR className='LogoContainer'>
                                <img src={artrageousLogo} style={{resizeMode: "contain", width: 40, marginBottom: 20, borderRadius: 50}}></img>
                            </LogoContainerAR>
                    </SkillCard>
                    <SkillCard onClick={() => setHiddenDAG(s => !s)}>
                            <LogoContainerDAG className='LogoContainer'>
                                <img src={DAGLogo} style={{resizeMode: "contain", width: 40, marginBottom: 20, borderRadius: 50}}></img>
                            </LogoContainerDAG>
                    </SkillCard>
                    <SkillCard onClick={() => setHiddenULeth(s => !s)}>
                            <LogoContainerULeth className='LogoContainer'>
                                <img src={ULethLogo} style={{resizeMode: "contain", width: 40, marginBottom: 20, borderRadius: 50}}></img>
                            </LogoContainerULeth>
                    </SkillCard>
                </ButtonBody>
            <Body>
                <SectionText>
                    {!hiddenDA ? <Degen /> : null}
                    {!hiddenSF ? <Stakefish /> : null}
                    {!hiddenAR ? <Artrageous /> : null}
                    {!hiddenDAG ? <Davis /> : null}
                    {!hiddenULeth ? <Uleth /> : null}      

                </SectionText>

            </Body>
                    <Button onClick={() => scrollTo("#portfolio")}>Portfolio</Button>
            
        </Content>
    </Base>
}

export default Experience;