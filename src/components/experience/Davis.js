import '../../App.css';
import styled from 'styled-components';


const Base = styled("div")`
    margin: auto;
    text-align: left;
`;

const SectionHeader = styled("h3")`
    line-height: 100%;
`;

const Desc = styled("p")`
    text-align: left;
    font-size: 12px;
`

const Davis = () => {
    return <Base id="davis">
        <h2>New Media Administrator</h2>
        <SectionHeader>Davis Automotive Group</SectionHeader>
        <p><em>April 2013 - August 2017</em></p>
        <Desc>Web Design and Video Production </Desc>
    </Base>
};

export default Davis;