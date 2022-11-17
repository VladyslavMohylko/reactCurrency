import React from 'react';
import './App.css';

import Header from './Header/Header';
import Rate from './Rate/Rate';
import Footer from './Footer/Footer';

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div className="site">
        <Header />

        <div className='container'>
          <main>
            <Rate />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
