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

All logic lives in a single file: `src/App.jsx`. Styles are split across `src/App.css` (component-scoped) and `src/index.css` (global reset/body).

### State shape

`transactions` (useState) is the sole source of truth — in-memory only, not persisted. Each item: `{ id, description, amount, type, category, date }`.

### Known bugs in the starter

- **`amount` is a string**: form input sets it as a string, so `.reduce((sum, t) => sum + t.amount, 0)` string-concatenates instead of summing — fix by parsing with `parseFloat` at read time or `Number()` on input.
- **Seed data**: transaction #4 ("Freelance Work") has `type: "expense"` but `category: "salary"` — likely should be `type: "income"`.

### Other intentional limitations

- `filteredTransactions` is recomputed inline on every render (not memoized).
- CSS uses flat class names like `.income-amount`, `.expense-amount`, `.summary-card`, `.balance-amount` — no CSS modules or utility framework.

This project is intentionally simple and slightly broken — it's the teaching starter for a Claude Code course.
