import { useState } from 'react';

const CATEGORIES = ["food", "housing", "utilities", "transport", "entertainment", "salary", "other"];

const CATEGORY_ICONS = {
  food: '🍽', housing: '🏠', utilities: '⚡',
  transport: '🚗', entertainment: '🎬', salary: '💼', other: '📦'
};

const CATEGORY_BG = {
  food:          'rgba(255,107,107,0.14)',
  housing:       'rgba(78,205,196,0.14)',
  utilities:     'rgba(255,217,61,0.14)',
  transport:     'rgba(108,92,231,0.14)',
  entertainment: 'rgba(253,121,168,0.14)',
  salary:        'rgba(0,206,201,0.14)',
  other:         'rgba(253,203,110,0.14)',
};

const fmt = (n) =>
  Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function TransactionList({ transactions }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filtered = transactions;
  if (filterType !== "all")     filtered = filtered.filter(t => t.type === filterType);
  if (filterCategory !== "all") filtered = filtered.filter(t => t.category === filterCategory);

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h2>Transactions</h2>
        <div className="filters">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="transactions-empty">No transactions yet.</p>
      ) : (
        <div className="transaction-list">
          {filtered.map(t => (
            <div key={t.id} className="transaction-row">
              <div
                className="transaction-icon"
                style={{ background: CATEGORY_BG[t.category] ?? CATEGORY_BG.other }}
              >
                {CATEGORY_ICONS[t.category] ?? CATEGORY_ICONS.other}
              </div>
              <div className="transaction-info">
                <div className="transaction-desc">{t.description}</div>
                <div className="transaction-meta">{t.date} · {t.category}</div>
              </div>
              <div className={`transaction-amount ${t.type === 'income' ? 'income-amount' : 'expense-amount'}`}>
                {t.type === 'income' ? '+' : '−'}${fmt(t.amount)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TransactionList;
