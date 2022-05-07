import '../App.css';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import StakefishLogo from'../img/stakefish_icon_black-green.png';
import ArtrageousLogo from'../img/artrageous-logo.png';
import DegenLogo from'../img/degen-ape-1855.png';
import DegenApe from'../img/degenApe.png';
import DAGLogo from'../img/davis-auto-group-logo.png';
import DavisLogo from'../img/davis-gmc-buick-logo.png';
import ULethLogo from'../img/University-of-Lethbridge-Logo.jpg';
import F2PoolLogo from'../img/f2pool_logo_icon.png';
import Artrageous from './experience/Artrageous';
import MetaMaskLogo from'../img/MetaMask_Fox.svg.png';

const Base = styled("div")`
    padding: 40px 60px 10px 50px;
    color: rgb(250,250,250);
    z-index: 10;
    max-height: 16vh;
    position: fixed;
`;

const Content = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Nav = styled("div")`
    width: 260px;
    padding-left: 40px;
    padding-top: 12px;
    float: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
    underline: bottom;
`;

const Button = styled("div")`
    border-radius: 6px;
    padding: 4px 8px 4px 8px;
    margin-right: 20px;
    background-color: rgba(255,255,255,0.1);
    color: rgb(150,150,150);
    cursor: pointer;

    transition: 1500ms;

    :hover {
      color: rgb(255,255,255);
      background-color: rgb(100,120,150);
      transition: 500ms;
    }
`

const LogoImage = styled("img")`
    resize-mode: contain;
    vertical-align: text-bottom;
    height: 30px;
    border-radius: 50;

`

const Navbar = () => {
    return <Base>
        <Content>
            <Button onClick={() => scrollTo("#about")}><h2>Biest</h2></Button>
            <Nav>
                <Button onClick={() => scrollTo("#skills")}>Skills</Button>
                <Button onClick={() => scrollTo("#experience")}>Experience</Button>
                <Button onClick={() => scrollTo("#portfolio")}>Portfolio</Button>
                <Button onClick={() => scrollTo("#footer")}>Contact</Button>
                <Button onClick={() => scrollTo("#demo")}><LogoImage src={MetaMaskLogo}></LogoImage></Button>
            </Nav>
        </Content>
    </Base>
}

export default Navbar;