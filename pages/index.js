import React from "react";
import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


const App = () => {
  
  const { publicKey } = useWallet();

  const renderNotConnectedContainer = () => (
    <div>
      <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />

      <div className="button-container">
        <WalletMultiButton className="cta-button connect-wallet-button" />
      </div>
    </div>
  );
  
  return (
    <div className="App">
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 Emoji Store 😈</p>
          <p className="sub-text">The only emoji store that accepts sh*tcoins</p>
        </header>

        <main>
          {publicKey ? 'Connected' : renderNotConnectedContainer()}
        </main>

        <div className="footer-container">
          <p> Built with 😈</p>
        </div>
      </div>
    </div>
  );
};

export default App;
