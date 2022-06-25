import React from 'react';
import { useEthers, useEtherBalance, shortenAddress, useLookupAddress } from '@usedapp/core';
import { useCoingeckoPrice } from '@usedapp/coingecko';
import { formatEther } from '@ethersproject/units'
import styled from "styled-components";

import Tokenbalance from './TokenBalance';

const Base = {
    height: '600px', 
    margin: 'auto',
    color: '#000',
    transition: 'all 500ms',
}

const SectionHeader = {
    color: 'rgba(30,190,250)',
    lineHeight: '100%',
    textAlign: 'center',
    paddingBottom: "24px",
}

const Content = styled("div")`
    padding: 30px;
    height: 540px;
    background: rgb(253,120,60); 
    align-items: center;
    text-align: center;
    margin: auto;
    transform: scale(1);
    transition: all 500ms;
  
    :hover {
      transform: scale(0.95);
      transition: all 500ms;
      background: rgba(230,230,230,1);
      box-shadow: 10px 10px 60px 10px rgba(0, 0, 0, 0.3), inset -1px 1px 60px 20px rgba(255, 255, 255, 1);
    }
`;

const MetamaskButton = styled("button")`
    padding: 0px 20px 0px 20px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 24px 10px 24px;
    font-size: 16px;
    font-weight: 600;
    color: rgb(253,120,60);
    border: solid;
    border-width: 2px;
    border-color: rgb(253,120,60);
    background: rgba(255,255,255,0.9);
    transform: scale(1);
    transition: all 500ms;
  
    :hover {
      color: rgb(0,0,0);
      background: rgb(253,120,60);
      transform: scale(1.05);
      transition: all 500ms;
    }
`;

const MetamaskDemo = () => {
    const ETHCADprice = useCoingeckoPrice('ethereum', 'USD');
    const ethers = useEthers();
    const accountAddress = (ethers.account);
    const etherBalance = useEtherBalance(accountAddress);
    const ens = useLookupAddress();
    const { activateBrowserWallet, account } = useEthers()

    return(
        <div id="demo" style={Base}>
            <Content>
                <h2 style={{color: 'rgba(0,0,0,1'}}>Check MetaMask Balance</h2>
                <p style={{color: 'rgba(0,0,0,1'}}>Here is a mini app to check your MetaMask balance utilising the useDApp framework.</p>

                {ETHCADprice ? (
                    <h5>ETH Current Price ${ETHCADprice} USD</h5>
                ):null}

                {ethers.account ? (
                    <MetamaskButton onClick={() => ethers.deactivate()}>
                        <h3 style={{color: 'rgba(0,0,0,1'}}>{ens ?? shortenAddress(ethers.account)}</h3>
                    </MetamaskButton>
                ):(
                    <MetamaskButton onClick={() => ethers.activateBrowserWallet()}>
                        <h3 style={{color: 'rgba(0,0,0,1'}}>Connect with MetaMask</h3>
                    </MetamaskButton>
                )}
                <Tokenbalance/>
            </Content>
        </div>
    )
}

export default MetamaskDemo;