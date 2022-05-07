import '../App.css';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import IconDev from '../img/development-skill.svg';
import IconAnalytics from '../img/visualization-skill.svg';
import IconDesign from '../img/transformation-skill.svg';

const Base = styled("div")`

background: rgb(20,20,30);
background: linear-gradient(100deg, rgba(20,20,20,1) 0%, rgba(70,70,70,1) 100%);


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
    background-color: rgba(205,205,205,0.09);
    border-radius: 10px;
    border: solid;
    border-color: rgba(255,255,255,0.15);
    border-width: 1px;
    box-shadow: 0 0 200px rgba(15,15,15,0.15);
`;

const Section = styled("div")`
    width: 44%;
    margin: 0% 3% 0% 3%;
    padding: 30px;
    padding-bottom: 20px;
    border-radius: 10px;
    min-height: 260px;

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

const SkillCardSectionHeader = styled("h3")`
    color: rgba(30,190,250);
    max-width: 50%;
`;

const SkillCardP = styled("p")`
    max-width: 50%;
    text-align: right;
`;

const SkillCard = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 94%;
    padding: 0px 30px 0px 30px;
    margin: 3%;
    background-color: rgba(0,0,0,0.2);
    border-radius: 10px;
    border: solid;
    border-color: rgba(255,255,255,0.15);
    border-width: 1px;
    box-shadow: 0 0 200px rgba(15,15,15,0.15);
    cursor: default;

    transition: all 1000ms;
    transform: scale(1);
  
    :hover {
      transform: scale(0.95);
      transition: all 500ms;
      background-color: rgba(205,205,205,0.19);
    }
`


const About = () => {
    return <Base id="skills">
        <Content>
            <Header>
                <SectionHeader>SKILLS</SectionHeader>
                <h2>What I Am Great At</h2>
            </Header>
            <Body>
                <Section>
                    <SkillCard>
                        <SkillCardSectionHeader>Web Engineering</SkillCardSectionHeader>
                        <SkillCardP>
                        HTML5 & CSS3<br/>NPM & React<br/>Ethers.js
                        </SkillCardP>
                    </SkillCard>
                    <SkillCard>
                        <SkillCardSectionHeader>Analytics</SkillCardSectionHeader>
                        <SkillCardP>
                        Excel<br/>Google Data Studio<br/>Google Analytics
                        </SkillCardP>
                    </SkillCard>
                    <SkillCard>
                        <SkillCardSectionHeader>Motion Graphics<br/> & Design</SkillCardSectionHeader>
                        <SkillCardP>
                        Adobe CS<br/>Unreal Engine<br/>Figma
                        </SkillCardP>
                        
                    </SkillCard>
                </Section>

                <SectionText>
                    <h3>A bit about me</h3>
                    <p>I started coding and animating with Flash and Actionscript 3 back when Newgrounds was the place to be. Since then, I have been developing interactive animated content for video and web.</p>
                    <p>I dove head first into the decentralized blockchain and owership economy. A paradigm shift to decentralization and self sovereignty is being realised, and I am contributing to the new wave of innovation.</p>
                    <p>I am currently creating educational content about Proof of Stake at <a href="https://stake.fish" target={'blank'}>stakefish</a>.</p>
                    
                    <Button onClick={() => scrollTo("#experience")}>Experience</Button>
                </SectionText>

            </Body>
            
        </Content>
    </Base>
}

export default About;