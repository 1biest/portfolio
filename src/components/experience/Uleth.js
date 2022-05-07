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
    font-size: 12px;
`

const Uleth = () => {
    return <Base>
        <h2>Education</h2>
        <SectionHeader>University of Lethbridge</SectionHeader>
        <p><em>2014</em></p>
        <Desc>Bachelor of Fine Arts: New Media</Desc>
    </Base>
};

export default Uleth;