import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar.js';
import Footer from './components/Footer.js';
import Homepage from './components/pages/Homepage.js';
import Aboutus from './components/pages/Aboutus.js';
import Contact from './components/pages/Contact';
import Educational from './components/pages/Educational';
import Scroller from './components/Scroller';
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: " " };
  }

  callAPI() {
    fetch("http://localhost:4500/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {

    const activeChainId = ChainId.Rinkeby;

    return (
      <>
        <ThirdwebProvider desiredChainId={activeChainId}
        >
          <Router>
            <Scroller />
            <Topbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/about-us' element={<Aboutus />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/educational' element={<Educational />} />
            </Routes>
            <Footer />
          </Router>
        </ThirdwebProvider>
      </>
    );
  }
}

export default App;
