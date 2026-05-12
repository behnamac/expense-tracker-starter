import { formatCurrency } from '../utils/formatCurrency';

function Summary({ totalIncome, totalExpenses, balance }) {
  const balanceColor = balance >= 0 ? 'var(--color-balance-pos)' : 'var(--color-balance-neg)';
  const balanceStr = balance < 0 ? `−$${formatCurrency(Math.abs(balance))}` : `$${formatCurrency(balance)}`;

  return (
    <div className="summary">
      <div className="summary-card summary-card--income">
        <p className="summary-card-label">Income</p>
        <p className="income-amount">${formatCurrency(totalIncome)}</p>
      </div>
      <div className="summary-card summary-card--balance">
        <p className="summary-card-label">Balance</p>
        <p className="balance-amount" style={{ color: balanceColor }}>{balanceStr}</p>
      </div>
      <div className="summary-card summary-card--expense">
        <p className="summary-card-label">Expenses</p>
        <p className="expense-amount">${formatCurrency(totalExpenses)}</p>
      </div>
    </div>
  );
}

export default Summary;
