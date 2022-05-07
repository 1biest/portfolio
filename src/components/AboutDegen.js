import '../App.css';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import degenApe from'../img/degenApe.png';

const Base = styled("div")`
    padding: 20px 40px 0px 40px;
    color: rgb(250,250,250);
`;

const Content = styled("div")`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
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
    font-weight: bold;
    transition: background-color 500ms;

    :hover {
      color: rgb(60,60,70);
      background-color: rgb(30,190,250);
      transition: background-color 500ms;
    }
`;

const Column1 = styled("div")`
    width: 45%;
    z-index: 3;
    vertical-align: bottom;
    align-items: bottom;
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
    padding-bottom: 40px;
`;

const SectionHeader = styled("h3")`
    color: rgba(30,190,250);
`;

const H1Shadow = styled("h1")`
    text-shadow: -1px 1px 20px rgba(20, 10, 0, 0.85);
    font-size: 5vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 90%;
`

const About = () => {
    return <Base>
        <Content id="about">
            <Column1>
                <SectionHeader>Twitter</SectionHeader>
                <SectionHeader>LinkedIn</SectionHeader>
                <H1Shadow>Logan<br/> Biesterfeldt</H1Shadow>
            </Column1>
            <Column2>
               <img src={degenApe} style={{ resizeMode: "contain", width: 600, marginBottom: 0}}></img>
            </Column2>
            <Column3>
                <SectionHeader>INTRODUCTION</SectionHeader>
                <h2>Web3, Designer, Developer.</h2>
                <p>Hello, my name is Logan, and I am an experienced Motion Graphic Designer and Front End Developer in Web3.</p>
                <Button onClick={() => scrollTo("#portfolio")}>View Portfolio</Button>
            </Column3>
            
        </Content>
    </Base>
}

export default About;