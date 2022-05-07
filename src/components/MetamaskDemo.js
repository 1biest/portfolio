import React from 'react';
import { useEthers, useEtherBalance, shortenAddress, useLookupAddress } from '@usedapp/core';
import { useCoingeckoPrice } from '@usedapp/coingecko';
import { formatEther } from '@ethersproject/units'
import styled from "styled-components";

import Tokenbalance from './TokenBalance';

const Base = {

    background: 'rgb(20,20,30)',
    background: 'linear-gradient(60deg, rgba(20,20,30,1) 0%, rgba(60,70,70,1) 100%)',
    
    margin: 'auto',
    paddingTop: '200px',
    height: '100vh',
    color: '#000',
}

const SectionHeader = {
    color: 'rgba(30,190,250)',
    lineHeight: '100%',
    textAlign: 'center',
    paddingBottom: "24px",
}

const Content = styled("div")`
    width: 50%;
    max-width: 500px;
    padding: 20px;
    padding-bottom: 40px;
    align-items: center;
    text-align: center;
    border-radius: 20px;
    margin: auto;
    background: rgb(253,120,60);
    box-shadow: 0px 3px 60px 10px rgba(0, 0, 0, 0.3), inset -1px 1px 60px 20px rgba(255, 255, 255, 0.1);
    transform: scale(1);
    transition: 500ms;
  
    :hover {
      transform: scale(0.95);
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
    transition: 500ms;
  
    :hover {
      color: rgb(0,0,0);
      background: rgb(253,120,60);
      transform: scale(1.05);
    }
`;

const MetamaskDemo = () => {
    const ETHCADprice = useCoingeckoPrice('ethereum', 'USD');
    const ethers = useEthers();
    const accountAddress = (ethers.account);
    const etherBalance = useEtherBalance(accountAddress);
    const usdEthBalance = (etherBalance * ETHCADprice / 1000000000000000000).toFixed(2);
    const ens = useLookupAddress();
    const { activateBrowserWallet, account } = useEthers()

    return(
        <div id="demo" style={Base}>
            <h3 style={SectionHeader}>WEB3 DEMO</h3>
            <Content>
                <p style={{color: 'rgba(0,0,0,1'}}>Here is a mini app to check your MetaMask balance utilising the useDApp framework.</p>
                <h2 style={{color: 'rgba(0,0,0,1'}}>Check MetaMask Balance</h2>

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