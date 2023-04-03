import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expenseAmount, balanceAmount} = props
  return (
    <div className="cards-container">
      <div className="balance-card">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
        </div>
        <div className="balance-text-amount-container">
          <p className="balance-text">Your Balance</p>
          <p className="balance-amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-card">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
        </div>
        <div className="balance-text-amount-container">
          <p className="balance-text">Your Income</p>
          <p className="balance-amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="expense-card">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
        </div>
        <div className="balance-text-amount-container">
          <p className="balance-text">Your Expenses</p>
          <p className="balance-amount" data-testid="expensesAmount">
            Rs {expenseAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
