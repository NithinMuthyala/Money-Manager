import './index.css'

const TransactionItem = props => {
  const {eachTrans, onDeleteClicked} = props
  const {id, title, amount, type} = eachTrans

  const deleteClicked = () => {
    onDeleteClicked(id)
  }
  return (
    <li className="transaction-history-item">
      <p className="category">{title}</p>
      <p className="category">Rs {amount}</p>
      <p className="category">{type}</p>
      <div className="btn-container">
        <button type="button" data-testid="delete" onClick={deleteClicked}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
