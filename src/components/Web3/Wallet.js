import React, { useEffect } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import './Wallet.scss';

function Wallet() {
    const { address, connectWallet, disconnectWallet } = useWeb3()

    /* useEffect(() => {
        if (!address) return

        (async () => {
            const userDoc = {
                _type: 'users',
                _id: address,
                userName: 'Unnamed',
                walletAddress: address,
            }

            const result = await client.createIfNotExists(userDoc)
        })()
    }, [address]) */

    return (
        <div>
            {!address &&
                <button onClick={() => connectWallet("injected")} className="wallet-button">
                    <h2 className="wallet-button-text"> Connect Wallet </h2>
                </button>}
            {address && <button onClick={() => disconnectWallet()} className="wallet-disconnect">
                <h2 className="wallet-button-text"> Disconnect Wallet </h2>
            </button>}
        </div>
    )
}

export default Wallet