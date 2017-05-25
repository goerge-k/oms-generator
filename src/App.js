import React, { Component } from 'react'

function generateOms() {
	const subject_RF = leftPad('' + (1 + Math.floor(Math.random() * 78)), 2, '0')
	const policy_double = '' + Math.floor(Math.random() * 9)
	const bday_year = '' + (1910 + Math.floor(Math.random() * 99))
	const bday_month = leftPad('' + (1 + Math.floor(Math.random() * 11)), 2, '0')
	const bday_day = '' + (51 + Math.floor(Math.random() * 27))
	const seq_number = leftPad('' + (1 + Math.floor(Math.random() * 9998)), 4, '0')
	
	const number = ('' + subject_RF) + policy_double + bday_year + bday_month + bday_day + seq_number
	
	let odd_nums = number
		.split('')
		.map((val, i) => (i % 2 == 0) ? val : '')
		.reduce((a, b) => a + b)
		
	let even_nums = number
		.split('')
		.map((val, i) => (i % 2 == 1) ? val : '')
		.reduce((a, b) => a + b)
		
	const temp_num = even_nums + ('' + parseInt(odd_nums) * 2)
	
	let nums_sum = temp_num
		.split('')
		.map((val) => parseInt(val))
		.reduce((a, b) => a + b)
		
	const checkSum = (nums_sum % 10 == 0) ? 0 : (10 - nums_sum % 10)
		
	return number + checkSum
}

function leftPad(str, len, ch) {
  const length = len - str.length + 1
  return length > 0 ? new Array(length).join(ch) + str : str
}

function mask(num) {
	return '' + num
  // return `${num.substr(0, 3)} ${num.substr(3, 3)} ${num.substr(6, 3)} ${num.substr(9)}`
}

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {number: generateOms()}
  }

  render() {
    return (
      <div className="container">

        <div className="header clearfix">
          <h3 className="text-muted">Генератор номера полиса ОМС</h3>
        </div>

        <div className="jumbotron">
          <span className="number">{mask(this.state.number)}</span>
          <p>
            <button className="btn btn-lg btn-success btn-gen-snils" onClick={() => this.setState({number: generateOms()})}>
              Новое значение
            </button>
          </p>
        </div>

        <footer className="footer">
          <p><a href="https://github.com/mada-mada/oms-generator">GitHub</a></p>
        </footer>
      </div>
    )
  }
}


export default App