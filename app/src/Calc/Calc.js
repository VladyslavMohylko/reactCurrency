import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result : 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {rate: props.rate};
  }

  calcRate = (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({result: (countCurrency / this.state.rate[typeCurrency]).toFixed(3)})
  }

  render() {
    return (
      <div className='calculator'>
        <h3>Калькулятор обміну валют</h3>
        <div className='block'>
          <div>Я хочу</div>
          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency"/>
              <select name='type-currency' id=''>
                {Object.keys(this.props.rate).map((keyName) => (
                  <option defaultValue={keyName} key={keyName}>{keyName}</option>
                )
                )}
              </select>
              <input type="Submit" defaultValue="Розрахувати" />
            </form>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className='calc-res'>
              <li>EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
