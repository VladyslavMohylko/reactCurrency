import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className='calculator'>
        <h3>Калькулятор обміну валют</h3>
        <div className='block'>
          <div>Я хочу</div>
          <div><label><input type="radio" name="radio" defaultValue="0" />купити</label></div>
          <div><label><input type="radio" name="radio" defaultValue="1" />продати</label></div>
          <div>
            <input type="number" defaultValue="150" />
            <select name='' id=''>
              <option value="USD">USD</option>
              <option value="USD">EUR</option>
            </select>
          </div>
          <div>
            <h4>Результат</h4>
            <ul className='calc-res'>
              <li>EUR 150</li>
              <li>EUR 150</li>
              <li>EUR 150</li>
              <li>EUR 150</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
