import '../../App.css';
import styled from 'styled-components';


const Base = styled("div")`
    margin: auto;
    text-align: center;
`;

const SectionHeader = styled("h3")`
    color: rgba(30,190,250);
    line-height: 100%;
`;

const Desc = styled("p")`
    text-align: left;
    font-size: 12px;
`

const Degen = () => {
    return <Base>
    <SectionHeader>Degenerate Ape Academy</SectionHeader>
    <p><em>August 2021 - Present</em></p>
    <Desc>Since August 2021, I have been a member of the Degenrate Ape Academy, one of the original Blue Chip NFT collections launched on Solana.</Desc>
    </Base>
};

export default Degen;