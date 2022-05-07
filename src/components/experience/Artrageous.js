import '../../App.css';
import styled from 'styled-components';


const Base = styled("div")`
    margin: auto;
    text-align: left;
`;

const SectionHeader = styled("h3")`
    color: rgba(30,190,250);
    line-height: 100%;
`;

const Desc = styled("p")`
    text-align: left;
    font-size: 11px;
`

const Artrageous = () => {
    return <Base id="artrageous">
    <h2>Web Developer / Media Production</h2>
    <SectionHeader>Artrageous Advertising</SectionHeader>
    <p><em>December 2019 - October 2020</em></p>
    <Desc>Developed and maintained a portfolio of websites, and produced engaging social media video content for clients.</Desc>
    </Base>
};

export default Artrageous;