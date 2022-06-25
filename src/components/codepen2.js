import styled from 'styled-components';

const Base = styled("div")`
margin: auto;
text-align: left;
`;

const iFrameSrc = {
  codepen:
    '<iframe height="600" style="width: 100%;" scrolling="no" title="CSS Shine &amp; Rotate" src="https://codepen.io/biest/embed/RwQXWeZ?default-tab=result?data-zoom=0.5" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">'
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const Codepen2 = () => {
    return <Base id="Codepen2">
      
      <Iframe iframe={iFrameSrc["codepen"]} allow="autoplay" />

    </Base>
};

export default Codepen2;


