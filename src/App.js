import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { ChainId, DAppProvider } from "@usedapp/core";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import MetamaskDemo from './components/MetamaskDemo';

import Stakefish from './components/Stakefish';
import Artrageous from './components/Artrageous';
import Davis from './components/Davis';

const config = {
  readOnlyChain: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934',
  },
}

function App() {
  return (
    <ReactScrollWheelHandler
        upHandler={(e) => console.log("scroll up")}
        downHandler={(e) => console.log("scroll down")}
        preventScroll={true}
      >

      <DAppProvider config={config}>
        <div className="App">
          <Navbar/>
          <About/>
          <Skills />
          <Experience/>
          <Portfolio/>
          <Footer />
          <MetamaskDemo/>
        </div>
      </DAppProvider>
        ...
    </ReactScrollWheelHandler>
  );
}

export default App;
