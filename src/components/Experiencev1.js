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

const Base = styled("div")`
    padding: 80px 0px 80px 0px;
    color: rgb(250,250,250);
    padding-bottom: 200px;
`;

const Content = styled("div")`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 300px;
    padding: 20px;
`;

const ContentHeader = styled("div")`
    padding: 40px;
    text-align: center;
`;

const Button = styled("div")`
    border-radius: 6px;
    padding: 4px 8px 4px 8px;
    background-color: rgba(0,0,0,0);
    color: rgb(250,250,250);
    cursor: pointer; 
`;
const Header = styled("div")`
    width: 60%;
    margin: auto;
    text-align: center;
`;
const ColumnLeft = styled("div")`
    width: 30%;
    margin: auto;
    text-align: center;
    margin-right: 10%;
`;
const ColumnCenter = styled("div")`
    position: relative;
    text-align: center;
    z-index: 1;
`;

const ColumnCenterContent = styled("div")`
    z-index: 5;
    position: relative;
    margin-top: 50px;
`;

const ColumnCenterLineDA = styled("div")`
    border: 6px solid #e0b23d;
    left: 20px;
    top: -100px;
    z-index: 7;
`;

const ColumnCenterLineSF = styled("div")`
    border: 6px solid #59DC00;
    left: 0px;
    top: -100px;
    height: 600px;
    z-index: 6;
`;

const ColumnCenterLineAR = styled("div")`
    border: 6px solid #ed1b2f;
    left: -20px;
    top: -200px;
    height: 300px;
`;

const ColumnCenterLineDAG = styled("div")`
    border: 6px solid #db413b;
    left: 10px;
    top: -100px;
    height: 400px;
`;

const ColumnCenterLineULeth = styled("div")`
    border: 6px solid #06559E;
    left: -10px;
    top: -100px;
`;

const LogoContainerDA = styled("div")`
    border-color: #e0b23d;
    margin-top: 40px;
    transition: all 1000ms 100ms;
    z-index: 7;
    transform: scale(0.7);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerSF = styled("div")`
    border-color: #59DC00;
    margin-top: 340px;
    transition: all 1000ms 100ms;
    z-index: 6;
    transform: scale(0.7);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerF2 = styled("div")`
    border-color: #59DC00;
    margin-top: -360px;
    transition: all 1000ms 100ms;
    z-index: 5;
    transform: scale(0.7);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerAR = styled("div")`
    border-color: #ed1b2f;
    margin-top: 130px;
    transition: all 1000ms 100ms;
    transform: scale(0.7);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerDAG = styled("div")`
    border-color: #db413b;
    margin-top: 40px;
    transition: all 1000ms 100ms;
    transform: scale(0.7);
  
    :hover {
      transform: scale(1);
      transition: all 500ms ;
    }
`;

const LogoContainerULeth = styled("div")`
    border-color: #06559E;
    margin-top: 40px;
    transition: all 1000ms 100ms;
    transform: scale(0.7);
  
    :hover {
      transform: scale(1);
      transition: all 500ms;
    }
`;

const ColumnRight = styled("div")`
    width: 30%;
    margin: auto;
    text-align: center;
    padding-left: 10%
    background-color: 'rgba(0,0,0,0.1)'
    ;
`;

const SectionHeader = styled("h3")`
    color: rgba(30,190,250);
    line-height: 100%;
`;

const Desc = styled("p")`
    text-align: justify;
`


