import React from 'react';
import './App.css';

import Header from './Header/Header';
import Rate from './Rate/Rate';
import Footer from './Footer/Footer';
import About from './About/About';

import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="site">
        <Header />
        <div className='container'>
          <main>
            <Router>
              <Switch>
                <Route exact path='/' element={<Rate />} />
                <Route exact path='/about' element={<About />} />
              </Switch>
            </Router>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
