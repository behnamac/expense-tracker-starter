# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

No test runner is configured.

## Stack

React 19 + Vite 7. No routing, no state management library, no TypeScript.

## Architecture

`src/App.jsx` holds `transactions` state, computes totals, and renders three child components. Styles are split across `src/App.css` (component-scoped) and `src/index.css` (global reset/body).

### Components

- **`src/components/Summary.jsx`** — pure display, receives `totalIncome`, `totalExpenses`, `balance` as props.
- **`src/components/TransactionForm.jsx`** — owns its own form state, calls `onAdd(transaction)` on submit. Parses `amount` to `parseFloat` before passing it up.
- **`src/components/TransactionList.jsx`** — owns `filterType` and `filterCategory` state, receives `transactions` as a prop.

### State shape

`transactions` (useState in App) is the sole source of truth — in-memory only, not persisted. Each item: `{ id, description, amount, type, category, date }`. `amount` is a number.

### Other intentional limitations

- `filteredTransactions` in `TransactionList` is recomputed inline on every render (not memoized).
- CSS uses flat class names like `.income-amount`, `.expense-amount`, `.summary-card`, `.balance-amount` — no CSS modules or utility framework.
- `CATEGORIES` is duplicated in both `TransactionForm` and `TransactionList`.

This project is intentionally simple — it's the teaching starter for a Claude Code course.
