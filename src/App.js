import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar.js';
import Homepage from './components/pages/Homepage.js';

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
    return (
      <>
        <Router>
          <Topbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
