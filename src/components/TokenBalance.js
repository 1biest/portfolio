import React from 'react';
import { useCoingeckoPrice } from "@usedapp/coingecko";
import { useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'


const Tokenbalance = () => {
    const price = useCoingeckoPrice("ethereum", "usd");
    const ethers = useEthers();
    const accountAddress = (ethers.account);
    const etherBalance = useEtherBalance(accountAddress);
    const usdEthBalance = (etherBalance * price / 1000000000000000000).toFixed(2);

    return <div>
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
    </div>
};

export default Tokenbalance;