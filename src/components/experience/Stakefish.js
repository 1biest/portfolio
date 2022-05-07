import '../../App.css';
import styled from 'styled-components';
import ReactPlayer from 'react-player'


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
    font-size: 12px;
`

const Stakefish = () => {
    return <Base id="stakefish">
        <h2>Video Editor</h2>
        <SectionHeader>stake.fish<br />f2pool</SectionHeader>
        <p><em>October 2020 - Present</em></p>
        <Desc>Production of a library of content educating users about staking with a validator. Developed knowledge of blockchain and Web3 Development.<br /></Desc>
    
    
    </Base>
};

export default Stakefish;