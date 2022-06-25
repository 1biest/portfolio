import React from 'react';
import { useCoingeckoPrice } from "@usedapp/coingecko";
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import styled from "styled-components";



const Content = styled("div")`
    transition: all 500ms;
`;


const Tokenbalance = () => {
    const price = useCoingeckoPrice("ethereum", "usd");
    const ethers = useEthers();
    const accountAddress = (ethers.account);
    const etherBalance = useEtherBalance(accountAddress);
    const usdEthBalance = (etherBalance * price / 1000000000000000000).toFixed(2);

    return <Content>
            {etherBalance ? (
                <h4 style={{color: 'rgba(0,0,0,1'}}>
                    ETH Balance: {formatEther(etherBalance)}
                </h4>
            ) : (null)}
            {etherBalance ? (
                <h3 style={{color: 'rgba(0,0,0,1'}}>
                    Value in USD: ${usdEthBalance}
                </h3>
            ) : (null)}
    </Content>
};

export default Tokenbalance;