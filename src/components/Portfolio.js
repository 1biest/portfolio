import '../App.css';
import styled from 'styled-components';
import Vimeo from '@u-wave/react-vimeo';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Codepen1 from './codepen1.js';
import Codepen2 from './codepen2.js';
import MetamaskDemo from './MetamaskDemo.js';
 

const Base = styled("div")`

    background: rgb(20,20,30);
    background: linear-gradient(120deg, rgba(20,20,20,1) 0%, rgba(70,70,70,1) 100%);

    color: rgb(0,250,250);
    margin: auto;
    position: relative;
`;

const Content = styled("div")`
    margin-left: 20px;
    margin-right: 20px;
    height: 100vh;
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

const VimeoWrapper = styled("div")`
    margin: auto;
    text-align: center;
    width: 400px;
    margin-bottom: 30px;
`;

const Container = styled('div')`
    display: flex;
    justify-content: center;
    /*flex-wrap: wrap;*/
`

const gridCell = styled('div')`
    margin: 10px;
`

const About = () => {
    return <Base id="portfolio">
        <Content>
            <Header>
                <SectionHeader>PORTFOLIO</SectionHeader>
                <h2>Coding Examples</h2>
            </Header>
            <Container>
                {/*<gridCell>
                    <VimeoWrapper>
                        <Vimeo responsive={false} video="453314475" />
                    </VimeoWrapper>
</gridCell>*/}
                <gridCell>
                    <MetamaskDemo></MetamaskDemo>
                </gridCell>
                <gridCell>
                    <Codepen1></Codepen1>
                </gridCell>
                <gridCell>
                    <Codepen2></Codepen2>
                </gridCell>

            </Container>
    
        </Content>
    </Base>
}

export default About;

