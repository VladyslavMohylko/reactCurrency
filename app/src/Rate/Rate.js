import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc';

class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {},
    }
    this.currency = ['USD', 'UAH', 'CZK', 'PHP']
  }

  handleLoad = () => {
    this.getRate();
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad)
  }

  getRate = () => {
    fetch(`https://api.exchangerate.host/latest`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ currencyRate: result })
      })
  }

  render() {
    return (
      <div className='rate'>
        <h3>Курс валют станом на {this.state.date}</h3>
        <div className='flex-container'>
          {Object.keys(this.state.currencyRate).map((keyName) => (
            <div className='block flex-item' key={keyName}>
              <div className='currency-name'>{keyName}</div>
              <div className='currency-in'>{this.state.currencyRate[keyName].toFixed(3)}</div>
              {/* <div className='currency-out'>1200Kr</div> */}
              <p>* Можна придбати за 1 EUR</p>
            </div>
          )
          )}
        </div>
        <Calc rate={this.state.currencyRate}/>
      </div>
    );
  }
}

export default Rate;
