import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    expenseList: [],
  }

  inputTitle = event => {
    this.setState({title: event.target.value})
  }

  inputAmount = event => {
    const value = parseInt(event.target.value)
    this.setState({amount: value})
  }

  inputType = event => {
    this.setState({type: event.target.value})
  }

  addButton = event => {
    event.preventDefault()
    const {title, amount, type, expenseList} = this.state
    console.log(type)
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === type,
    )
    console.log(typeOption)
    const {displayText} = typeOption
    const transaction = {
      id: v4(),
      title,
      amount,
      type: displayText,
    }
    console.log(transaction)
    this.setState(prevState => ({
      expenseList: [...prevState.expenseList, transaction],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
    console.log(expenseList)
  }

  onDeleteClicked = id => {
    const {expenseList} = this.state
    const filteredExpenses = expenseList.filter(eachExp => eachExp.id !== id)

    this.setState({expenseList: filteredExpenses})
  }

  getIncome = () => {
    const {expenseList} = this.state
    let incomeAmount = 0
    expenseList.forEach(eachtrans => {
      if (eachtrans.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachtrans.amount
      }
    })
    return incomeAmount
  }

  getExpense = () => {
    const {expenseList} = this.state
    let expensesAmount = 0
    expenseList.forEach(eachTrans => {
      if (eachTrans.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTrans.amount
      }
    })
    return expensesAmount
  }

  //   balanceAmount = () => {
  //         const {expenseList} = this.state
  //   }

  render() {
    const {title, amount, type, expenseList} = this.state

    const incomeAmount = this.getIncome()
    const expenseAmount = this.getExpense()
    const balanceAmount = incomeAmount - expenseAmount
    console.log(type)
    return (
      <div className="money-manager-app">
        <div className="bg-container">
          <div className="heading-container">
            <h1 className="heading-name">Hi, Nithin</h1>
            <p className="welcome-description">
              Welcome Back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="money-details-manager-container">
            <div className="money-details-container">
              <MoneyDetails
                incomeAmount={incomeAmount}
                expenseAmount={expenseAmount}
                balanceAmount={balanceAmount}
              />
            </div>

            <div className="transaction-containers">
              <div className="user-transaction-container">
                <h1 className="transaction-heading">Add Transaction</h1>
                <form className="form-container" onSubmit={this.addButton}>
                  <div className="transaction-title-container">
                    <label htmlFor="input-type">TITLE</label>
                    <input
                      type="text"
                      onChange={this.inputTitle}
                      value={title}
                      id="input-type"
                      placeholder="TITLE"
                    />
                  </div>
                  <div className="transaction-amount-container">
                    <label htmlFor="input-amount">AMOUNT</label>
                    <input
                      onChange={this.inputAmount}
                      value={amount}
                      id="input-amount"
                      type="text"
                      placeholder="AMOUNT"
                    />
                  </div>
                  <div className="transaction-type-dropdown">
                    <label htmlFor="amount-type">Type</label>
                    <select id="amount-type" onChange={this.inputType}>
                      {transactionTypeOptions.map(eachOption => (
                        <option
                          key={eachOption.optionId}
                          value={eachOption.optionId}
                        >
                          {eachOption.displayText}
                        </option>
                      ))}
                      {/* <option >Income</option>
                      <option>Expenses</option> */}
                    </select>
                  </div>
                  <div className="add-btn-container">
                    <button type="submit" className="add-button">
                      Add
                    </button>
                  </div>
                </form>
              </div>

              {/* transactions card */}
              <div className="transaction-history-container">
                <h1 className="history-heading">History</h1>
                <ul className="ul-container">
                  <li className="transaction-history-headings-container">
                    <p className="history-heading">Title</p>
                    <p className="history-heading">Amount</p>
                    <p className="history-heading">Type</p>
                  </li>
                  {expenseList.map(eachTrans => (
                    <TransactionItem
                      key={eachTrans.id}
                      eachTrans={eachTrans}
                      onDeleteClicked={this.onDeleteClicked}
                    />
                  ))}
                  {/* <TransactionItem /> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
