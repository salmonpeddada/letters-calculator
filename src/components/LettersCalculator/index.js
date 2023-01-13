// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {value: 0}

  onPress = event => {
    const letter = event.target.value
    // console.log(letter)
    const a = letter.length

    if (letter !== '') {
      this.setState({value: a})
    }
  }

  render() {
    const {value} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="card">
            <h1>Calculate the Letters you enter</h1>
            <label htmlFor="search">Enter the phrase</label>
            <input
              id="search"
              type="search"
              placeholder="Enter the phrase"
              onChange={this.onPress}
            />
            <p className="letter-count">No.of letters: {value}</p>
          </div>
          <div className="card1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
