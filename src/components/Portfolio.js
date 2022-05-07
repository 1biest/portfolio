import '../App.css';
import styled from 'styled-components';
import Vimeo from '@u-wave/react-vimeo';
 

const Base = styled("div")`

    background: rgb(20,20,30);
    background: linear-gradient(120deg, rgba(20,20,20,1) 0%, rgba(70,70,70,1) 100%);

    padding: 80px 40px 80px 40px;
    color: rgb(0,250,250);
`;

const Header = styled("div")`
    padding: 40px;
    text-align: right;
    max-width: 1200px;
    margin: auto;
`;

const SectionHeader = styled("h3")`
    color: rgba(30,190,250);
`;

const Content = styled("div")`
    align-items: center;
    justify-content: space-between;
    min-height: 500px;
    margin-left: 20px;
    margin-right: 20px;
    height: 100vh;
`;

const Button = styled("div")`
    border-radius: 6px;
    padding: 4px 8px 4px 8px;
    background-color: rgba(0,0,0,0);
    color: rgb(250,250,250);
    cursor: pointer; 
`;
const VimeoWrapper = styled("div")`
    width: 90%;
    margin: auto;
    text-align: center;
`;

const About = () => {
    return <Base id="portfolio">
        <Header>
            <SectionHeader>PORTFOLIO</SectionHeader>
            <h2>Some Things I've Built</h2>
        </Header>
        <Content>
            <VimeoWrapper>
                <Vimeo width={600} video="453314475" />
            </VimeoWrapper>
        </Content>
    </Base>
}

export default About;