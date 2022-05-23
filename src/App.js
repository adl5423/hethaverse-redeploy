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
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

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

    const supportedChainIds = [1, 4]
    const connectors = {
      injected: {},
      walletlink: {
        appName: "hethaverse",
        url: "/localhost:3001",
        darkMode: false,
      }
    }

    return (
      <>
        <ThirdwebWeb3Provider
          supportedChainIds={supportedChainIds}
          connectors={connectors}
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
        </ThirdwebWeb3Provider>
      </>
    );
  }
}

export default App;
