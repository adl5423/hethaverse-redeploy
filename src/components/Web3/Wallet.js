import React, { useEffect } from 'react';
import { useAddress, useMetamask, useDisconnect } from '@thirdweb-dev/react';
import './Wallet.scss';

function Wallet() {
    const connectWithMetamask = useMetamask()
    const disconnectWallet = useDisconnect()
    const address = useAddress()

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
        <>
            <div>
                {address ? (
                    <>
                        <button onClick={disconnectWallet} className="wallet-disconnect">
                            <h2 className="wallet-button-text"> Disconnect Wallet </h2>
                        </button>
                    </>
                ) : (
                    <button onClick={connectWithMetamask} className="wallet-button">
                        <h2 className="wallet-button-text"> Connect Wallet </h2>
                    </button>
                )}
            </div>
        </>
    )
}



export default Wallet