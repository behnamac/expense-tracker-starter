import './App.css'
import Summary from './components/Summary'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'
import SpendingChart from './components/SpendingChart'
import { useTheme } from './hooks/useTheme'
import { useTransactions } from './hooks/useTransactions'

function App() {
  const { darkMode, toggleTheme } = useTheme();
  const { transactions, totalIncome, totalExpenses, balance, addTransaction } = useTransactions();

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>Finance Tracker</h1>
          <p className="subtitle">Track your income and expenses</p>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀ Light' : '☾ Dark'}
        </button>
      </header>
      <Summary totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
      <TransactionForm onAdd={addTransaction} />
      <SpendingChart transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App
