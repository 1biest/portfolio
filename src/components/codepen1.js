import styled from 'styled-components';

const Base = styled("div")`
margin: auto;
text-align: left;
`;

const iFrameSrc = {
  codepen:
    '<iframe height="600" style="width: 100%" scrolling="no" title="CSS Shine &amp; Rotate" src="https://codepen.io/biest/embed/eYVwEZZ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">'
};

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

const Codepen1 = () => {
    return <Base id="Codepen1">
      
      <Iframe iframe={iFrameSrc["codepen"]} allow="autoplay" />

    </Base>
};

export default Codepen1;


