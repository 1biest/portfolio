import '../App.css';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import degenApe from'../img/degenApe.png';
import orbitalApe from '../img/OA-7381-small.png';

const Base = styled("div")`

    background: rgb(20,20,30);
    background: linear-gradient(80deg, rgba(20,20,20,1) 0%, rgba(70,70,70,1) 100%);

    padding: 0px 40px 0px 40px;
    position: relative;
    z-index: 2;
`;

const Content = styled("div")`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    height: 100vh;
`;

const Button = styled("div")`
    border-radius: 6px;
    padding: 4px 8px 4px 8px;
    background-color: rgba(0,0,0,0);
    color: #0647bf;
    background: rgb(171,176,196);
    background: linear-gradient(300deg, rgba(171,176,196,1) 0%, rgba(209,209,209,1) 100%);
    border-color: rgb(10,70,220);
    cursor: pointer;
    border: solid;
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

const Column1 = styled("div")`
    width: 45%;
    z-index: 3;
    vertical-align: bottom;
    align-items: bottom;
    padding-bottom: 50px;
`;
const Column2 = styled("div")`
    width: 5%;
    vertical-align: bottom;
    align-items: bottom;
    position: relative;
    left: -500px;
    z-index: 2;
`;

const Column3 = styled("div")`
    width: 50%;
    z-index: 4;
    margin-bottom: 30vh;
`;

const ColumnContent = styled("div")`
    max-width: 500px;
    padding: 30px;
    margin-bottom: 30px;
    background-color: rgba(205,205,205,0.09);
    border-radius: 10px;
    border: solid;
    border-color: rgba(255,255,255,0.15);
    border-width: 1px;
    box-shadow: 0 0 200px rgba(15,15,15,0.15);
`

const SectionHeader = styled("h3")`
    color: #0647bf;
    margin-block-start: 0em;
    margin-block-end: 0em;
`;

const HeaderBtn = styled("h3")`
    width: 40%;
    color: #0647bf;
    cursor: pointer;
    line-height: 120%;
    transition: 500ms;
    z-index: 10;

    :hover {
      color: rgb(255,255,255);
      transition: 100ms;
      text-shadow: -1px 1px 20px rgba(20, 10, 0, 0.85);
    }
`;

const H1Shadow = styled("h1")`
    padding-top: 10px;  
    text-shadow: -1px 1px 20px rgba(20, 10, 0, 0.85);
    font-size: 5vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 90%;
    cursor: default;
    z-index: 1;
`

const About = () => {
    return <Base>
        <Content id="about">
                <Column1>
                    <HeaderBtn onClick={()=> window.open("https://twitter.com/1biesterfeldt", "_blank")}>Twitter</HeaderBtn>
                    <HeaderBtn onClick={()=> window.open("https://www.linkedin.com/in/biest/", "_blank")}>LinkedIn</HeaderBtn>
                    <H1Shadow>Logan<br/> Biesterfeldt</H1Shadow>
                </Column1>
                <Column2>
                <img src={orbitalApe} style={{ resizeMode: "contain", width: 600, marginBottom: 0, paddingBottom: 0, marginTop: 0}}></img>
                </Column2>
                <Column3>
                    <ColumnContent>
                        <SectionHeader>Hello, my name is</SectionHeader>
                        <SectionHeader style={{fontSize: '40px'}}>Logan</SectionHeader>
                        <h2 style={{ marginBlockStart: '1.2em'}}>Web3, Designer, Developer.</h2>
                        <p>I am an experienced Motion Graphic Designer and Front End Developer in Web3 & Blockchain. I am currently creating educational and promotional content for <a href="https://stake.fish" target={'blank'}>stakefish</a>.</p>
                    </ColumnContent>
                        <Button onClick={() => scrollTo("#skills")}>Skills</Button>
                </Column3>
            
        </Content>
    </Base>
}

export default About;