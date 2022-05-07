import '../App.css';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import StakefishLogo from'../img/stakefish_logo-green_black.png';
import ArtrageousLogo from'../img/artrageous-logo.png';

const Base = styled("div")`

background: rgb(200,200,200);
background: linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(200,200,200,1) 100%);
    
padding: 20px 40px 20px 100px;
    color: rgb(250,250,250);
`;

const Content = styled("div")`
    display: flex;
    color: rgba(0,0,0,1);
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    height: 100vh;
`;

const Button = styled("div")`
    border-radius: 6px;
    padding: 4px 8px 4px 8px;
    background-color: rgba(0,0,0,0);
    color: rgb(200,200,200);
    cursor: pointer; 
`;

const HeaderBtn = styled("h3")`
    color: rgba(130,211,24);
    cursor: pointer;
    line-height: 100%;
    transition: 500ms;

    :hover {
      color: rgb(255,255,255);
      transition: 500ms;
    }
`;

const Header = styled("div")`
    padding: 40px;
    text-align: right;
    max-width: 1000px;
    margin: auto;
`;

const SectionHeader = styled("h3")`
    color: rgba(130,211,24);
    padding-top: 50px;
`;

const Body = styled("div")`
    align-items: center;
    max-width: 1000px;
    padding: 20px;
    background-color: rgba(205,205,205,0.09);
    border-radius: 10px;
    border: solid;
    border-color: rgba(255,255,255,0.15);
    border-width: 1px;
    box-shadow: 0 0 200px rgba(15,15,15,0.15);
`;

const LogoImage = styled("img")`
    resize-mode: contain;
    vertical-align: text-bottom;
    height: 30px;
    border-radius: 50;
    padding-top: 10px;

`

const About = () => {
    return <Base id="stakefish">
            <Header>
                <SectionHeader>EXPERIENCE</SectionHeader>
                <LogoImage src={StakefishLogo}></LogoImage>
            </Header>
        <Content>
            <Body>
                    <HeaderBtn onClick={()=> window.open("https://www.linkedin.com/in/biest/", "_blank")}>Cryptocurrency Validators</HeaderBtn>
                    <h4>logan.biesterfeldt@gmail.com</h4>
            </Body>
            
        </Content>
    </Base>
}

export default About;