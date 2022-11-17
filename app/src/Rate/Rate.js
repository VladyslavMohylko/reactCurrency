import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc';

class Rate extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <div className='rate'>
        <h3>Курс валют станом на </h3>
        <div className='flex-container'>
          <div className='block flex-item'>
            <div className='currency-name'>USD</div>
            <div className='currency-in'>1500 Kr</div>
            <div className='currency-out'>1200Kr</div>
          </div>
          <div className='block flex-item'>
            <div className='currency-name'>USD</div>
            <div className='currency-in'>1500 Kr</div>
            <div className='currency-out'>1200Kr</div>
          </div>
          <div className='block flex-item'>
            <div className='currency-name'>USD</div>
            <div className='currency-in'>1500 Kr</div>
            <div className='currency-out'>1200Kr</div>
          </div>
        </div>
        <Calc />
      </div>
    );
  }
}

export default Rate;