const About = () => {
    return <Base>
    <ContentHeader id="experience">
        <SectionHeader>EXPERIENCE</SectionHeader>
    <h1>Where I Have Been</h1>
    <p>An abridged timeline of my accomplishments and experiences.</p>
        <Header><h1></h1></Header>

    </ContentHeader>
        <Content style={{ backgroundColor: 'rgba(255,255,255,0.1)', width: '90%', marginLeft: '2.5%', borderRadius: 20}}>
            <ColumnLeft>
                <SectionHeader>Degenerate Ape Academy</SectionHeader>
                <p><em>August 2021 - Present</em></p>
            </ColumnLeft>
            <ColumnCenter>
                <ColumnCenterLineSF className='ColumnCenter'>
                    <LogoContainerSF className='LogoContainer'>
                        <img src={stakefishLogo} style={{ resizeMode: "contain", width: 60, marginTop: 32}}></img>
                    </LogoContainerSF>
                    <LogoContainerF2 className='LogoContainer'>
                        <img src={F2PoolLogo} style={{ resizeMode: "contain", width: 100, marginTop: 0}}></img>
                    </LogoContainerF2>
                </ColumnCenterLineSF>
                <ColumnCenterLineDA className='ColumnCenter'>
                    <LogoContainerDA className='LogoContainer'>
                        <img src={degenLogo} style={{ resizeMode: "contain", width: 100, marginTop: 0, borderRadius: 50 }}></img>
                    </LogoContainerDA>
                </ColumnCenterLineDA>
            </ColumnCenter>
            <ColumnRight>
            <Desc>Since August 2021, I have been a member of the Degenrate Ape Academy, one of the original Blue Chip NFT collections launched on Solana.</Desc>
            </ColumnRight>
            
        </Content>
        <Content>
            <ColumnLeft>
                <Desc>
                    Production of a library of content educating users about staking with a validator. Developed knowledge of blockchain and Web3 Development.<br />
                </Desc>
                <iframe width="270" height="152" src="https://www.youtube.com/embed/H6m6EeJ7VN0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </ColumnLeft>
            <ColumnCenter>
            </ColumnCenter>
            <ColumnRight>
                <h2>Video Editor</h2>
                <SectionHeader>stake.fish<br />f2pool</SectionHeader>
                <p><em>October 2020 - Present</em></p>
            </ColumnRight>
            
        </Content>
        <Content style={{ backgroundColor: 'rgba(255,255,255,0.1)', width: '90%', marginLeft: '2.5%', borderRadius: 20}}>
            <ColumnLeft>
                <h2>Web Developer / Media Production</h2>
                <SectionHeader>Artrageous Advertising</SectionHeader>
                <p><em>December 2019 - October 2020</em></p>
            </ColumnLeft>
            <ColumnCenter>
                <ColumnCenterLineAR className='ColumnCenter'>
                    <LogoContainerAR className='LogoContainer'>
                        <img src={artrageousLogo} style={{ resizeMode: "contain", width: 70, marginTop: 15}}></img>
                    </LogoContainerAR>
                </ColumnCenterLineAR>
            </ColumnCenter>
            <ColumnRight>
            <Desc>Developed and maintained a portfolio of websites, and produced engaging social media video content for clients.</Desc>
            </ColumnRight>
            
        </Content>
        <Content>
            <ColumnLeft>
            <Desc>Web Design and Video Production </Desc>
            </ColumnLeft>
            <ColumnCenter>
                <ColumnCenterLineDAG className='ColumnCenter'>
                    <LogoContainerDAG className='LogoContainer'>
                        <img src={DAGLogo} style={{ resizeMode: "contain", width: 80, marginTop: 10}}></img>
                    </LogoContainerDAG>
                </ColumnCenterLineDAG>
            </ColumnCenter>
            <ColumnRight>
                <h2>New Media Administrator</h2>
                <SectionHeader>Davis Automotive Group</SectionHeader>
                <p><em>April 2013 - August 2017</em></p>
            </ColumnRight>
            
        </Content>
        <Content style={{ backgroundColor: 'rgba(255,255,255,0.1)', width: '90%', marginLeft: '2.5%', borderRadius: 20}}>
            <ColumnLeft>
                <h2>Education</h2>
                <SectionHeader>University of Lethbridge</SectionHeader>
                <p><em>2014</em></p>
            </ColumnLeft>
            <ColumnCenter>
                <ColumnCenterLineULeth className='ColumnCenter'>
                    <LogoContainerULeth className='LogoContainer'>
                        <img src={ULethLogo} style={{ resizeMode: "contain", width: 80, marginTop: 10, borderRadius: 25}}></img>
                    </LogoContainerULeth>
                </ColumnCenterLineULeth>
            </ColumnCenter>
            <ColumnRight>
                <Desc>Bachelor of Fine Arts: New Media</Desc>
            </ColumnRight>
            
        </Content>
    </Base>
}

export default About;