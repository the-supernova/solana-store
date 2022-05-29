import React from "react";
import HeadComponent from '../components/Head';

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  
  
  return (
    <div className="App">
      <HeadComponent/>
      <div className="container">
        <header className="header-container">
          <p className="header"> 😳 Emoji Store 😈</p>
          <p className="sub-text">The only emoji store that accepts sh*tcoins</p>
        </header>

        <main>
          <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />
        </main>

        <div className="footer-container">
          <p> Built with 😈</p>
        </div>
      </div>
    </div>
  );
};

export default App;
